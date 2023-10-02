import React from "react";

export const ComponentToPrint = React.forwardRef((props, ref) => { 
  const {cart, totalAmount}  = props; 
    return (
      <div ref={ref} className="p-5">
        <table className='table'>
              <thead>
                <tr>
                  <td>#</td>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Total</td>
                </tr>
              </thead>
              <tbody>
                {
                  cart? cart.map((cartProduct, key) => <tr key={key}>
                    <td>{cartProduct.id}</td>
                    <td>{cartProduct.name}</td>
                    <td>{cartProduct.price}</td>
                    <td>{cartProduct.quantity}</td>
                    <td>{cartProduct.totalAmount}</td>
                    </tr>

                    

                  )
                  : ''
                }
              </tbody>
            </table>
            <h2 className='px-2'>Total amount: ${totalAmount}</h2>
            <hr />
            <h2 className="bg-dark text-white" style={{ textAlign: 'center' }}>
                made by: 
              <span style={{ fontFamily: 'CustomFont' }}>SaloumService</span>
            </h2>
      </div>
    );
  }) ;