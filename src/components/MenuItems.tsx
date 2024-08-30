import type { MenuItem, } from "../types"



type MenuItemProps = {
  item: MenuItem
  addItem:(item:MenuItem) => void
}
 

export default function MenuItem({item, addItem}:MenuItemProps) {
  return (
    <button
    className=" relative bg-white/10 backdrop-blur-md text-textPrimary p-4 rounded-lg m-4 border border-white/30  items-center bg-white bg-opacity-20 shadow-md  w-full  flex justify-between text-white hover:bg-blue-100  hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out hover:text-black" onClick={()=>addItem(item)}>
    <p>{item.name}</p>
    <p className="font-black">${item.price}</p>
    </button>
  )
}
