import classes from './List-articles.module.scss'
import ItemArticles from '../Item-article'

function ListArticles (){
    return <div className={classes.content}>
        <ItemArticles/>
        <ItemArticles/>
        <ItemArticles/>
        <ItemArticles/>
    </div>
}

export default ListArticles