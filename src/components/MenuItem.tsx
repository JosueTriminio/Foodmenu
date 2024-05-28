import type {  MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem;
  addItem: (item:MenuItem)=>void;
 
}



export default function MenuItem({ item, addItem}: MenuItemProps) {
  return (
    <button className="flex justify-between p-3 border-2
           border-teal-400 hover:bg-teal-300 w-full rounded-lg"
      onClick={()=>addItem(item)}       
    
           >
      <h3 className="font-xs">{item.name}</h3>
      <h4 className=" font-black">€{item.price}</h4>
    </button>
  )
}
