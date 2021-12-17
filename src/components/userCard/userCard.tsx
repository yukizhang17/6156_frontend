import { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';

function Ucard (props: any) {
  const [product, setProduct] = useState([] as any[]);
  const [business, setBusiness] = useState('');

  const orderData = props.props;
  console.log(orderData.status)
  const product_url = 'https://aejlggnsac.execute-api.us-east-1.amazonaws.com/v1/product';
  const business_url = 'https://aejlggnsac.execute-api.us-east-1.amazonaws.com/v1/business';

  const fetchProduct = async () => {
    await axios.get(`${product_url}/${orderData.pid}`)
    .then(res => res.data[0])
    .then(data => setProduct(data))
    .catch(err => console.log('err', err));
  }

  const fetchBusiness = async () => {
    await axios.get(`${business_url}/${orderData.bid}`)
    .then(res => res.data[0])
    .then(data => setBusiness(data.business_name))
    .catch(err => console.log('err', err));
  }

  const renderProdcutList = (props: any) => {
    return (
      <ul>
      {props.product_name === '' || undefined ? <p></p> : <li>{props.product_name}</li>}
      {props.price === '' || undefined ? <p></p> : <li>{props.price}</li>}
      {props.description === '' || undefined ? <p></p> : <li>{props.description}</li>}
      <li>Order time: <br /> {orderData.timestamp}</li>
      <li>Order status: <br /> {orderData.status}</li>
      </ul>
    )
  }
  useEffect(() =>{
    fetchProduct();
  }, []);

  useEffect(() =>{
    fetchBusiness();
  }, []);

  return (
    <div>
      <Card border='dark' style={{ width: '15rem', height: '30rem'}}>
        <Card.Header as='h6'>{orderData.oid}</Card.Header>
        <Card.Body>
          <Card.Title as='h6'><strong>{business}</strong></Card.Title>
          <Card.Text>
            {renderProdcutList(product)}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button size='sm'>
          Complete
          </Button>
          <Button size='sm'>
          Cancel
          </Button>
        </Card.Footer>
      </Card>
    </div>
  )



}

export default Ucard;
