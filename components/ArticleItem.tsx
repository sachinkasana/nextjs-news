import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface IProps {
  article: Article;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  border-bottom: 1px solid #ddd;

  @media screen and (max-width: 699px) {
    flex-direction: column-reverse;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  flex: 1;
`;

const Title = styled.h4`
  margin: 0;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  margin-bottom: 5px;
  text-decoration: none;
  color: black;
`;

const Description = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  margin: 0;
  color: #777;
  text-decoration: none;
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 112.5px;

  @media screen and (max-width: 699px) {
    width: 100%;
    height: auto;
    max-height: 300px;
  }
`;

const Image = styled.img`
  width: 200px;
  height: 112.5px;
  object-fit: cover;

  @media screen and (max-width: 699px) {
    width: 100%;
    height: auto;
    max-height: 300px;
  }
`;

const Link = styled.a`
  text-decoration: none;
`;

const ArticleItem: FunctionComponent<IProps> = ({ article }) => (
  <Link target="__blank" href={article.url}>
    
    {article.lead_paragraph?
    ( <Wrapper data-test="article-item">
     <TextWrapper>
        <Title>{article.abstract}</Title>
        <Description>{article.lead_paragraph}</Description>
      </TextWrapper>
      {article.multimedia && (
        <ImageWrapper>
          <Image src={'https://www.nytimes.com/'+article.multimedia[0].url} />
        </ImageWrapper>
      )}
    </Wrapper>)
    :
    (<Wrapper data-test="article-item">
    <TextWrapper>
       <Title>{article.title}</Title>
       <Description>{article.abstract}</Description>
     </TextWrapper>
     {article.multimedia && (
       <ImageWrapper>
         <Image src={article.multimedia[0].url} />
       </ImageWrapper>
     )}
   </Wrapper>)
   }
  </Link>
);

export default ArticleItem;
