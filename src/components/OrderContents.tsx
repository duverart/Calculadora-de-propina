import { MenuItem, OrderItem } from "../types"
import { formatCurrency } from '../helpers';

type OrderContentsProps={
    order: OrderItem[] 
    removeItem: (Id:MenuItem["id"]) => void
}


export default function orderContents({order,removeItem}: OrderContentsProps) {
  return (
    <div className="text-white">
        <h2 className='font-black text-4xl'> Consumo </h2>
        <div className="space-y-3 mt-10 ">
            {order.map((item) => (
                    <div 
                    key={item.id} 
                    className="relative bg-white/10 backdrop-blur-md text-textPrimary p-4 rounded-lg m-4 border border-white/30  items-center bg-white bg-opacity-20 shadow-md flex justify-between  border-t border-gray-300 last-of-type:border-b">
                        <div>
                            <p className="text-xl ">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className="font-black">
                                cantidad:{item.quantity} -  {formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>
                        <button className="text-center bg-red-500 h-8 w-8 rounded-full text-white font-black"
                        onClick={() => removeItem(item.id)}>
                            X
                        </button>
                    </div>
                ))
            }

        </div>
    </div>
  )
}
