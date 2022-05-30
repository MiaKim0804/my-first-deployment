import React from 'react'
import { useState } from 'react'
import './Form.css'
import config from '../config/index'
// import { nanoid } from 'nanoid'

export const Form = () => {
    
    const [list, setList] = useState({product : '', price : ''})
    const [itemLists, setItemLists] = useState([])

    const handleChangeProduct = (e) => {
        setList({...list, product : e.target.value})
    }

    const handleChangePrice = (e) => {
        setList({...list, price : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setItemLists(prev => [...prev, list])
        console.log(`${list.product}, ${list.price}`)
    }
    
    return (
        <>
            <div className='header'>
                <h1>Item Details</h1>  
                <p>BaseURL : {config.baseURL}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product</label>
                    <input 
                        type='text' 
                        placeholder='Add product'
                        required 
                        onChange = {handleChangeProduct} 
                        value = {list.product} />
                    <label>Price</label>
                    <input 
                        type ='number'
                        placeholder='Add price'
                        required 
                        onChange = {handleChangePrice} 
                        value = {list.price} />
                </div>
                <button type='submit'>Add</button>
                <div className='list'>
                    {itemLists.map((item) =>(
                        <li key={item.product}>{item.product} : ${item.price}</li>
                    ))}
                </div>
            </form>
        </>
    )
}
