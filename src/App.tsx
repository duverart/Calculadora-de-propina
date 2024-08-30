import MenuItem from "./components/MenuItems"
import { menuItems } from "./data/db"
import useOrder from "./hook/useOrder"
import OrderContents from "./components/orderContents"
import OrdersTotals from './components/ordersTotals';
import FormPorcentajePropinas from "./components/FormPorcentajePropinas";



function App() {

  const {order,addItem, removeItem,setTip,tip,placeOrder} = useOrder()


  
  return (
    <>
    
    <header className="bg-teal-400 py-5">
      <h1 className="text-center  font-black text-4xl" >Calculadora de propinas y Consumo </h1>
    </header>

    <main className="max-w-7xl mx-auto mt-20  grid md:grid-cols-2">
      <div className="p-5"> 
        <h2 className="text-4xl font-bold">Menu</h2>
        <div className="space-y-3 mt-10">
        {menuItems.map(item =>(

          <MenuItem
          key={item.id} 
          item={item}
          addItem={addItem}

          />

        ))}

        </div>
        </div>
      <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
        {order.length ? (
          <>
              <OrderContents 
              order= {order} 
              removeItem={removeItem} 
              />  

              <FormPorcentajePropinas
              setTip={setTip}
              tip={tip}
              />

              <OrdersTotals 
              order={order}
              tip={tip}
              placeOrder={placeOrder}
            />
          </>
        ):(
          
            <p className="text-center">La orden esta vacia </p>

                
        )} 

      
      </div>
    </main>
    </>
  )
}

export default App


