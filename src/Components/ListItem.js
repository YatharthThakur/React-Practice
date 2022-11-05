import React from 'react';
// import AddToCartIcon from '../assets-src/add-to-cart.svg';
import "./ListItemStyles.scss";
import { useState } from 'react';

// export default function ListItem({data}) {
//   let [count,setCount] = useState(0);
//   const increment = () =>{
//     setCount(count = count + 1);
//   }
//   const decrement = () =>{
//     if(count <= 0){
//       return;
//     }
//     setCount(count = count - 1);
//   }
//   return (
//     <div className='item-card'>
//       <img src={data.picture} alt = "item" className='image-fluid'></img>
//       <div className='item-cart__information'>
//         <div className='pricing'>
//             <span>{data.discount}</span>
//             <small>
//                 <strike>{data.price}</strike>
//             </small>
//         </div>
//         <div className='title'>
//             <h3>{data.title}</h3>
//         </div>
//       </div>
//       <div className='button-inc-dec'>
//         <button className='cart-add' onClick={increment}>+</button>
//         <small className='cart-message'>{count}</small>
//         <button className='cart-rem' onClick={decrement}>-</button>
//       </div>
//     </div>
//   )
// }

const ListItem = ({ data }) => {
    const [counter, setCounter] = useState(0)

    const increaseCounterByOne = () => {
        // Add increasing logic
        setCounter(counter + 1);
    }

    const descreaseCounterByOne = () => {
        // Add descreasing logic
        if(counter <= 0) {
            return;
        }
        setCounter(counter - 1);
    }

    return (
        <div className={"item-card"}>
            <img className={"img-fluid"} src={`./assets_cart/${data.thumbnail}`} alt={data.title}/>
            <div className={"item-card__information"}>
                <div className={"pricing"}>
                    <span>₹{data.discountedPrice}</span>
                    <small>
                        <strike>₹{data.price}</strike>
                    </small>
                </div>
                <div className={"title"}>
                    <h3>{data.title}</h3>
                </div>
            </div>
            {/* <button className={"cart-add"} onClick={handleClick}>
                <span>Add to Cart</span>
                <img src={AddToCartIcon} alt="Cart Icon"/>
            </button> */}
            <div className={"button-inc-dec"}>
              <button className='cart-rem' onClick={descreaseCounterByOne}>-</button>
              <small className='cart-message'>{counter}</small>
              <button className='cart-add' onClick={increaseCounterByOne}>+</button>
            </div>
        </div>
    )
}

export default ListItem