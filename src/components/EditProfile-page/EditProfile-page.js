import classes from "./EditProfile-page.module.scss";
import classesLogin from "../Login-page/Login-page.module.scss";

function EditProfilePage() {
    const toggle = (e) => {
        const checkboxes = document.querySelector(`.${classes['check-input']}`)
        checkboxes.checked = e.target.checked
    }

  return (
    <div className={classesLogin.content}>
      <div className={classes.form}>
        <h3>Edit Profile</h3>
        <form>
          <label className={classesLogin.label}>Username</label>
          <input
            type="name"
            value={"John Doe"}
            required
            placeholder="Username"
            className={classesLogin.input}
          />
          <label className={classesLogin.label}>Email address</label>
          <input
            type="email"
            value={"john@example.com"}
            required
            placeholder="Email address"
            className={classesLogin.input}
          />
          <label className={classesLogin.label}>New password</label>
          <input
            type="password"
            value={""}
            required
            placeholder="New password"
            className={classesLogin.input}
          />
          <label className={classesLogin.label}>Avatar image (url)</label>
          <input
            type="password"
            value={""}
            required
            placeholder="Avatar image"
            className={classesLogin.input}
          />
        </form>

          <button type="submit" className={classesLogin.buttonSabmit}>
          Save
          </button>
          
      </div>
    </div>
  );
}
export default EditProfilePage;