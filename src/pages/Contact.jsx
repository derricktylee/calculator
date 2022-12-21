import React from 'react'
import { Form, Button, Col,Container, FloatingLabel } from 'react-bootstrap';
import {MdOutlineEmail} from "react-icons/md"

export default function Contact() {

    function handleSubmit(e){
        e.preventDefault()
        console.log("click")
    }
  return (
    <Container style={{maxWidth:"600px"}} className="w-75 p-4 border mt-5 rounded">
    <Form>
        <MdOutlineEmail style={{fontSize:"3rem"}}/>
        <h4 className='mt-3'>Contact us</h4>
        <FloatingLabel controlId="name" label="Name" className="mb-3 mt-4">
            <Form.Control type="text" placeholder="name" autocomplete="off" />
        </FloatingLabel>
      <FloatingLabel controlId="email" label="Email" className="mb-3">
        <Form.Control type="email" placeholder="name@example.com" autocomplete="off" />
      </FloatingLabel>
      <FloatingLabel controlId="subject" label="Subject" className='mb-3'>
        <Form.Control type="text" placeholder="subject" />
      </FloatingLabel>
      <FloatingLabel controlId='message' label="Message" className='mb-3'>
        <Form.Control as="textarea" placeholder='message' style={{height:"150px"}}/>
      </FloatingLabel>
      <Button type='submit' variant='secondary' className='w-100' size='lg' onClick={handleSubmit}>Submit</Button>
    </Form>
    </Container>
  )
}
