import { FC } from 'react';
import S from '../styles/index';
import { Link } from 'react-router-dom';

const ProductCard: FC<any> = ({ imgSrc }) => {
    return (
        <Link to={`/mobile/${1}`}>
            <S.ProductCard>
                <S.ImageWrapper>
                    <S.Image src={imgSrc} title="product" />
                </S.ImageWrapper>
                <S.ProductInfo>
                    <h3>iphone 7 plus</h3>
                    <p>35000</p>
                    <p>Islamabad pakistan</p>
                </S.ProductInfo>
            </S.ProductCard>
        </Link>
    );
};

export default ProductCard;
