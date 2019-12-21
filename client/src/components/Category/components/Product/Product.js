import React, { useState, useEffect } from "react";
import { Card, Button, Col } from 'react-bootstrap'
import './Product.css';

const Product = props => {

    const [isFavorite, setIsFavorite] = useState(false);


    const buttonAddHandle = () => {

    }

    const buttonFavoriteHandle = () => {
        setIsFavorite(!isFavorite);
    }

    const [buttonFavorite, reRenderbuttonFavorite] = useState(<Button className="buttonFavorite" variant="outline-danger" onClick={buttonFavoriteHandle}>Favorite</Button>)

    useEffect(() => {
        if (isFavorite) {
            reRenderbuttonFavorite(<Button className="buttonFavorite" variant="danger" onClick={buttonFavoriteHandle}>Favorite</Button>)
        } else {
            reRenderbuttonFavorite(<Button className="buttonFavorite" variant="outline-danger" onClick={buttonFavoriteHandle}>Favorite</Button>)

        }
    }, [isFavorite])

    const { name, price, quantity, image, currency } = props.item

    return (
        <Col xs={12} sm={6} lg={4} xl={3} align={'center'} style={{ margin: "30px auto" }}>
            <div className='Product'>
                <Card>
                    <Card.Img variant="top" src={image ? image : "https://via.placeholder.com/120x120"} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Price: {price} {currency}
                        </Card.Text>
                        <div className='actions'>
                            <Button className="buttonAdd" variant="warning" onClick={buttonAddHandle}>Add to card</Button>
                            {buttonFavorite}
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    )
}

export default Product;