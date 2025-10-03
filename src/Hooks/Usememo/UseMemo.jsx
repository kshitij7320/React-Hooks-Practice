import React, { useState, useMemo } from 'react'

const UseMemo = () => {

    const [cart, setCart] = useState([
        {id: 1, name: "Laptop" ,Price: 50000},
        {id: 2, name: "Phone" ,Price: 30000},
        {id: 3, name: "Headphone" ,Price: 2000},
    ])

    const [discount, setDiscount] = useState(0);

    const totalPrice = useMemo(()=>{
        console.log("calculating total price ......")
        return cart.reduce((total,item)=>
        total + item.Price,0);
    },[cart]);

  return (
    <div>
        {cart.map((item)=> <p key={item.id}>{item.name} : {item.Price} </p>)}
        <h3>Total Price : {totalPrice}</h3>
        <button onClick={()=>setDiscount(discount + 10)}>Increase Discount</button>
    </div>
  )
}

export default UseMemo