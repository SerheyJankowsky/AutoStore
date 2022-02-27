import {makeAutoObservable} from "mobx";

class LotStore{
    lots = [{
        'id':1,
        'auto':'Honda',
        'prices':1000,
        'img':'/assets/Honda.png',
        'count':1
    },{
        'id':2,
        'auto':'Ford',
        'prices':1000,
        'img':'/assets/Ford.png',
        'count':1
    },{
        'id':3,
        'auto':'BMW',
        'prices':1000,
        'img':'/assets/BMW.png',
        'count':1
    },{
        'id':4,
        'auto':'VW',
        'prices':1000,
        'img':'/assets/VW.png',
        'count':1
    },{
        'id':5,
        'auto':'BMW',
        'prices':1000,
        'img':'/assets/BMW.png',
        'count':1
    },{
        'id':6,
        'auto':'Ford',
        'prices':1000,
        'img':'/assets/Ford.png',
        'count':1
    },{
        'id':7,
        'auto':'Honda',
        'prices':1000,
        'img':'/assets/Honda.png',
        'count':1
    },{
        'id':8,
        'auto':'VW',
        'prices':1000,
        'img':'/assets/VW.png',
        'count':1
    }]
    constructor() {
        makeAutoObservable(this)
    }
}

export default new LotStore()