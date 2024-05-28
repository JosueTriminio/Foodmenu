import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import Propinas from "./components/Propinas";
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"



function App() {

  const { order, addItem, RemoveItem, tip, setTip, ClearOrder } = useOrder();

  return (
    <>

      <header className=" bg-teal-400 py-5 sticky top-0">
        <h1 className="text-center text-4xl font-black"> Calculador de consumo y propinas</h1>
      </header>
      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-3xl font-semibold text-center">Menu</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>

        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContents order={order} RemoveItem={RemoveItem} />
          <Propinas setTip={setTip} tip={tip}/>
          <OrderTotals order={order} tip={tip} ClearOrder={ClearOrder} />
        </div>

      </main>
    </>
  )
}

export default App
