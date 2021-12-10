import styled from 'styled-components';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import CategoryItem from './CategoryItem';
import { withRouter, WithRouterProps } from 'next/router';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 5px 8px;
  border-bottom: 1px solid #ddd;
  background-color: white;
`;

const Logo = styled.span`
  flex: 1;
  font-family: "Raleway", sans-serif;
  cursor: pointer;
  font-size: 24px;
  user-select: none;

  &:hover {
    color: #777;
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  height: 34px;
  align-items: center;
  overflow-x: scroll;
  cursor: pointer;
`;

const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
const categories=[
  {name:'World',value:'world'},
  {name:'Sports',value:'sports'},
  {name:'Technology',value:'technology'},
  {name:'Science',value:'science'},
  {name:'politics',value:'politics'}
]
const Header: FunctionComponent<WithRouterProps> = ({ router }) => (
  <Wrapper>
    <HeaderWrapper>
      <Link href="/">
        <Logo>News Feed</Logo>
      </Link>
      <Link prefetch href="/search">
        <SearchIcon data-test="search-button" src="/static/magnify.svg" />
      </Link>
    </HeaderWrapper>
    {router.pathname === '/' && (
      <CategoryWrapper>
        {categories.map(category => (
        <CategoryItem name={category.name} category={category.value} />
        ))}
      </CategoryWrapper>
    )}
  </Wrapper>
);

export default withRouter(Header);
