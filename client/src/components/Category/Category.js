import React from "react";
import { Row } from "react-bootstrap";
import Product from "./components/Product";
import './Category.css';
import DATA_CATEGORY from './data';

const Category = props => {

    return (
        <div className="Category">
            <Row>

                {DATA_CATEGORY.map(
                    item =>
                        <Product item={item} key={item.sku} />
                )}
            </Row>
        </div>
    )
}

export default Category;