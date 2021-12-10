interface Source {
  id: string;
  name: string;
}

interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  abstract: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  multimedia:any;
  response:any;	
}

interface ArticlesResponse {
  status: 'ok' | 'error';
  totalResults: number;
  articles: Article[];
  results: Article[];
  response: Any;
}