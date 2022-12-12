import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthUser from "./AuthUser";


export default function Register () {

  const navigate = useNavigate();
  const {http, setToken} = AuthUser()
  const {name, setName} = useState();
  const {email, setEmail} = useState();
  const {password, setPassword} = useState();

  const handlClick = () =>{
    // api call
    http.post('/sign_up', { name:name, email:email, password:password}).
         then((res) =>{
        navigate('/login')
    });
  };

    return(
      <section className="vh-90" style={{ background:"#FFFF" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius:"1rem" }}>
              <div className="card-body p-5 text-center">
    
                <h3 className="mb-5">Register</h3>
    
                <div className="form-outline mb-4">
                  <input type="test" placeholder="Enter your name...."
                         className="form-control form-control-lg" 
                         onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-outline mb-4">
                  <input type="email" placeholder="Enter your email...."
                         className="form-control form-control-lg" 
                         onChange={(e) => setEmail(e.target.value)}/>
                </div>
    
                <div className="form-outline mb-4">
                  <input type="password" className="form-control form-control-lg"
                         placeholder="Enter your password...."
                         onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="btn btn-outline-dark btn-lg btn-block"
                       onClick={handlClick} type="submit">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    );
}