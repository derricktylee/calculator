import React from 'react'
import switchdata from '../assets/switchdata'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Button from 'react-bootstrap/Button';
export default function SwitchOffers() {
  return (
    <div className='container'>
        <h3>Switch Offers</h3>
        {switchdata.map(item=>{
            const {id,bank,bonus, accountType,img, method, target, link}=item
            return(
            <Container key={id}>
                <Card style={{width:'100%'}} className="mt-3 mb-2">
                    <CardHeader as={'h5'}>
                        {bank +" "+ accountType}
                    </CardHeader>
                <div className="row no-gutters h-100" >
                <div className="col bank-img-container">
                    <img src={img} className='card-img' />
                </div>
                <div className="col-md-10">
                    <Card.Body>

                        <Card.Text><span style={{fontWeight:'bold'}}>Switch bonus:</span> £{bonus}</Card.Text>
                        <Card.Text><span style={{fontWeight:'bold'}}>Account type:</span> {accountType}</Card.Text>
                        <Card.Text><span style={{fontWeight:'bold'}}>How to get the bonus:</span> {method}</Card.Text>
                        <Card.Text><span style={{fontWeight:'bold'}}>Criteria:</span> {target}</Card.Text>
                        <Button variant='secondary' href={link} target='_blank' rel="noopener noreferrer" className='px-4 fw-bold'>Link</Button>
                    </Card.Body>
                </div>
            </div>
            </Card>
            </Container>
        )})}
    </div>
  )
}
