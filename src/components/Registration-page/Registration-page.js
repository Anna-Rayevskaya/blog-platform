import classes from "./Registration-page.module.scss";
import classesLogin from "../Login-page/Login-page.module.scss";

function RegistrationPage() {
    const toggle = (e) => {
        const checkboxes = document.querySelector(`.${classes['check-input']}`)
        checkboxes.checked = e.target.checked
    }

  return (
    <div className={classesLogin.content}>
      <div className={classes.form}>
        <h3>Create new account</h3>
        <form>
          <label className={classesLogin.label}>Username</label>
          <input
            type="name"
            value={""}
            required
            placeholder="Username"
            className={classesLogin.input}
          />
          <label className={classesLogin.label}>Email address</label>
          <input
            type="email"
            value={""}
            required
            placeholder="Email address"
            className={classesLogin.input}
          />
          <label className={classesLogin.label}>Password</label>
          <input
            type="password"
            value={""}
            required
            placeholder="Password"
            className={classesLogin.input}
          />
          <label className={classesLogin.label}>Repeat Password</label>
          <input
            type="password"
            value={""}
            required
            placeholder="Password"
            className={classesLogin.input}
          />
        </form>
        <label className={classes['input-filter']}>
        <input type="checkbox" className={classes['check-input']}  onChange={toggle} defaultChecked/>
        <span className={classes['check-box']} />
            I agree to the processing of my personal information
        </label>


        <div className={classesLogin.container}>
          <button type="submit" className={classesLogin.buttonSabmit}>
            Create
          </button>

          <p className={classesLogin.text}>
            Already have an account? <span>Sign In.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default RegistrationPage;
