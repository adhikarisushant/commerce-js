import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' },
    { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://images.pexels.com/photos/3746947/pexels-photo-3746947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
];

const Products = () => {
    return (
        <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    ); 
}

export default Products;