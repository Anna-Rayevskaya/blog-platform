import classes from './Item-article.module.scss'
import { format } from "date-fns";

function ItemArticles ({title, tagList, body, username, image, data}){

    function trimText(text, title) {
        if (title) {
          if (text.split('').length > 50) {
            const newTrimText = `${text.slice(0, 50).split(' ').slice(0).join(' ')}...`
            return newTrimText
          }
        }
        if (text.split('').length > 250) {
          const newTrimText = `${text.slice(0, 250).split(' ').slice(0, -3).join(' ')}...`
          return newTrimText
        }
        return text
      }

    function getTags(arr) {
        if (!arr) {
            return null;
        }
    
        return (
            <>
                {arr.map((tag) => (
                    <span className={classes.tag} key={tag}>
                        {trimText(tag, tag)}
                    </span>
                ))}
            </>
        );
    }
    return <div className={classes.content}>
        <h4>{trimText(title, title)}</h4>
        <div>{getTags(tagList)}</div>
        <div className={classes.body}>{trimText(body)}</div>
        <div className={classes.user}>
            <div>
            <div className={classes.username}>{username}</div>
            <div className={classes.data}>{format(data, 'MMMM dd, yyyy')}</div>
            </div>
            <img className={classes.img} src={image} alt="user img"/>
        </div>
    </div>
}

export default ItemArticles