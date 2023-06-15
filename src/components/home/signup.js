import { Form } from "react-router-dom";
import classes from "./signup.module.css";
const SignUp = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.head}>New to Travco, SignUp for your account</h1>
      <div className={classes.content}>
        <img
          src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7875.jpg?size=626&ext=jpg&ga=GA1.2.1861853484.1684990079&semt=ais"
          alt="signup"
          className={classes.img}
        ></img>
        <Form>
          <label className={classes.formele}>Email:</label>
          <input type="email" placeholder="Enter your email"  className={classes.formele}/>
          <label className={classes.formele}>Create Password:</label>
          <input type="password" placeholder="enter your password"  className={classes.formele}/>
          <label className={classes.formele}>Confirm Password:</label>
          <input type="password" placeholder="confirm your password"  className={classes.formele}/>
          <button>Sign Up</button>
        </Form>
      </div>
    </div>
  );
};
export default SignUp;
