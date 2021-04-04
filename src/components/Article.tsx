import * as React from 'react';
import { useLanguage } from '../store/Store';

export interface ArticleProps {
  title: string;
  text: string;
  date: string;
}
 
const Article: React.SFC<ArticleProps> = ({title, text, date}) => {
  const [{lang}, {changeLanguage}] = useLanguage();
  return ( 
    <article className="article">
      <h5>{title}</h5>
      <p>{text}</p>
      <span>{lang ? 
      "Data:"
      :
      "Date:"
      } {date}</span>
    </article>
   );
}
 
export default Article;