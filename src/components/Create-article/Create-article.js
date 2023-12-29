import classes from "./Create-article.module.scss";
import classesLogin from "../Login-page/Login-page.module.scss";
import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  createArticle,
  fetchArticle,
  updateArticle,
  addTags,
} from "../../store/articleReducer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CreateArticle({ action }) {
  const article = useSelector((state) => state.article.article);
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const [title, setTitle] = useState(article?.title || "text");
  const [description, setDescription] = useState(
    article?.description || "text"
  );

  useEffect(() => {
    if (action) {
      dispatch(fetchArticle(id));
    }
  }, [id]);

  useEffect(() => {
    if (action && article) {
      setTitle(article.title || "");
      setDescription(article.description || "");
    }
  }, [article]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      tagList: [{tag: ''}],
    }
  });

  let { fields, append, remove } = useFieldArray(
    {
      control,
      name: "tagList",
    }
  );

  function findTags(arr) {
    let result = [];
    arr.map((obj)=>{
      result.push(obj.tag)
    })
    return result;
  }

  const onSubmit = (params) => {
    console.log(params);
    let tags = findTags(params.tagList);
    console.log(tags);
    if (action) {
      const newParams = {
        article: {
          title: String(params.title),
          description: String(params.description),
          body: String(params.body),
          tagList: tags,
        },
      };
      dispatch(
        updateArticle({
          id: id,
          token: user.token,
          params: newParams,
        })
      );
    } else {
      const newParams = {
        article: {
          title: String(params.title),
          description: String(params.description),
          body: String(params.body),
          tagList: tags,
        },
      };
      dispatch(
        createArticle({
          token: user.token,
          params: newParams,
        })
      );
      reset();
    }
  };

  const handleInputChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleInputChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  function tegAdd(e) {
    dispatch(addTags(1));
  }

  return (
    <div className={classesLogin.content}>
      <div className={classes.form}>
        <h3>Sign In</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className={classesLogin.label}>
            Title
            <input
              value={title}
              placeholder="Title"
              {...register("title", {
                required: "Поле обязательно для заполнения!",
              })}
              className={`${classes.input} ${
                errors.title ? classes.errorInput : ""
              }`}
              onChange={handleInputChangeTitle}
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
              value={description}
              placeholder="Title"
              {...register("description", {
                required: "Поле обязательно для заполнения!",
              })}
              className={`${classes.input} ${
                errors.description ? classes.errorInput : ""
              }`}
              onChange={handleInputChangeDescription}
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
              defaultValue={action && article ? article.body : null}
              {...register("body", {
                required: "Поле обязательно для заполнения!",
              })}
              className={`${classes.input} ${classes.text} ${
                errors.body ? classes.errorInput : ""
              }`}
            ></textarea>
            <div>
              {errors?.body && (
                <p className={classesLogin.errorMessage}>
                  {errors?.body?.message || "Error"}
                </p>
              )}
            </div>
          </label>

          <div className={classesLogin.label}>Tags</div>

            {fields.map((tag, index) => {
              return (
                <div key={index}>
                  <input
                    placeholder="Tags"
                    className={`${classes.input} ${classes.tags}`}
                    {...register(`tagList.${index}.tag`, {
                      required: "Поле обязательно для заполнения!",
                    })}
                  />
                  <button
                    type="button"
                    className={classes.button}
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}

            <button
              type="button"
              className={`${classes.button} ${classes.buttonAdd}`}
              onClick={() => {
                append();
              }}
            >
              Add tag
            </button>

          <input
            type="submit"
            value={"Send"}
            className={classesLogin.buttonSabmit}
            disabled={!isValid}
          />
        </form>
      </div>
    </div>
  );
}

export default CreateArticle;
