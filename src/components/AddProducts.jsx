import React, {useState} from 'react'

export const AddProducts = () => {

const [productName, setProductName] = useState('')
const [productPrice, setProductPrice] = useState(0);
const [productImg, setProductImg] = useState(null);
const [error, setError] = useState('');

const types = ['image/png', 'image/jpeg'];



const productImgHandler = (e) => {
  let selectedFile = e.target.files[0];
  if(selectedFile && types.includes(selectedFile.type)){
    setProductImg(selectedFile);
    setError('');
  } 
  else{
    setProductImg(null);
    setError('Image failed to upload');
  }
}

const addProduct = (e) => {
  e.preventDefault();
  console.log(productName, productPrice, productImg);
}


  return (
    <div>
        <p>
        <h2>ADD PRODUCTS</h2>
        </p> 
        <form autoComplete='off' className='form-group' onSubmit={addProduct}>
          <label htmlFor='product-name'>Product Name</label>
          <p/>
          <input type='text' className='form-control' required
          onChange={(e)=>setProductName(e.target.value)} value={productName}/>
          <p/>
         <label htmlFor='product-price'>Product Price</label>
          <p/>
          <input type='number' className='form-control' required
            onChange={(e)=>setProductPrice(e.target.value)} value={productPrice}/>
          <label htmlFor='product-img'>Product Image</label>
          <p/>

          <input type="file" className='form-control' onChange={productImgHandler}></input>
          <p/>
          <button className='btn btn-sucess btn-md mybtn'>ADD</button>

          
        </form>
        {error &&<span>{error}</span>}
    </div>
  )
}
