import { shallow } from 'enzyme';
import React from 'react';
import ArticleItem from '../ArticleItem';

describe('Article Item', () => {
  it('Render Article Item', () => {
    const article = {
      source: {
        id: null,
        name: 'https://api.nytimes.com',
      },
      author: null,
      title:
        'Omicron Wave Heads for U.K., but It’s Not Clear How Bad It’ll Be',
      description:
        'Britain could be a bellwether of what other countries will see from the new coronavirus variant. Officials say Omicron could account for most cases within weeks.',
      url:
        'https://www.nytimes.com/2021/12/09/world/europe/uk-omicron-spreading-restrictions.html',
      urlToImage:
        'https://static01.nyt.com/images/2021/12/09/world/09virus-uk-science1/09virus-uk-science1-superJumbo.jpg',
      publishedAt: '2019-02-26T00:01:00Z',
      content:
        'Britain could be a bellwether of what other countries will see from the new coronavirus variant. Officials say Omicron could account for most cases within weeks',
    };

    const wrapper = shallow(<ArticleItem article={article} />);
    expect(wrapper).toMatchSnapshot();
  });
});
