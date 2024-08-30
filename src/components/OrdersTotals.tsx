import { OrderItem } from "../types"
import { formatCurrency } from '../helpers';
import { useMemo } from "react";

type OrdersTotalsProps={
    order:OrderItem[]
    tip:number,
    placeOrder:() => void
}

export default function OrdersTotals({order, tip,placeOrder}:OrdersTotalsProps) {
    
    const subTotalPagar = useMemo(() => order.reduce( (total, item) => total + ( item.quantity * item.price ), 0 ), [order])
    const tips = useMemo(() => subTotalPagar * tip, [subTotalPagar, tip])
    const totalPagar = useMemo(() => subTotalPagar + tips,[subTotalPagar, tips])
 

  return (
    <>
    <div className="space-y-3 text-white">
        <h2 className="text-2xl font-black"> Totales y Propina: </h2>
        <p>Subtotal a pagar: {""}
            <span className="font-bold"> {formatCurrency(subTotalPagar)}</span>
        </p>
        <p>Propina: {""}
            <span className="font-bold">{formatCurrency(tips)}</span>
        </p>    
        <p>Total a pagar: {""}
            <span className="font-bold">{formatCurrency(totalPagar)}</span>
        </p>
    </div>
    <button className="w-full bg-black p-3 text-white rounded-lg font-bold uppercase mt-10 disabled:opacity-30" disabled={order.length === 0} onClick={placeOrder}>Guardar Orden </button>
    </>
  )
}