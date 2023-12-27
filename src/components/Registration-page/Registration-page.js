import classes from "./Registration-page.module.scss";
import classesLogin from "../Login-page/Login-page.module.scss";
import { useForm } from "react-hook-form";

function RegistrationPage() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data)) 
    reset()
  };
  const password = watch('password')

  const validatePassword = (value) =>  value === password || 'Пароли не совпадают'

  const toggle = (e) => {
    const checkboxes = document.querySelector(`.${classes["check-input"]}`);
    checkboxes.checked = e.target.checked;
  };

  return (
    <div className={classesLogin.content}>
      <div className={classesLogin.form}>
        <h3>Create new account</h3>
        <form onSubmit={handleSubmit(onSubmit)}>

          <label className={classesLogin.label}>
            Username
            <input
              type="text"
              placeholder="Username"
              className={classesLogin.input}
              {...register("username", {
                required:
                  "Поле обязательно для заполнения!",
                minLength: {
                  value: 3,
                  message: 'Поле должно содержать от 3 до 20 символов (включительно)'
                },
                maxLength: {
                  value: 20,
                  message: 'Поле должно содержать от 3 до 20 символов (включительно)'
                },
              })}
            />
            <div>
              {errors?.username && (
                <p className={classesLogin.errorMessage}>
                  {errors?.username?.message || "Error"}
                </p>
              )}
            </div>
          </label>

          <label className={classesLogin.label}>
            Email address
            <input
              type="email"
              placeholder="Email address"
              className={classesLogin.input}
              {...register("email", {
                required:
                  "Поле обязательно для заполнения!",
              })}
            />
            <div>
              {errors?.email && (
                <p className={classesLogin.errorMessage}>
                  {errors?.email?.message || "Error"}
                </p>
              )}
            </div>
          </label>

          <label className={classesLogin.label}>
            Password
            <input
              type="password"
              required
              placeholder="Password"
              className={classesLogin.input}
              {...register("password", {
                required:
                  "Поле обязательно для заполнения и должно содержать от 6 до 40 символов (включительно)",
                minLength: {
                  value: 3,
                  message: 'Поле должно содержать от 6 до 40 символов (включительно)'
                },
                maxLength: {
                  value: 40,
                  message: 'Поле должно содержать от 6 до 40 символов (включительно)'
                },
              })}
            />
            <div>
              {errors?.password && (
                <p className={classesLogin.errorMessage}>
                  {errors?.password?.message || "Error"}
                </p>
              )}
            </div>
          </label>

          <label className={classesLogin.label}>Repeat Password
          <input
            type="password"
            required
            placeholder="Password"
            className={classesLogin.input}
            {...register("passwordRepeat", {
              required:
                "Поле обязательно для заполнения!",
              validate: validatePassword,
            })}
          />
            <div>
              {errors?.passwordRepeat && (
                <p className={classesLogin.errorMessage}>
                  {errors?.passwordRepeat?.message || "Error"}
                </p>
              )}
            </div>
          </label>

          <label className={classes["input-filter"]}>
            <input
              type="checkbox"
              className={classes["check-input"]}
              onChange={toggle}
              defaultChecked
            />
            <span className={classes["check-box"]} />I agree to the processing
            of my personal information
          </label>

          <div className={classesLogin.container}>
            <input
              type="submit"
              value={"Create"}
              className={classesLogin.buttonSabmit}
              disabled={!isValid}
            />

            <p className={classesLogin.text}>
              Already have an account? <span>Sign In.</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default RegistrationPage;
