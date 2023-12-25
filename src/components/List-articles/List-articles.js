import classes from './List-articles.module.scss'
import ItemArticles from '../Item-article'
import { useEffect, useState } from 'react'
import GetArticles from '../../services/getArticles'

function ListArticles (){
    const [articles, getListArticles] = useState([])


    useEffect(()=>{
        if(articles.length === 0){
            const getArticles = new GetArticles()
            getArticles
            .getAllArticles()
            .then((articles) => {
                getListArticles(articles)
            })
        }
    }, [])
    return <div className={classes.content}>
        {articles.map((article)=>{
            return(<ItemArticles
                        key={article.createdAt}
                        title={article.title}
                        tagList={article.tagList}
                        body={article.body}
                        username={article.author.username}
                        data={article.createdAt}
                        image={article.author.image}

                    />)
        })}
    </div>
}

export default ListArticles