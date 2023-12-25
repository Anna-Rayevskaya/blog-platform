import classes from './Login-page.module.scss'

function LoginPage (){
    return<div className={classes.content}>
        <div className={classes.form}>
            <h3>Sign In</h3>
            <label className={classes.label}>Email address</label>
      <input
        type="email"
        value={''}
        required
        placeholder='Email address'
        className={classes.input}
      />
      <label className={classes.label}>Password</label>
      <input
        type="password"
        value={''}
        required
        placeholder='Password'
        className={classes.input}
      />
      <button type='submit' className={classes.buttonSabmit}>Login</button>
      <p className={classes.text}>Don’t have an account? <span>Sign Up.</span></p>
        </div>
         </div>
}
export default LoginPage