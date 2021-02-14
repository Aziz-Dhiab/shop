import React from "react";
import {Card, Button } from "react-bootstrap"
import "../Pages/style.css"

function cart({name,img,description}) {
    return (
        <div >
        <Card style={{ width: '400px',height:'500px' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body style={{textAlign:"center"}}>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">Buy Now</Button>
            </Card.Body>
        </Card>
    </div>
    )
}

export default cart