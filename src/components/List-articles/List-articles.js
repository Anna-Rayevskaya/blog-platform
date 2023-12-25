import classes from './List-articles.module.scss'
import ItemArticles from '../Item-article'
import { useEffect, useState } from 'react'
import GetArticles from '../../services/getArticles'
import {Spin } from 'antd'

function ListArticles ({page}){
    const [articles, getListArticles] = useState([])
    const [loading, getLoading] = useState(true)
    const [error, getError] = useState(false)
    const [articlesCount, getArticlesCount]= useState(0)
    const [currentArticles, getCurrentArticles] = useState(getArticles(page))


    console.log(page)
    useEffect(()=>{
        if(articles.length === 0 || articles.length< articlesCount){
            const getArticles = new GetArticles()
            getArticles
            .getAllArticles()
            .then((articles) => {
                getListArticles(prevListArticles => [...prevListArticles, ...articles.articles])
                getLoading(false)
                getArticlesCount(articles.articlesCount)
                
            })
            .catch(()=> {
                getLoading(false)
                getError(true)
            })
        }
    }, [articles])

    useEffect(()=>{
        if(articles.length !==0){
            getCurrentArticles(getArticles(page))
        }
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
        const articleStart = page* 20;
        const listArticles = articles.slice(articleStart, articleStart+ 20)
        return listArticles
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