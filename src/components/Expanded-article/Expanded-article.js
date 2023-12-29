import classes from './Expanded-article.module.scss'
import classesArticle from '../Item-article/Item-article.module.scss'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchArticle} from '../../store/articleReducer'
import { format } from "date-fns";
import {Spin } from 'antd'
import ReactMarkdown from 'react-markdown';
import {deleteArticle} from '../../store/articleReducer'
import { Link } from 'react-router-dom'

function ExpandedArticle (){
    const dispatch = useDispatch()
    const {id} =useParams()
    const article = useSelector((state)=> state.article.article)
    const loading = useSelector((state)=> state.article.loading)
    const error = useSelector((state)=> state.article.error)
    let user = JSON.parse(localStorage.getItem('user'));

    console.log(article)
    useEffect(()=>{
        dispatch(fetchArticle(id))
  }, [id, dispatch])

  function onClickDelete (e) {
    dispatch(deleteArticle({
      'token': user.token,
      'id': id,
    }))
  }

  function getTags(arr) {
    if (!arr) {
        return null;
    }

    return (
        <>
            {arr.map((tag) => (
                <span className={classesArticle.tag} key={Math.random().toString(36).substring(2)}>
                    {tag}
                </span>
            ))}
        </>
    );
}

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

    return<div className={classes.content}>
    <div className={classes.article}>
    <h4 className={classesArticle.h4}>{article.title}</h4>
    <div>{getTags(article.tagList)}</div>
    <div className={classes.body}><ReactMarkdown>{article.body}</ReactMarkdown></div>
    {user && user.username === article.author.username && <>
      <button className={classes.delete} onClick={onClickDelete}>Delete</button>
      <Link to='edit'><button className={`${classes.delete} ${classes.edit}`}>Edit</button></Link>
    </>}
    <div className={classesArticle.user}>
        <div>
        <div className={classesArticle.username}>{article.author.username}</div>
        <div className={classesArticle.data}>{format(article.updatedAt, 'MMMM dd, yyyy')}</div>
        </div>
        <img className={classesArticle.img} src={article.author.image} alt="user img"/>
    </div>
    </div>
     </div>

}
export default ExpandedArticle