import React, { useContext } from 'react'
import {useParams, Link} from 'react-router-dom';
import { Container,Row,Col, Nav,Image,Button } from 'react-bootstrap'
import { AppContext } from '../ContextApi/AppProvider';
import QuantityControl from './QuantityControl'

const ProductDetailView = () => {
    const {products, AddProductToCart, cart, IncreaseProductQuantity, DecreaseProductQuantity} = useContext(AppContext);
    const { productId } = useParams();

    const isProductInCart = cart.some(product => product._id === productId)
    const productDetails = products.find(product => product._id === productId);

    const handleAddToCart = () =>{
        
        AddProductToCart(productDetails);
    }

    return (
    <Container className='w-75'>
        <Row>
            <Container className='w-50'>
                <Col><Image src={productDetails.productImage} fluid/></Col>
            </Container>

            <Container className='w-50 p-5'>
                <Col>
                    <Row><p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{productDetails.name}</p></Row>
                    <Row><p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{productDetails.price.toFixed(2)} kr</p></Row>
                    <Row><p>{productDetails.description}</p></Row>
                    
                    <Row>
                        {isProductInCart ? (
                        <QuantityControl productId={productId}/>
                    ):(
                        <Button onClick={handleAddToCart}>Add to cart</Button>
                    )}
                    </Row>

                    <Nav.Link as={Link} to='/' className='my-5'>&lt; Back to products</Nav.Link>
                </Col>
            </Container>
        </Row>
    </Container>
  )
}

export default ProductDetailView