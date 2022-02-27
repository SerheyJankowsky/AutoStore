
import './App.css';
import Button from "./ui/button/button";
import Modal from "./ui/modal/modal";
import {useState} from "react";
import MainScreen from "./components/mainScrean";
import Basket from "./components/basket";
import {observer} from "mobx-react";
import basketStore from "./store/basketStore";


const App = observer(()=> {
    const [active,setActive] = useState(false)
  return (
    <div className="App">
        <div className="wrapper">
            <MainScreen/>
            <Basket click={()=>setActive(true)}/>
            <Modal active={active} keepActive={setActive}>
                <h4>Подтверждение формы заказа</h4>
                <p>{basketStore.items.length} товара на сумму ${basketStore.total}</p>
                <div style={{display:'flex', alignItems:'center',justifyContent:'space-between'}}>
                    <Button handlerClick={()=>setActive(false)}>Отмена</Button>
                    <div style={{width:8}}>

                    </div>
                    <Button handlerClick={()=>setActive(false)}>Подтвердить</Button>
                </div>
            </Modal>
        </div>
    </div>
  );
})

export default App;
