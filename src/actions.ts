import { Action } from 'redux';
import api from './api';
import { ThunkAction } from 'redux-thunk';
import { AppState } from './reducer';

export const actionTypes = {
  FETCHING_ARTICLE: 'FETCHING_ARTICLE',
  SET_ARTICLE: 'SET_ARTICLE',
};

export const getArticles = (
  type: string,
  page: number,
  category: string,
  query?: string,
): ThunkAction<void, AppState, null, Action<string>> => async (
  dispatch,
  getState,
) => {
  const state = getState();
  if (state.fetching) {
    return;
  }
debugger;
  dispatch(setFetchingArticles(true));
  try {
    const endpoint = type === 'search' ? 'everything' : type || 'world';
    console.log('endpoint',endpoint)
    let url=type !== 'search'?`topstories/v2/${endpoint}.json`:`search/v2/articlesearch.json`
    const { data } = await api.get<ArticlesResponse>(url, {
      params: {
        q: type === 'search' ? query : undefined,
      },
    });
    type !== 'search' ? dispatch(setArticles(data.results, page)) :dispatch(setArticles(data.response.docs, page));
    dispatch(setFetchingArticles(false));
  } catch (err) {
    console.log(err);
    dispatch(setFetchingArticles(false));
  }
};

const setArticles = (articles: Article[], page: number) => ({
  type: actionTypes.SET_ARTICLE,
  articles,
  page,
});

const setFetchingArticles = (fetching: boolean) => ({
  type: actionTypes.FETCHING_ARTICLE,
  fetching,
});
