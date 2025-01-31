
import './LoginLogout.css';
function LoginPage(){
   
    
      return (
        <div className="login-container">
          <div className="login-box">
            <h2>Login</h2>
            <form>
              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="Enter" />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input type="password" placeholder="Enter" />
              </div>
              <button className="login-button">Login</button>
            </form>
            <p className="register-text">
              Don't have an account? <a href="#">Register here</a>
            </p>
          </div>
        </div>
      );
    };

     



export default LoginPage