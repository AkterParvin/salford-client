import axios from "axios";
import { useEffect, useState } from "react";
import ShowCart from "./ShowCart";
import { Link } from "react-router-dom";


const Cart = () => {
const [cart,setCart]=useState([])
console.log(cart)
    useEffect(() => {
        axios("http://localhost:5000/cart")
            .then(data => {
                const myCart=(data.data);

                if (myCart.length > 0) {
                    setCart(myCart);
                } else {
                    return "You have nothing purchased yet"
                }
        })
    },[])
    return (
        <div className="flex flex-col justify-center items-center w-full mx-auto">
            <div className="flex flex-col max-w-5xl p-6 space-y-4 sm:p-10 bg-gray-900/80 text-gray-100 my-8">
                <h2 className="text-2xl font-semibold text-center uppercase">Your cart</h2>
                <ul className="flex flex-col divide-y divide-gray-700">
                    {
                        cart.map(item => <ShowCart key={item._id}
                            item={item}
                        ></ShowCart>)
                    } 
                </ul>
                <div className="space-y-1 text-right">
                    <p>Total amount :
                        <span className="font-semibold"> 357 €</span>
                    </p>
                    <p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
                </div>
                <div className="flex justify-end space-x-4">
                    <Link to='/'><button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">Back
                        <span className="sr-only sm:not-sr-only"> to shop</span>
                    </button></Link>
                    <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                        <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default Cart;