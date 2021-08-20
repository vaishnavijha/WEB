import React  from 'react'
import { Button } from './Button';
import { ProductContext } from './Context';

export default function(props){
    let productContext = React.useContext(ProductContext);
    let {id, img, price, total, count} = props.product;
        return (
            <div className="row">
                 <div className="col-md-2">
                     <img src={img} style={{"width":"50px"}} />
                 </div>
                 <div className="col-md-2">
                      Price : {price}
                 </div>
                 <div className="col-md-2">
                     <Button>+</Button>
                 </div>
                 <div className="col-md-2">
                     <Button>-</Button>
                 </div>
                 <div className="col-md-2">
                     Count: {count}
                 </div>
                 <div className="col-md-2">
                        Total: {total}
                 </div>
            </div>
        )
   
}
