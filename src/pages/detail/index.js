import React, { useEffect, useMemo, useState } from "react";
import {View,Text,Image,Video,Button,request,pageScrollTo, navigateTo} from "remax/wechat";
import styles from "./index.css";
import { usePageEvent } from "remax/runtime";
import { observer } from "mobx-react";
import appStore from '../../store'
import { pix, rtx, sw, sh } from '../../utils'

const BUTTON_HEIGHT = rtx(50);
const VIDEO_HEIGHT = rtx(sh) - BUTTON_HEIGHT;


const RADIUS = 12;
const CARD_GAP = 18;
const PADDING = 20;
const CARD_WIDTH = sw - PADDING * 2;
const CARD_HEIGHT = CARD_WIDTH*3/5;
const CARD_CONTAINER_HEIGHT = CARD_HEIGHT + CARD_GAP //CARD_HEIGHT + CARD_GAP;
const CARD_CONTAINER_WIDTH = sw;



const Index = observer((props) => {
  const [data, setvideodata] = useState([]);

  const fetchNextVideo = () => {
    request({
      url: "https://qyzs.zdw1.cn/api/video/getone",
      success(res){
        appStore.changeNextItem(res.data)
      }
    })
  };

  const videoUrl = useMemo(() => {
    // return "http://1254284941.vod2.myqcloud.com/e591a6cavodcq1254284941/4558e53c5285890807458772963/f0.mp4"
    let _u = '';
    if (appStore.item.url != undefined) {
      _u = appStore.item.url
    }
    return _u;
  }, [appStore.item]);
  const videoTitle = useMemo(() => {
    let _v = '';
    if (appStore.item.title != undefined) {
      _v = appStore.item.title
    }
    return _v
  }, [appStore.item])

  usePageEvent("onShareAppMessage", (res) => {
    if (res.from === "button") {
      // 来自页面内转发按钮
      console.log(res.target);
    }
    return {
      title: videoTitle,
    };
  });

  const fetchList = () => {
    request({
      url: "https://qyzs.zdw1.cn/api/video/more",
      data: {},
      success(res) {
        let list = [...res.data];
        setvideodata(list);
      },
      fail(err) {
        console.log("列表数据获取失败", err);
      },
    });
  };

  const updateNextItem = () => {
    if(appStore.nextItem.id != undefined){
      appStore.changeItem(appStore.nextItem)
    }
  }

  useEffect(() => {
    fetchList();
    fetchNextVideo();
  }, []);

  usePageEvent("onUnload",function(){
    navigateTo({
      url: `/pages/detail/index`
    });
    updateNextItem();
  });

  const onRecommendVideoTap = (item) => {
    appStore.changeItem(item)
    pageScrollTo({
      scrollTop:0
    }) 
  }

  return (
    <View className={styles.app}> 
      <View className={styles.header}>
        <Video
          src={videoUrl}
          style={{ height: VIDEO_HEIGHT, width: rtx(sw), margin: 0, padding: 0 }}
          controls={true}
          autoPauseIfNavigate
          autoPauseIfOpenNative
          autoplay
          loop
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          height: BUTTON_HEIGHT,
          background: "#000",
          width:'100%',
        }}
      >
        <Button
          open-type="share"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: pix(sw * 0.43),
            height: BUTTON_HEIGHT,
            background: "#008102",
          }}
        >
          <Image
            src="http://cos.haxibiao.com/images/5ff7f1a8d7efc.png"
            className={styles.share}
            alt="share"
          />
          <Text className={styles.text}>发送给好友</Text>
        </Button>
        <Button
          open-type="share"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: pix(sw * 0.43),
            height: BUTTON_HEIGHT,
            background: "#FB0102",
          }}
        >
          <Image src="/share.png" className={styles.share} alt="share" />
          <Text className={styles.text}>分享到群</Text>
        </Button>
      </View>
      <View style={{ background: "#fff", padding: "10px" }}>
        <Text style={{ fontWeight: "bold", fontSize: "15pt" }}>
          {videoTitle}
        </Text>
      </View>
      <View
        style={{ background: "#fff", display: "flex", alignItems: "start" }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: "40px",
            color: "#008102",
            marginLeft: "15px",
          }}
        >
          热门推荐
        </Text>
      </View>
      {
          data.map((item,index) => {
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
                    onTap={() => onRecommendVideoTap(item)}
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
    </View>
  );
});

export default Index;

