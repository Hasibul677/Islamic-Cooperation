import React from 'react';
import './Cost.css'

const Cost = (props) => {
    const cart = props.cart;
    // calculate total cost
    let totalCost = 0;
    for(const cost of cart){
        totalCost = totalCost + parseInt(cost.cost);
    }
    return (
        <div className='card text-dark'>
            <h3 className='text-center mb-3 mt-3'>Total Candidate: {cart.length}</h3>
            <h3 className='text-center'>Total Cost: ${totalCost}</h3>
            {
                cart.map(cart=><CartList key={cart.key} cart={cart}></CartList> )
            }
            
        
        </div>

    );
};
// hire information part
function CartList(props){
    const {name,cost,image}=props.cart;

    return(
            <div className='card mt-4 bg-color'>
            <div className='d-flex justify-content-between align-items-center ms-2 me-5 text-dark'>
                <div>
                    <div className='d-flex align-items-center text-white'>
                        <img src={image} className='images' alt="" />
                        <h6>{name}</h6>
                    </div>
                </div>
                <div>
                    <h6 className='text-white'>${cost}</h6>
                </div>
            </div>
            
        </div>
        
    )
}

export default Cost;