import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getArticles } from '../src/actions';
import ArticleItem from '../components/ArticleItem';

interface IProps {
  articles: Article[];
  page: number;
  category: string;
  getArticles: typeof getArticles;
}

class Index extends Component<IProps> {
  public static async getInitialProps({ store, query }) {
    await store.dispatch(getArticles(query.category, 1, query.category));

    return { category: query.category };
  }

  public async componentDidMount() {
   
  }

  public render() {
    const { articles } = this.props;
    if (articles.length === 0) {
      return <span>No Article</span>;
    }

    return articles.map((article) => (
      <ArticleItem key={article.url} article={article} />
    ));
  }

}

const mapStateToProps = ({ articles, page }) => ({ articles, page });

const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: bindActionCreators(getArticles, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
