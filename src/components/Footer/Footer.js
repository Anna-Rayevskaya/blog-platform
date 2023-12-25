import classes from './Footer.module.scss'
import { Pagination } from 'antd';

function Footer ({changePage}){

    function onChangePagination (e){
        changePage(e)
    }
    return (
         <div className={classes.footer}>
            <Pagination defaultCurrent={1} total={500} onChange={onChangePagination}/>
         </div>
    )
}

export default Footer