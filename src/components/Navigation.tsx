import { FC } from 'react';
import NavigationProps from '../types/NavigationProps';
import S from '../styles';
import { BsChevronDown } from 'react-icons/bs';
import { TbPlus } from 'react-icons/tb';

const Navigation: FC<NavigationProps> = ({ content }) => {
    if (content === 'search-bar') {
        const selectOptionHandler = (e: any) => {
            console.log(e.target.value);
        };
        const searchBarHandler = (e: any) => {
            console.log(e.target.value);
        };
        return (
            <S.Navigation>
                <S.Image
                    src="https://png.pngtree.com/png-clipart/20220131/original/pngtree-mobile-exchange-logo-design-png-image_7261192.png"
                    title="logo"
                    width="100px"
                    height="100px"
                />
                <form>
                    <select id="select-menu" onChange={selectOptionHandler}>
                        <option value="location1">location 1</option>
                        <option value="location2">location 2</option>
                        <option value="location3">location 3</option>
                    </select>
                </form>
                <form action="/search" method="get" onSubmit={searchBarHandler}>
                    <input
                        type="search"
                        id="search-input"
                        name="q"
                        placeholder="Enter your search query"
                        required
                    />
                    <S.Button>Search</S.Button>
                </form>
                {/* <div> */}
                <S.ProfileBox title="profile">
                    <S.Image
                        src="https://ionicframework.com/docs/img/demos/avatar.svg"
                        title="profile avatar"
                        width="40"
                        height="40"
                        rounded
                    />
                    <S.DropDownIcon>
                        <BsChevronDown />
                    </S.DropDownIcon>
                </S.ProfileBox>
                {/* </div> */}
                {/* <div> */}
                <S.SellIconContainer>
                    Sell
                    <S.AddIcon>
                        <TbPlus />
                    </S.AddIcon>
                </S.SellIconContainer>
                {/* </div> */}
            </S.Navigation>
        );
    }
    return <p>other navbar</p>;
};

export default Navigation;
