import { observable,action,decorate } from 'mobx'

class AppStore {

    enableBack = true
    item = {}
    nextItem = {}

    toggleEnableBack(back){
        this.enableBack = back;
    }
    changeItem(newValue){
        this.item = {...newValue};
    }
    changeNextItem(newValue){
        this.nextItem = {...newValue};
    }
}

decorate(AppStore,{
    enableBack: observable,
    item:observable,
    nextItem:observable,
    toggleEnableBack:action,
    changeItem:action,
    changeNextItem:action
});

const appStore = new AppStore();
export default appStore;