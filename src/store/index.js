import { makeAutoObservable } from 'mobx'

class AppStore {

    enableBack = true
    item = {}
    nextItem = {}

    constructor(){
        makeAutoObservable(this)
    }

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

export default new AppStore();