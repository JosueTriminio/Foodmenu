import { useMemo } from "react";
import { OrderItem } from "../types"


type OrderTotalsPropos = {
    order: OrderItem[];
    tip: number;
    ClearOrder: ()=> void
}

export default function OrderTotals({ order, tip, ClearOrder }: OrderTotalsPropos) {
    const Subtotal = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const Tip = useMemo(() => Subtotal * tip, [tip, order]);
    const Total = useMemo(() => Subtotal + Tip, [Tip, order])
    return (
        <>
            <div className="space-y-3">
                <h2 className=" font-bold text-2xl"> Totatles y Propina:</h2>
                <p> Subtotal :
                    <span className="font-bold"> € {Subtotal}</span>
                </p>
                <p> Propina :
                    <span className="font-bold"> € {Tip}</span>
                </p>
                <p> Total a Pagar :
                    <span className="font-bold"> € {Total}</span>
                </p>
                <div className="w-full flex items-center justify-center">
                    <button className="flex justify-center gap-5 w-[60%]  bg-neutral-950 p-3 uppercase text-white
                     hover:bg-teal-600 transition-all font-bold mt-10 disabled:opacity-5"
                        disabled={Total === 0}
                        onClick={ClearOrder}
                    >
                        Enviar a Cocina
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.9em" fill="currentColor" viewBox="0 0 512 512">
                            <path d="M 416 48 Q 414 81 384 93 L 384 112 L 384 112 L 384 176 L 384 176 Q 383 230 347 267 Q 310 303 256 304 Q 202 303 165 267 Q 129 230 128 176 L 128 112 L 128 112 L 128 93 L 128 93 Q 98 81 96 48 Q 97 28 110 14 Q 124 1 144 0 Q 166 1 180 16 Q 194 1 216 0 Q 242 1 256 22 Q 270 1 296 0 Q 318 1 332 16 Q 346 1 368 0 Q 388 1 402 14 Q 415 28 416 48 L 416 48 Z M 336 176 L 336 160 L 336 176 L 336 160 L 176 160 L 176 160 L 176 176 L 176 176 Q 177 210 199 233 Q 222 255 256 256 Q 290 255 313 233 Q 335 210 336 176 L 336 176 Z M 210 341 Q 216 343 216 348 L 216 348 L 216 348 Q 217 353 211 356 L 168 373 L 168 373 Q 150 381 139 397 Q 128 413 128 433 L 128 480 L 128 480 L 128 504 L 128 504 L 128 512 L 128 512 L 120 512 L 58 512 Q 34 510 32 486 Q 33 442 57 408 Q 82 374 122 359 Q 128 357 128 352 L 128 330 L 128 330 Q 129 322 138 322 L 210 341 L 210 341 Z M 384 512 L 192 512 L 384 512 L 160 512 L 160 504 L 160 504 L 160 480 L 160 480 L 160 433 L 160 433 Q 161 411 180 403 L 373 326 L 373 326 Q 382 324 384 333 L 384 352 L 384 352 Q 384 357 390 359 Q 430 374 455 408 Q 479 442 480 486 Q 478 510 454 512 L 384 512 L 384 512 Z M 256 432 Q 255 417 240 416 Q 225 417 224 432 Q 225 447 240 448 Q 255 447 256 432 L 256 432 Z M 336 448 Q 351 447 352 432 Q 351 417 336 416 Q 321 417 320 432 Q 321 447 336 448 L 336 448 Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}
