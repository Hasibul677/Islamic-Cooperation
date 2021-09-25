import React from 'react';

const Cost = (props) => {
    const cart = props.cart;
    return (
        <div>
            <h3 className='text-center mb-5'>Total Candidate: {cart.length}</h3>
            {
                cart.map(cart=><CartList name={cart.name} cost={cart.cost}></CartList> )
            }
            
        
        </div>

    );
};
function CartList(props){
    return(
        <div className='d-flex justify-content-between ms-2 me-5'>
            <h6>Name:{props.name}</h6>
            <h6>{props.cost}</h6>
        </div>
    )
}

export default Cost;