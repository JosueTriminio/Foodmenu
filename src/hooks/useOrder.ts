import { useState } from "react"
import { MenuItem, OrderItem } from "../types"


export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);

    const addItem = (item: MenuItem) => {
        // Evitar Duplicados y Aumentar las cantidades
        const itemExist = order.find(orderItem => orderItem.id === item.id);

        if (itemExist) {
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ?
                { ...orderItem, quantity: orderItem.quantity + 1 }
                : orderItem)

            setOrder(updatedOrder)

        } else {
            const newItem: OrderItem = { ...item, quantity: 1 };
            setOrder([...order, newItem]);
        }

    }

    function RemoveItem(id:MenuItem['id']) {
        setOrder(order.filter(item => item.id !== id))
        
    }

    function ClearOrder() {
        setOrder([]);
        setTip(0);
    }

    return {
        order,
        addItem,
        RemoveItem,
        tip,
        setTip,
        ClearOrder
    }
}
