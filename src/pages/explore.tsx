import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup } from 'react-bootstrap';
import axios from 'axios';
import Ecard from '../components/exploreCard/exploreCard';

function Explore () {
  const[data, setData] = useState([] as any[]);
  const[offset, setOffset] = useState(0);
  const[zipcode, setZipcode] = useState("");
  const[product, setProduct] = useState("");
  const url = 'https://aejlggnsac.execute-api.us-east-1.amazonaws.com/v1/product';

  const fetchData = async () => {
    let response = await axios.get(url);
    console.log(response.data);
    setData(response.data);
  }

  const handleInput = (event: any) => {
    event.preventDefault();
    console.log(event.target[0].value);
    setZipcode(event.target[0].value);
    setProduct(event.target[0].value);
  }

  const getNext = () => {
    setOffset(offset + 5);
  }

  const getPrevious = () => {
    setOffset(offset - 5);
  }

  useEffect (() => {
    fetchData();
  }, [])

  const renderCard = (data: any) => {
    return (
      <Ecard props={data} />
    )
  }


  return (
    <>
    <div className='mb-auto'>
       <Form onSubmit={handleInput}  style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridRowGap: '1rem',
      gridColumnGap: '1rem',
      margin: '3rem'
     }}>
         <FormGroup controlId='formBasicZipcode'>
           <Form.Label>Zip Code</Form.Label>
           <Form.Control type='zipcode'></Form.Control>
         </FormGroup>
         <FormGroup controlId='formBasicProduct'>
           <Form.Label>Product</Form.Label>
           <Form.Control></Form.Control>
           </FormGroup>
           <Button size='sm' type='submit' style={{
           marginTop: '2rem'
         }}>Submit</Button>
       </Form>
   </div>
   <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gridRowGap: '1rem',
      gridColumnGap: '1rem',
      margin: '3rem'
     }}>
   {data.slice(offset, offset + 5).map(renderCard)}
   </div>

   <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridRowGap: '1rem',
      gridColumnGap: '5rem',
      margin: '3rem'
     }}>
       <div style={{
         margin: '1rem',
         textAlign: 'left'
       }}>
     {offset >= 5 && (
       <Button size='sm' onClick={getPrevious} style={{
         width: '5rem'
       }}>
       prev
       </Button>
     )}
   </div>
   <div style={{
         margin: '1rem',
         textAlign: 'right'
       }}>
     {offset < data.length - 5 && (
       <Button size='sm' onClick={getNext} style={{
         width: '5rem',
       }}>
       next
       </Button>
     )}
    </div>
   </div>
 </>
  )
}

export default Explore;
