import React from 'react'

function Order ({ details }) {
    if (!details) {
        return <h3>Working fetching you order details...</h3>
    }

    return (
        <div className = 'order-container'>
            <h2>Your Order</h2>
            <p>Size: {details.size}</p>
            <p>Sauce: {details.sauce}</p>
            <p>Your input: {details.orderInput}</p>

            <div className = 'toppings'>
            {
                !!details.toppings && !!details.toppings.length &&
                <div>
                    Toppings:
                    <ul>
                        {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
                    </ul>
                </div>
            }
            </div>
        </div>
    )
}

export default Order
