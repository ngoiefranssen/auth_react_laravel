

export default function Dashboard() {
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
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">LastName</th>
              <th scope="col">Email</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
          
            <tr>
              <th scope="row">1</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
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