import classesLogin from "../Login-page/Login-page.module.scss";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useState } from "react";
import React from 'react';


function EditProfilePage() {

  const user = useSelector((state)=> state.registration.user)
  console.log(user)
  const [textName, setTextName] = useState(user.username);
  const [textEmail, setTextEmail] = useState(user.email);

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isValid },
    } = useForm({
      mode: "onChange",
    });
  
    const onSubmit = (data) => {
      console.log(JSON.stringify(data)) 
      reset()
    };

    const handleInputChangeName = (e) => {
      setTextName(e.target.value);
      console.log(e.target.value)
    };

    const handleInputChangeEmail = (e) => {
      setTextEmail(e.target.value);
      console.log(e.target.value)
    };

  return (
    <div className={classesLogin.content}>
      <div className={classesLogin.form}>
        <h3>Edit Profile</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className={classesLogin.label}>
            Username
            <input
              type="text"
              // placeholder={user.user.username}
              value = {textName} onChange = {(event)=>{handleInputChangeName(event.target.value)}}
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
              className={`${classesLogin.input} ${errors.username ? classesLogin.errorInput : ''}`}
              // onChange={handleInputChange}
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
              // placeholder={user.user.email}
              value = {textEmail} onChange = {handleInputChangeEmail}
              {...register("email", {
                required:
                  "Поле обязательно для заполнения!",
                  pattern: {
                    value: /^[\w\.-]+@[\w\.-]+\.\w+$/,
                    message: 'email должен быть корректным почтовым адресом!'
                  }
              })}
              className={`${classesLogin.input} ${errors.email ? classesLogin.errorInput : ''}`}
              // onChange={handleInputChange()}
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
          New password
            <input
              type="password"
              required
              placeholder="New password"
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
              className={`${classesLogin.input} ${errors.password ? classesLogin.errorInput : ''}`}
            />
            <div>
              {errors?.password && (
                <p className={classesLogin.errorMessage}>
                  {errors?.password?.message || "Error"}
                </p>
              )}
            </div>
          </label>

          <label className={classesLogin.label}>Avatar image (url)</label>
          <input type="url" name="url" placeholder="Avatar image"
          {...register("url", {
            pattern: {
              value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/ ,
              message: 'avatar image должен быть корректным url'
            }
          })}
          className={`${classesLogin.input} ${errors.password ? classesLogin.errorInput : ''}`}
          />
          <div>
              {errors?.url && (
                <p className={classesLogin.errorMessage}>
                  {errors?.url?.message || "Error"}
                </p>
              )}
            </div>
        </form>

          <input
              type="submit"
              value={"Save"}
              className={classesLogin.buttonSabmit}
              disabled={!isValid}
            />
          
      </div>
    </div>
  );
}
export default EditProfilePage;