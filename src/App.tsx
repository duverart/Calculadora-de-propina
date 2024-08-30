import MenuItem from "./components/MenuItems"
import { menuItems } from "./data/db"
import useOrder from "./hook/useOrder"
import OrderContents from "./components/OrderContents"
import OrdersTotals from './components/OrdersTotals';
import FormPorcentajePropinas from "./components/FormPorcentajePropinas";
import Header from './components/Header';




function App() {

  const {order,addItem, removeItem,setTip,tip,placeOrder} = useOrder()


  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5A8CA9] via-[#7D5CA8] to-[#d3aed2] p-6">

    <Header/>



    <main className="max-w-7xl mx-auto mt-20  grid md:grid-cols-2">
      <div className="p-5"> 
        <h2 className="text-4xl font-bold text-white">Menu</h2>
        <div className="space-y-3 mt-10 ">
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
          
            <p className="text-center text-white text-3xl font-bold">La orden esta vacia </p>

                
        )} 

      
      </div>
    </main>
    </div>
  )
}

export default App


