import React, { useEffect, useState } from 'react'
import AdminLayout from '../AdminLayout'
import axios from 'axios'

const ViewUser = () => {
  const [user, setuser] = useState([])

  const fetchuser = async () => {
    try {
      const userapi = await axios.get("http://localhost:3000/user")
      setuser(userapi.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchuser()
  }, [])

  return (
    <>
      <AdminLayout>
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className='table table-bordered table-hover text-center align-middle'>
                  <thead className='table-primary'>
                    <tr>
                      <th style={{ minWidth: "60px" }}>ID</th>
                      <th style={{ minWidth: "150px" }}>Username</th>
                      <th style={{ minWidth: "200px" }}>Email-ID</th>
                      <th style={{ minWidth: "180px" }}>Password</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      user.length > 0 ? (
                        user.map((item, index) => (
                          <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>
                              <span className='text-muted'>{item.password.replace(/./g,"*")}</span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4" className='text-center'>No data found</td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  )
}

export default ViewUser
