import { FC } from 'react';
import NavigationProps from '../types/NavigationProps';
import S from '../styles';

const Navigation: FC<NavigationProps> = ({ title }) => {
    return <S.Navigation>{title}</S.Navigation>;
};

export default Navigation;
