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
          title={lang ? "Tytuł...": "Angielski tytuł..."}
          text={lang ? 
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos modi reiciendis voluptatum voluptatibus a animi consequuntur ut repellat in ipsa ipsum suscipit similique quo cum sequi esse, labore sapiente corrupti! Sapiente esse ullam voluptas aspernatur facere, nihil natus iure autem vel veritatis inventore eligendi cumque totam, atque, facilis quaerat voluptate? Repudiandae atque dignissimos placeat doloribus maiores. Magnam maiores eligendi eum!" 
            :
            "Teskt po angielsku" 
            }
          date="04.04.2021r."
        />
        <hr/>
        <Article
          title={lang ? "Tytuł...": "Angielski tytuł..."}
          text={lang ? 
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos modi reiciendis voluptatum voluptatibus a animi consequuntur ut repellat in ipsa ipsum suscipit similique quo cum sequi esse, labore sapiente corrupti! Sapiente esse ullam voluptas aspernatur facere, nihil natus iure autem vel veritatis inventore eligendi cumque totam, atque, facilis quaerat voluptate? Repudiandae atque dignissimos placeat doloribus maiores. Magnam maiores eligendi eum!" 
            :
            "Teskt po angielsku" 
            }
          date="04.04.2021r."
        />
        <hr/>
        <Article
          title={lang ? "Tytuł...": "Angielski tytuł..."}
          text={lang ? 
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos modi reiciendis voluptatum voluptatibus a animi consequuntur ut repellat in ipsa ipsum suscipit similique quo cum sequi esse, labore sapiente corrupti! Sapiente esse ullam voluptas aspernatur facere, nihil natus iure autem vel veritatis inventore eligendi cumque totam, atque, facilis quaerat voluptate? Repudiandae atque dignissimos placeat doloribus maiores. Magnam maiores eligendi eum!" 
            :
            "Teskt po angielsku" 
            }
          date="04.04.2021r."
        />
      </div>
    </>
   );
}
 
export default News;