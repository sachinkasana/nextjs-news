import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { withRouter, WithRouterProps } from 'next/router';
import Link from 'next/link';

const Item = styled.span<{ active: boolean }>`
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  padding: 0 8px;
  user-select: none;
  color: ${({ active }) => (active ? 'red' : 'black')};

  &:hover {
    color: red;
  }

  &:active {
    color: red;
  }
`;

interface IProps extends WithRouterProps {
  name: string;
  category: string;
}

const CategoryItem: FunctionComponent<IProps> = ({
  name,
  router,
  category,
}) => (
  <Link href={`/?category=${category}`} as={`/category/${category}`}>
    <Item
      data-test="category-item"
      active={
        (category === 'general' && router.query.category === undefined) ||
        router.query.category === category
      }
    >
      {name}
    </Item>
  </Link>
);

export default withRouter(CategoryItem);
