import React, { useState } from 'react'
import Header from './Header'
import {Button} from 'react-bootstrap'
import Axios from 'axios';

function AddProduct() {
const [name, setname] = useState("")
const [file, setfile] = useState("")
const [price, setprice] = useState("")
const [description, setdescription] = useState("")


async function addproduct(){
  const formdata=new FormData();
  formdata.append('file',file)
  formdata.append('name',name)
  formdata.append('price',price)
  formdata.append('description',description)

  let result=await fetch('http://127.0.0.1:8000/api/addproduct', {
      method:'POST',
     
      body:formdata
  }
  );

  alert("data is saved");



}

    return (
        <>
        <Header />
        <br />
        
            <h1 style={{textAlign:'center'}}>Addproduct</h1>
            <br />
            <form onSubmit={addproduct} encType="multipart/form-data">
        <div className="col-sm-6 offset-sm-3">
            <input type="text" value={name} className='form-control' placeholder='Name' onChange={(e)=>{
setname(e.target.value)
            }}   /><br />
            <input type="file" className='form-control' placeholder='File' onChange={(e)=>{
setfile(e.target.files[0])
            }} /><br />
            <input type="text" value={price} className='form-control' placeholder='Price' onChange={(e)=>{
setprice(e.target.value)
            }} /><br />
            <input type="text" className='form-control' placeholder='Description' value={description} onChange={(e)=>{
setdescription(e.target.value)
            }} /><br />
            <Button type='submit'>Add Product</Button>

        </div>
        </form>
        </>
    )
}

export default AddProduct
