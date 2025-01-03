import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const CardSocial = () => {
  return (
    <Card style={{ width: '25rem', backgroundColor: 'hsl(0, 0%, 12%)'}}>
    
    <Card.Body className='d-flex flex-column gap-3'>
      <Card.Img className='round-img mb-3' variant="center" src="../../src/assets/avatar-jessica.jpeg" />
      <Card.Title className='text-light mb-0' style={{fontWeight: '700',fontSize: '26px'}}>Jessica Randall </Card.Title>
      <Card.Text className='london-text mt-0' style={{fontWeight: '600'}}>
      London,  United Kingdom
      </Card.Text>
      <Card.Text style={{fontSize: '14px', fontWeight: '400'}} className='text-light'>
      "Front-end developer and avid reader."
      </Card.Text>
      <button style={{borderRadius: '10px'}}>Github</button>
      <button style={{borderRadius: '10px'}}> Frontend Mentor</button>
      <button style={{borderRadius: '10px'}} >Linkedin</button>
      <button style={{borderRadius: '10px'}} >Twitter</button>
      <button style={{borderRadius: '10px'}} >Instagram</button>
    </Card.Body>
  </Card>
  )
}

