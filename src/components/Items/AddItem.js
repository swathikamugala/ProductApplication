import React from "react";
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddItem=()=>{
    let navigate=useNavigate();
    const [item,setItems]=useState({
        name:"",
        price:"",
        url:"",
        category:"",
    });

const {id,name,price,url,catagory}=item;
    const onInputChange=e=>{
        console.log(e.target.value);
        setItems({...item,[e.target.name]:e.target.value})
    }
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post("http://localhost:3004/items",item);
        navigate.push("/");
    }
    return(
        <div className="container">
            <form class="row g-3"onSubmit={e=>onSubmit(e)}>
               <div class="col-md-6">
                    <label for="inputName" class="form-label">Name</label>
                    <input type="name" class="form-control"name="name" value={name} onChange={e=>onInputChange(e)} />
                </div>
                <div class="col-md-6">
                    <label for="inputName" class="form-label">Price</label>
                    <input type="name" class="form-control"name="price" value={price} onChange={e=>onInputChange(e)} />
                </div>
                <div class="col-md-6">
                    <label for="inputUrl" class="form-label">Url</label>
                    <input type="name" class="form-control" name="url" value={url} onChange={e=>onInputChange(e)} />
                </div>
                <div class="col-md-6">
                    <label for="inputName" class="form-label">Category</label>
                    <input type="name" class="form-control"name="category" value={catagory} onChange={e=>onInputChange(e)} />
                </div>
                <div class="col-12">
                    <button className="btn btn-primary">Add Item</button>
                </div>
            </form>
        </div>

    )
}

export default AddItem;