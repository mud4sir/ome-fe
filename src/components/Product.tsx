import { FC } from 'react';
import S from '../styles/index';

const Product: FC<any> = ({ imgSrc }) => {
    return (
        <S.ProductCard>
            <S.ImageWrapper>
                <S.Image src={imgSrc} title="product" />
            </S.ImageWrapper>
            <h3>iphone 7 plus</h3>
            <p>35000</p>
            <p>Islamabad pakistan</p>
        </S.ProductCard>
    );
};

export default Product;
