import React, { useEffect, useState } from 'react';

const DeshBoard = () => {
const [orders,setOrders]=useState([])
useEffect(()=>{
    fetch('https://tshirt-website-server.vercel.app/orders')
    .then(res=>res.json())
    .then(data=>setOrders(data))
},[])




    return (
        <div>
       <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Phone Number</th>
      <th scope="col">T shirt size</th>
     
    </tr>
  </thead>
  <tbody>
    {
        orders.map(order=><tr>
  
            <td>{order.email}</td>
            <td>{order.number}</td>
            <td>{order.T_shirtSize}</td>
          </tr>)
    }
    
  </tbody>
</table>
        </div>
    );
};

export default DeshBoard;
