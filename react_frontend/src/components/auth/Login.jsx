import axios from "axios";
import { useState } from "react";
import AuthUser from "./AuthUser";


export default function Login () {

  const {http, setToken} = AuthUser()

  const {email, setEmail} = useState();
  const {password, setPassword} = useState();

  const handlClick = () =>{
    // api call
    http.post('/login', {email:email, password:password}).then((res) =>{
      setToken(res.data.user, res.data.access_token);
    })
  };

    return(
      <section className="vh-90" style={{ background:"#FFFF" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius:"1rem" }}>
              <div className="card-body p-5 text-center">
    
                <h3 className="mb-5">Sign in</h3>
    
                <div className="form-outline mb-4">
                  <input type="email" placeholder="Enter your email...."
                         className="form-control form-control-lg" 
                         onChange={(e) => setPassword(e.target.value)}/>
                </div>
    
                <div className="form-outline mb-4">
                  <input type="password" className="form-control form-control-lg"
                         placeholder="Enter your password...."
                         onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="btn btn-outline-primary btn-lg btn-block"
                       onClick={handlClick} type="submit">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    );
}