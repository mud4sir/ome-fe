import styled from "styled-components";

const ProductCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow: hidden;
border-radius: 7px;
border: 1px solid #ccc;
width: 300px;
background-color: #fff;
-webkit-box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.5); 
box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
margin: 10px 5px;
cursor: pointer;
`;

const ProductInfo = styled.div`
padding: 15px;
text-align: left;
width: 100%;
padding-left:50px;
h4 {
    font-size: 20px;
    line-height: 1.1;
    margin: 0 0 10px 0;
}
span {
    font-size: 16px;
    color: #000;
    line-height: 1.3;
    margin: 10px 0;
    display: block;
    font-weight: 700;
}
`;

export default {
    ProductCard,
    ProductInfo,
};