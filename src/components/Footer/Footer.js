import classes from './Footer.module.scss'
import { Pagination } from 'antd';

function Footer (){
    return (
         <div className={classes.footer}>
            <Pagination defaultCurrent={1} total={500} />
         </div>
    )
}

export default Footer