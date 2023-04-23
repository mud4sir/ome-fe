import { FC, ReactElement } from 'react';
import S from '../styles';
import { contentTypes } from '../utils/constants';
import Space from './Space';
const ContentBox: FC<any> = ({
    content: { title, text, location },
    type,
    heading,
}) => {
    let content: ReactElement = <></>;

    if (type === 'advertisement') {
        content = (
            <S.DescBox>
                <S.Heading.H2>Description</S.Heading.H2>
                <p>user added descriptions of the item</p>
            </S.DescBox>
        );
    }
    if (type === 'profile') {
        content = (
            <>
                <div>
                    <S.Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3PrGX408prV2g6JOWQgmSZxTwhD8PB9aAw&usqp=CAU"
                        width="80px"
                        rounded
                    />
                    <S.Heading.H4>seller name</S.Heading.H4>
                </div>
                <S.Button primary>Contact Seller</S.Button>
            </>
        );
    }
    return (
        <>
            <S.BoxWrapper
                width="auto"
                margin={contentTypes.includes(type) ? '20px 0px' : ''}
            >
                <S.DescBox>
                    <S.Heading.H2>{heading}</S.Heading.H2>
                    <p>{title}</p>
                    <p>{text}</p>
                    <Space />
                    <p className="tiny-text">{location}</p>
                    {content}
                </S.DescBox>
            </S.BoxWrapper>
        </>
    );
};

export default ContentBox;
