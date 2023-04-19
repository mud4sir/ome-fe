import React from 'react';
import Layout from './Layout';
import HomeProps from '../types/HomeProps';
import Product from './ProductCard';
import S from '../styles/index';

const Home: React.FC<HomeProps> = (props) => {
    return (
        <Layout>
            <S.ProductsContainer>
                <Product imgSrc="https://images.olx.com.pk/thumbnails/344752966-400x300.jpeg" />
                <Product imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3PrGX408prV2g6JOWQgmSZxTwhD8PB9aAw&usqp=CAU" />
            </S.ProductsContainer>
        </Layout>
    );
};
export default Home;
