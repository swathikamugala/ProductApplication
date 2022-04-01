import React, { useState,useEffect } from "react";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import axios from 'axios';
const Item=()=>{
    const [item,setItem]=useState({
        name:"",
        price:"",
        url:"",
        category:"",
    });
    const {id}=useParams();
    useEffect(()=>{
        loadItem();
    })
    const loadItem=async()=>{
        const res=await axios.get(`http://localhost:3004/items/${ id }`);
        //console.log(result);
        setItem(res.data);
    };
    return(
        <div className="container py-4">
            <Link className="btn btn-primary" to="/home">Back to Home</Link>
          <h2 className="display-4">Item Id:{id}</h2>
          <table className="table border">
       
            <tbody>
                <tr>
            <th scope="col"></th>
             <tr><td className="List-group-item"> name: {item.name}</td></tr>
             <tr>
            <td className="List-group-item"> price:{item.price}</td>
            </tr>
            <tr>
            <td className="List-group-item"> url:{item.url}</td>
            </tr>
            <tr>
            <td className="List-group-item"> category:{item.category}</td>
            </tr>
            </tr>
            </tbody>
            </table>
        </div>
    )
}
export default Item;