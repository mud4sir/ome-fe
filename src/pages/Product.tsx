import S from '../styles';
import Layout from '../components/Layout';
import ContentBox from '../components/ContentBox';
import ProductImageSlider from '../components/ProductImageSlider';

const Product = () => {
    return (
        <Layout>
            <S.ProductWrapper>
                <S.BoxWrapper>
                    <ProductImageSlider />
                    {/* details */}
                    <ContentBox
                        heading="Details"
                        type="advertisement"
                        content={{ text: 'Price Condition and stuff' }}
                    />
                </S.BoxWrapper>
                {/* details about ad and user */}
                <div style={{ width: '45%' }}>
                    <ContentBox
                        heading="Rs 21500"
                        type=""
                        content={{
                            text: 'time ago add was submitted',
                            title: 'name of the mobile',
                            location: 'Rawalpindi, Pakistan',
                        }}
                    />
                    <ContentBox
                        heading="Seller Description"
                        type="profile"
                        content={{}}
                    />
                </div>
            </S.ProductWrapper>
        </Layout>
    );
};

export default Product;
