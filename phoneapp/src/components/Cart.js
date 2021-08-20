import React from 'react'
import { ProductContext } from './Context'
import CartList from './CartList';

export default function() {
    let productContext = React.useContext(ProductContext);
    return <>
          <div className="container"> 
            {
                 productContext.cart.map(p => <CartList product={p} key={p.id} />)
            }
            </div>
     </>
}
