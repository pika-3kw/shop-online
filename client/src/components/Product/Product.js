import React, { useState, useEffect } from "react";
import { Card, Button } from 'react-bootstrap'
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


    return (
        <div className='Product'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/180x100" />
                <Card.Body>
                    <Card.Title>Balo</Card.Title>
                    <Card.Text>
                        Price: $10
                    </Card.Text>
                    <div className='actions'>
                        <Button className="buttonAdd" variant="warning" onClick={buttonAddHandle}>Add to card</Button>
                        {buttonFavorite}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Product;