import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)


const addItem =(item:MenuItem) =>{
    const itemExist = order.find(orderItem => orderItem.id === item.id )
    if(itemExist){
        const updateOrder = order.map(orderitem=>orderitem.id ===item.id ?
            { ...orderitem, quantity: orderitem.quantity +1}:
            orderitem
        )
        setOrder(updateOrder)
    }else{
    const newItem ={ ...item, quantity:1 }
    setOrder([...order, newItem])

    }
}
const removeItem =(Id:MenuItem["id"]) =>{
    setOrder(order.filter(orderItem => orderItem.id !== Id))
}

const placeOrder=()=>{
    setOrder([])
    setTip(0)
}


  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder
  }
}