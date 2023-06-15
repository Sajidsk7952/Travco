import { Form } from "react-router-dom";
import classes from './login.module.css';
const Login = () => {
  return (
    <div>
      <h1>hey, Traveller login into your account</h1>
      <div className={classes.content}>
        <img
          src="https://img.freepik.com/free-vector/my-password-concept-illustration_114360-4294.jpg?size=626&ext=jpg&ga=GA1.1.1861853484.1684990079&semt=robertav1_2_sidr"
          alt="login"
          className={classes.img}
        />
        <Form>
          <label>Email:</label>
          <input type="email" placeholder="Enter your E-mail" />
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
          <button>Login</button>
        </Form>
      </div>
    </div>
  );
};
export default Login;
