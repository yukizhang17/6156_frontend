import { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';

function Ecard (props: any) {
  const [business, setBusiness] = useState('');
  const [address, setAddress] = useState('');

  const data = props.props;
  const business_url = `https://aejlggnsac.execute-api.us-east-1.amazonaws.com/v1/business/${data.bid}`;
  const address_url = `https://aejlggnsac.execute-api.us-east-1.amazonaws.com/v1/business/${data.bid}/address`;

  const fetchBusiness = async () => {
    await axios.get(business_url)
    .then(res => res.data[0])
    .then(data => setBusiness(data.business_name))
    .catch(err => console.log('err', err))
  }

  const fetchAddress = async () => {
    await axios.get(address_url)
    .then(res => res.data[0])
    .then(data => setAddress(data.street_name1 + data.street_name2))
    .catch(err => console.log('err', err))
  }

  useEffect (() => {
    fetchBusiness();
    fetchAddress();
  }, [])


  return (
    <div>
    <Card border='dark' style={{ width: '15rem', height: '30rem'}}>
      <Card.Header as='h6'><strong>{business}</strong></Card.Header>
      <Card.Body>
        <Card.Title as='h6'><strong>{data.product_name}</strong></Card.Title>
        <Card.Text>
          <ul>
          {data.price === '' || undefined ? <p></p> : <li>{data.price}</li>}
          {address === '' || undefined ? <p></p> : <li>{address}</li>}
          {data.description === '' || undefined ? <p></p> : <li>{data.description}</li>}
          </ul>
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{
        textAlign: 'right'
      }}>
        <Button size='sm'>
          Order
        </Button>
      </Card.Footer>
    </Card>
  </div>
  )

}

export default Ecard;
