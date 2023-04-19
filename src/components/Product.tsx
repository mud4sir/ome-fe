import S from '../styles';

const Product = () => {
    return (
        <S.ProductWrapper>
            <S.BoxWrapper>
                {/* main image and small slide images below */}
                <div title="image-container">
                    <S.Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3PrGX408prV2g6JOWQgmSZxTwhD8PB9aAw&usqp=CAU"
                        title="images"
                    />
                    <S.ImageSlideWrapper>
                        <S.Image
                            width="80px"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3PrGX408prV2g6JOWQgmSZxTwhD8PB9aAw&usqp=CAU"
                        />
                        <S.Image
                            width="80px"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3PrGX408prV2g6JOWQgmSZxTwhD8PB9aAw&usqp=CAU"
                        />
                        <S.Image
                            width="80px"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3PrGX408prV2g6JOWQgmSZxTwhD8PB9aAw&usqp=CAU"
                        />
                        <S.Image
                            width="80px"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3PrGX408prV2g6JOWQgmSZxTwhD8PB9aAw&usqp=CAU"
                        />
                    </S.ImageSlideWrapper>
                </div>
                {/* details */}
                <div>
                    <div>
                        <h3>Details</h3>
                        <p>price, condition and stuff</p>
                    </div>
                    <div>
                        <h3>Description</h3>
                        <p>user added descriptions of the item</p>
                    </div>
                </div>
            </S.BoxWrapper>
            {/* about product */}
            <S.BoxWrapper>
                <div>
                    <h3>Rs 21500</h3>
                    <div>
                        <p>Title of the mobile</p>
                        <p>Rawalpindi, Pakistan</p>
                    </div>
                    <p>time ago add was submitted</p>
                </div>
                {/* about seller */}
                <div>
                    <h3>Seller Description</h3>
                    <div>
                        <img src="" />
                        <h3>seller name</h3>
                    </div>
                    <button>contact seller</button>
                </div>
            </S.BoxWrapper>
        </S.ProductWrapper>
    );
};

export default Product;
