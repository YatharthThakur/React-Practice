import React from 'react'
import { useState } from 'react';
import "./ProductStyles.scss";
import ListItem from "./ListItem";

export default function FormBind() {
    let [title,setTitle] = useState("");
    let [price,setPrice] = useState(0);
    let [discountedPrice,setDisprice] = useState(0);
    let [thumbnail,setPicture] = useState(""); 
    let [item, setItem] = useState({
      id:1, 
      price: 0,
      discountedPrice: 0,
      title: "Title of item",
      thumbnail: "placeholder.jpg"}); 
    const handleTitle = (event) =>{
      setTitle(event.target.value);
    }
    const handlePrice = (event) =>{
      setPrice(event.target.value);
    }
    const handleDiscountedPrice = (event) =>{
      setDisprice(event.target.value);
    }
    const handleThumbnail = (event) =>{
      setPicture(event.target.value);
    }
    const submitForm = event => {
      event.preventDefault();
      // if(discountedPrice > price){
      //   alert("Discounted price can not be greater than price");
      //   return;
      // }
      setItem({title,price,discountedPrice,thumbnail});
    }   

  return (
    <div className='product-wrapper'>
      <div className={"form"}>
        <form onSubmit={submitForm}>
            <h2>Item Card Details</h2>
            <div className={"input-field"}>
              <label htmlFor="title">Title</label>
              <input 
                type="text" 
                placeholder="Enter Title" 
                value={title} 
                onChange={handleTitle}
                required
                />
            </div>
            <div className={"input-field"}>
              <label htmlFor="price">Price</label>
              <input 
                type="number" 
                placeholder="Enter Price" 
                value={price} 
                onChange={handlePrice}
                required
              />
            </div>
            <div className={"input-field"}>
                <label htmlFor="discountPrice">Discount Price</label>
                <input 
                    type="number" 
                    placeholder="Enter Discounted Price" 
                    value={discountedPrice} 
                    onChange={handleDiscountedPrice}
                    required
                />
            </div>
            <div className={"input-field"}>
                <label htmlFor="thumbnail">Thumbnail</label>
                <input 
                    type="text" 
                    placeholder="Enter Thumbnail name" 
                    value={thumbnail} 
                    onChange={handleThumbnail}
                    required
                />
            </div>
            <div className={"submit-wrap"}>
                <button>Update</button>
            </div>
        </form>
      </div>
      <div className='product-list'>
        <div className='product-list-wrapper'>
          <ListItem data = {item}/>
        </div>
      </div>
    </div>
  )
}
