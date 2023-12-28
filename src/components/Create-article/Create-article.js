import classes from './Create-article.module.scss'
import classesLogin from "../Login-page/Login-page.module.scss";
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import {createArticle} from '../../store/articleReducer'

function CreateArticle (){

    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'));

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
      } = useForm({
        mode: "onChange",
      });

      const onSubmit = (params) => {
        console.log(params)
        const newParams = {"article":{
          "title": String(params.title),
          "description": String(params.description),
          "body": String(params.body),
          "tags": ["string"]}
        }
          console.log(newParams)
        dispatch(createArticle({
          'token': user.token,
          'params': newParams,
        }))
        reset()
      };

    return(
        <div className={classesLogin.content}>
            <div className={classes.form}>
            <h3>Sign In</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
             <label className={classesLogin.label}>
             Title
            <input
              placeholder="Title"
              {...register("title", {
                required:
                  "Поле обязательно для заполнения!",
              })}
              className={`${classes.input} ${errors.title ? classes.errorInput : ''}`}
            />
            <div>
              {errors?.title && (
                <p className={classesLogin.errorMessage}>
                  {errors?.title?.message || "Error"}
                </p>
              )}
            </div>
          </label>

          <label className={classesLogin.label}>
          Short description
            <input
              placeholder="Title"
              {...register("description", {
                required:
                  "Поле обязательно для заполнения!",
              })}
              className={`${classes.input} ${errors.description ? classes.errorInput : ''}`}
            />
            <div>
              {errors?.description && (
                <p className={classesLogin.errorMessage}>
                  {errors?.description?.message || "Error"}
                </p>
              )}
            </div>
          </label>

          <label className={classesLogin.label}>
             Text
             <textarea 
             placeholder="Text"
             {...register("body", {
                required:
                  "Поле обязательно для заполнения!",
              })}
              className={`${classes.input} ${classes.text} ${errors.body ? classes.errorInput : ''}`}
              >

            </textarea>
            <div>
              {errors?.body && (
                <p className={classesLogin.errorMessage}>
                  {errors?.body?.message || "Error"}
                </p>
              )}
            </div>
          </label>

                <div>
                <div className={classesLogin.label}>Tags</div>
            <input
              placeholder="Tags"
              className={`${classes.input} ${classes.tags} `}
            />

          <button type='button' className={classes.button} >Delete</button>

                </div>
          
<div>
            <input
              placeholder="Tags"
              className={`${classes.input} ${classes.tags}`}
            />
            <button type='button' className={classes.button}>Delete</button>

            </div>

            <button type='button' className={`${classes.button} ${classes.buttonAdd}`}>Add tag</button>
      <input
              type="submit"
              value={"Send"}
              className={classesLogin.buttonSabmit}
              disabled={!isValid}
            />

      </form>
        </div>
        </div>
    )
}

export default CreateArticle