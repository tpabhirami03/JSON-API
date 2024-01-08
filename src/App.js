import { useState } from 'react';
import './App.css';

function App() {

  const [productName,setProductName]=useState("")
  const[productData,setproductdata]=useState()
  

  const searchProduct= async () => {

    if(productName){
      let response= await fetch(`https://dummyjson.com/products/${productName}?fullText=true`)

      // 



     response.json().then((res)=>{
      console.log(res);
      setproductdata(res)
     })

     

    }
    else{
      alert('please fill the input box')
    }

  
  }
  console.log(productName);
  return (
    <>
      <div className="text-center container mt-5">
      <input onChange={e=>setProductName(e.target.value)}  type="text" placeholder='enter product name'/>
  
  <button onClick={searchProduct} type="button"  value={'search'} >Search</button>


      {
        productData && (
        <div>
        <h1>Product Details</h1>
        <h5>ID:{productData?.id}</h5>
        <h5>TITLE:{productData?.title}</h5>
        <h5>description:{productData?.description}</h5>
        <h5>price:{productData?.price}</h5>
  
        


        </div>
      )
      }

 
</div>
    </>
   
  );
}

export default App;
