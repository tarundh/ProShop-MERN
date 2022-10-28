import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../products";

const homescreen = () => {
    return(
        <>
            <h1>Latest Products</h1>
            <Row>
                {Product.map(product => (
                    <Col sm={12} md={6} lg={4} xl={3} >
                        <h3>{product.name}</h3>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default homescreen