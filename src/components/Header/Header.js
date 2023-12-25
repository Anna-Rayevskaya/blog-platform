import classes from './Header.module.scss'

function Header () {
    return (
        <div className={classes.header}>
            <span>Realworld Blog</span>
            <div>
            <button className={classes.signIn}>Sign In</button>
            <button className={classes.signUp}>Sign Up</button>
            </div>

        </div>
    )
}

export default Header