import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import AuthUser from "../auth/AuthUser";


export default function Dashboard() {

  const {user, http} = AuthUser();
  const {userDetails, setUserDatails} = useState();

  useEffect(() => {
    fetchUserDetails()
  },[]);

  const fetchUserDetails = () =>{
    http.get('/me').then((res) =>{
      console.log(res.data);
    });
  };

    return(
        <div className='container my-5'>
        <>
          <button className=' btn btn-outline-primary'>Add User</button>
        </>
        <div className="table-responsive my-4">
          <table className="table">
          <caption>List of users</caption>
          <thead className='table-dark'>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
          
            <tr>
              {/* <th scope="row">1</th> */}
              {/* <td>Larry</td> */}
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <NavLink to="">
                  <i className='fa fa-edit text-primary'></i>
                </NavLink>
                <i className='fa fa-remove text-danger ms-2'></i>
                <i className='fa fa-eye text-primary ms-2'></i>
              </td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
    )
}