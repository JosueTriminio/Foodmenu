import { MenuItem, OrderItem } from "../types"


type OrderContentsProps = {
    order: OrderItem[];
    RemoveItem: (id:MenuItem['id'])=> void;
}

export default function OrderContents({ order, RemoveItem }: OrderContentsProps) {
    return (
        <div>
            <h2 className="text-3xl font-semibold border-b">Consumo</h2>
            {order.length === 0 ? <p className=" text-center py-5 text-2xl">Nueva Orden</p>
                : (order.map(item => (

                    <section key={item.id} className="mt-5 flex gap-3 items-center justify-between border-b border-dashed">
                        <div>
                            <h5 className=" font-bold">{item.name}</h5>
                            <h5>Precio c/u : {item.price}€</h5>
                            <h6 className="">Cantidad : {item.quantity} = {item.price * item.quantity}€</h6>
                        </div>
                        <button onClick={()=>RemoveItem(item.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.6em" fill="red" viewBox="0 0 512 512">
                                <path
                                    d="M 256 512 Q 326 511 384 478 L 384 478 L 384 478 Q 442 444 478 384 Q 512 323 512 256 Q 512 189 478 128 Q 442 68 384 34 Q 326 1 256 0 Q 186 1 128 34 Q 70 68 34 128 Q 0 189 0 256 Q 0 323 34 384 Q 70 444 128 478 Q 186 511 256 512 L 256 512 Z M 186 137 L 256 219 L 186 137 L 256 219 L 326 137 L 326 137 Q 341 121 360 134 Q 375 149 362 168 L 287 256 L 287 256 L 362 345 L 362 345 Q 375 363 360 378 Q 341 391 326 376 L 256 293 L 256 293 L 186 376 L 186 376 Q 171 391 153 378 Q 137 363 150 345 L 225 256 L 225 256 L 150 168 L 150 168 Q 137 149 153 134 Q 171 121 186 137 L 186 137 Z"
                                />
                            </svg>
                        </button>
                    </section>
                )))

            }
        </div>
    )
}
