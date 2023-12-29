import classes from './Login-page.module.scss'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../store/registrationReducer'
import { NavLink} from 'react-router-dom'


function LoginPage (){
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const registration = useSelector((state)=> state.registration.registration)
  console.log(registration)
  if(registration){
    return (
      <div></div>
    )
  }

  const onSubmit = (data) => {
    const params = {"user":{
      "email": String(data.email),
      "password": String(data.password)}
    }
      
    dispatch(fetchUser(params))
    reset()
  };

    return (<div className={classes.content}>
        <div className={classes.form}>
            <h3>Sign In</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
             <label className={classes.label}>
            Email address*
            <input
              type="email"
              placeholder="Email address"
              {...register("email", {
                required:
                  "Поле обязательно для заполнения!",
                  pattern: {
                    value: /^[\w\.-]+@[\w\.-]+\.\w+$/,
                    message: 'email должен быть корректным почтовым адресом!'
                  }
              })}
              className={`${classes.input} ${errors.email ? classes.errorInput : ''}`}
            />
            <div>
              {errors?.email && (
                <p className={classes.errorMessage}>
                  {errors?.email?.message || "Error"}
                </p>
              )}
            </div>
          </label>
          <label className={classes.label}>
            Password*
            <input
              type="password"
              required
              placeholder="Password"
              {...register("password", {
                required:
                  "Поле обязательно для заполнения!",
                minLength: {
                  value: 3,
                  message: 'Поле должно содержать от 6 до 40 символов (включительно)'
                },
                maxLength: {
                  value: 40,
                  message: 'Поле должно содержать от 6 до 40 символов (включительно)'
                },
              })}
              className={`${classes.input} ${errors.password ? classes.errorInput : ''}`}
            />
            <div>
              {errors?.password && (
                <p className={classes.errorMessage}>
                  {errors?.password?.message || "Error"}
                </p>
              )}
            </div>
          </label>

<div className={classes.container}>
      <input
              type="submit"
              value={"Login"}
              className={classes.buttonSabmit}
              disabled={!isValid}
            />
      <p className={classes.text}>Don’t have an account? <NavLink to='/sign-up'><span>Sign Up.</span></NavLink></p>
      </div>

      </form>
      
      
        </div>
         </div>
         )
}
export default LoginPage