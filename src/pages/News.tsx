import * as React from 'react';
import Title from '../components/Title';
import Article from '../components/Article';
import { useLanguage } from '../store/Store';

export interface NewsProps {
  
}
 
const News: React.SFC<NewsProps> = () => {
  const [{lang}, {changeLanguage}] = useLanguage();
  return ( 
    <>
      <div className="container">
        <Title text={ lang ? "Aktualności" : "News"}/>
        <Article
          title={lang ? "Rusza nasza strona internetowa!": "Our website is launched!"}
          text={lang ? 
            "Z radością uruchamiamy naszą stroną internetową. Znajdziecie na niej Państwo informacje dotyczące naszej działalności, w tym o realizowanych projektach. Strona będzie na bieżąco aktualizowana i rozbudowywana, aby dostarczała także treściwe i przystępne materiały informacyjne." 
            :
            "We are happy to launch our website. You will find there information about our activities, including projects. The website will be updated and expanded on an ongoing basis so that it also provides content and accessible information materials." 
            }
          date="07.05.2021r."
        />
        {/* <hr/> */}
      </div>
    </>
   );
}
 
export default News;