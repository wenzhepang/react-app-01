import React from 'react'

interface Props {
    cartItems: string[]; 
    onClearCart: () => void;
}

const Cart = ({cartItems, onClearCart} : Props) => {
  return (
    <div>
        <h1>Cart</h1>
        <ul>
            {cartItems.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
        <button onClick={onClearCart}>Clear Cart</button>
    </div>
  )
}

export default Cart