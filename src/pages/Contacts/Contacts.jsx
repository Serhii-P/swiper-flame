// import { Mail } from "react-ionicons";
// import { LockClosed } from "react-ionicons";
import "./Contacts.css";

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="login-box">
        <form action="">
          <h2>Login</h2>
          <div className="input-box">
            <span className="icon"></span>
            <input type="email" required />
            <label htmlFor="">Email</label>
          </div>
          <div className="input-box">
            <span className="icon"></span>
            <input type="password" required />
            <label htmlFor="">Password</label>
          </div>
          <button type="submit" className="contacts-submit__btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
