import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image,ScrollView, Button, request,navigateTo, Navigator, getSystemInfoSync, showLoading, hideLoading } from 'remax/wechat';
import styles from './index.css';
import {observer} from 'mobx-react';
import appStore from '../../store'

const sysInfo = getSystemInfoSync();

const sw = sysInfo.screenWidth;
const sh = sysInfo.screenHeight;

const RATIO = Math.ceil(750/sw);
function rtx(n) {
  return RATIO * n;
}

const RADIUS = 12;
const CARD_GAP = 18;
const PADDING = 20;
const CARD_WIDTH = sw - PADDING * 2;
const CARD_HEIGHT = CARD_WIDTH*3/5;
const CARD_CONTAINER_HEIGHT = CARD_HEIGHT + CARD_GAP //CARD_HEIGHT + CARD_GAP;
const CARD_CONTAINER_WIDTH = sw;

const TEXT_DEFAULT = '#121212';
const TEXT_ACTIVE = '#FA2641';

const Index = observer((props) => {

  const isFetchingRef = useRef(false);
  const [currentTabIndex, setTabIndex] = useState(0);
  const [tabsData, settabsdata] = useState([]);
  const [videoData, setvideodata] = useState([])
  const [error, seterror] = useState(null);

  const currentFetchPageRef = useRef(1);


  const fetchList = (type, more) => {
    isFetchingRef.current = true;
    showLoading();
    request({
      url: 'http://qyzs.zdw1.cn/api/video/list',
      data: {
        type: type,
        page: currentFetchPageRef.current
      },
      success(res) {
        // console.log("列表数据获取成功", res)
        if (more) {
          let list = [...videoData,...res.data]
          setvideodata(list)
        } else {
          let list = [...res.data];
          setvideodata(list);
        }
      },
      fail(err) {
        seterror(err);
      },
      complete() {
        isFetchingRef.current = false;
        hideLoading();
        // console.log("列表数据获取执行完毕")
      }
    })
  };
  const fetchTabs = () => {
    request({
      url: 'http://qyzs.zdw1.cn/api/video/indextype',
      success(res) {
        console.log("标签栏数据获取成功", res)
        let list = [...res.data];
        settabsdata(list);
      },
      fail(err) {
        console.log("标签栏数据获取失败", err)
      },
      complete() {
        console.log("标签栏数据获取执行完毕")
      }
    })
  }

  const onScrollToLower = (event) => {
    // console.log("滚动到底部",isFetchingRef.current)
    if (isFetchingRef.current == false) {
      console.log("滚动到底部 INNER")
      let type = tabsData[currentTabIndex]
      currentFetchPageRef.current += 1;
      fetchList(type, true)
    }
  }

  useEffect(() => {
    fetchTabs();
  }, [])

  useEffect(() => {
    if (tabsData.length > 0) {
      currentFetchPageRef.current = 1;
      let type = tabsData[currentTabIndex]
      fetchList(type, false);
    }
  }, [currentTabIndex, tabsData])

  if (error) {
    return (
      <View style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image src={"/images/error.png"} style={{ width: `${sysInfo.screenWidth * 0.6}PX`, height: `${sysInfo.screenWidth * 0.6}PX` }} />
        <Text style={{ fontSize: '17pt' }}>网络错误❌</Text>
      </View>
    )
  }

  if (tabsData.length == 0) {
    return (
      <View>

      </View>
    )
  }

  return (
    <View className={styles.container}>
      <View style={{
        position: 'fixed',
        zIndex: 99,
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: rtx(50),
        width: '100%',
        backgroundColor: 'white',
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderColor: '#f1f1f1'
      }}>
        {
          tabsData.map((value, index) => {
            let isMe = currentTabIndex === index;
            return (
              <View
                key={index.toString()}
                onTap={() => {
                  setTabIndex(index)
                }}
                style={{
                  display: 'flex',
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <Text style={{
                  color: isMe ? TEXT_ACTIVE : TEXT_DEFAULT,
                  fontSize: isMe ? '16pt' : '14pt'
                }}>
                  {value}
                </Text>
              </View>
            )
          })
        }
      </View>
      <View style={{
        display:'flex',
        flex:1,
        // backgroundColor:'',
        height:rtx(50),
        width:'100%'
      }}/>
      <ScrollView
      onScrollToLower={onScrollToLower}
      scrollY
      lowerThreshold={50}
      style={{
        display:'flex',
        flex:1,
        height:rtx(sh) - rtx(50),
        width:rtx(sw),
        whiteSpace:'nowrap'
      }}>
        <View style={{
        display:'flex',
        flex:1,
        // backgroundColor:'#88ff99',
        height:rtx(10),
        width:'100%'
      }}/>
        {
          videoData.map((item,index) => {
            // return <View key={index}/>
            return (
              <View 
              key={index}
              style={{
                display: 'flex',
                flex: 1,
                width: '100%',
                height: rtx(CARD_CONTAINER_HEIGHT)
              }}>
                <View
                  className={styles.shadow}
                  style={{
                    display: 'inline-block',
                    position: 'relative',
                    width: rtx(CARD_WIDTH),
                    height: rtx(CARD_HEIGHT),
                    backgroundColor: 'white',
                    borderRadius: rtx(RADIUS),
                    marginBottom: CARD_GAP,
                    marginLeft: rtx(PADDING),
                    marginRight: rtx(PADDING),
                  }}>
                  <Image
                    style={{
                      position: 'absolute',
                      zIndex: 0,
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      objectFit: 'cover',
                      height: '100%',
                      width: '100%',
                      borderRadius: RADIUS
                    }}
                    src={item.cover}
                  />
    
                  <View
                    style={{
                      position: 'absolute',
                      zIndex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      flex: 1,
                      width: '100%',
                      height: '100%',
                      // backgroundColor:'#ff7799',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                    <View style={{
                      display: 'flex',
                      flex: 1,
                      width: '100%',
                      // backgroundColor: '#FF0000'
                    }} />
                    <View 
                    onTap={() => {
                      appStore.changeItem(item)
                      navigateTo({
                        url: `/pages/detail/index`
                      })
                    }}
                    style={{
                      display: 'flex',
                      flex: 1.8,
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      // backgroundColor: '#FFff00'
                    }}>
                      <Image
                        src={"/images/play.png"}
                        style={{
                          height: 120,
                          width: 120
                        }}
                      />
                      {/* <Navigator url={"/pages/detail/index"} openType={"navigate"}>详情页</Navigator> */}
                    </View>
                    <View style={{
                      display: 'flex',
                      flex: 1,
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#00000055',
                      borderBottomRightRadius: RADIUS,
                      borderBottomLeftRadius: RADIUS,
                    }}>
                      <Text style={{
                        fontSize: '13.5pt',
                        color: 'white',
                        fontWeight: 'bold',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {item.title}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            )
          })
        }
      </ScrollView>

      
    </View>
  );
});

export default Index;
