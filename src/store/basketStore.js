import {makeAutoObservable} from "mobx";

class BasketStore{
    items = []
    total = 0
    constructor() {
        makeAutoObservable(this,{},{deep:true})
    }
    addItem(item){
        const it = this.items.find(e=>e.id === item.id)
        if(it){
            this.items.map(e=>e.id===it.id?e.count+=1:e)
            this.total+=it.prices
        }else{
            this.items.push(item)
            this.total+=item.prices
        }


    }
    removeItem(id,prices){
        const it = this.items.find(e=>e.id === id)
        if(it.count !== 1){
            this.items.map(e=>e.id===it.id?e.count-=1:e)
            this.total-=it.prices
        }else{
            this.items = this.items.filter(i => i.id !== id)
            this.total=this.total - prices
        }

    }
    incremendCount(id){
        this.items.filter(e=>e.id === id?e.count+=1:e)
    }
}

export default new BasketStore()