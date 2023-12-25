import classes from './List-articles.module.scss'
import ItemArticles from '../Item-article'
import { useEffect, useState } from 'react'
import GetArticles from '../../services/getArticles'
import {Spin } from 'antd'

function ListArticles ({page}){
    const [articles, getListArticles] = useState([])
    const [loading, getLoading] = useState(true)
    const [error, getError] = useState(false)
    // const [articlesCount, getArticlesCount]= useState(0)
    const [currentArticles, getCurrentArticles] = useState(getArticles(page))

    console.log(articles)
    useEffect(()=>{
        if(articles.length === 0){
            const getArticles = new GetArticles()
            getArticles
            .getAllArticles()
            .then((articles) => {
                getListArticles(articles.articles)
                getLoading(false)
            })
            .catch(()=> {
                getLoading(false)
                getError(true)
            })
        }
    }, [articles])

    useEffect(()=>{
            getCurrentArticles(getArticles(page))
      }, [page, articles])


    if (loading) {
        return (
          <div className={classes.loading}>
            <Spin size="large" />
          </div>
        )
      }

      if (error) {
        return <div className={classes.error}>Произошла ошибка загрузки!</div>
      }

      function generateRandomId() {
        return Math.random().toString(36).substring(2)
      }

      function getArticles (page){
        const articleStart = (page-1)* 5;
        const articleEnd  = articles[articleStart+ 5] ? articleStart+ 5 : articles.length
        const listArticles = articles.slice(articleStart, articleEnd)
        return listArticles
      }

      if(currentArticles.length === 0){
        return(
          <div className={classes.error}>Статей больше нет!</div>
        )
      }

    return <div className={classes.content}>
        {currentArticles.map((article)=>{
            return(<ItemArticles
                        key={generateRandomId()}
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