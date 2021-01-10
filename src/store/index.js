import { makeAutoObservable } from 'mobx'

class AppStore {

    item = {}

    constructor(){
        makeAutoObservable(this)
    }

    changeItem(newValue){
        this.item = newValue;
    }
}

export default new AppStore();