import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Employee = () => {
      
    const [data, setData] = useState(null)
   useEffect(()=>{ 
    fetch("http://localhost:9001/employee").then((res)=>{
        return res.json();  
    }).then((resp) =>{
        setData(resp);
    }).catch((err)=>{
        console.log(err.message);
    }) 
}, [])
  return (
    <div className='container'>
      <div className='card'>
         <div className='card-title'>
            <h2>Employee Listing</h2>   
         </div>
         <div className='card-body'>

            <div className='divbtn'>
                <Link to="/employee/create" className='btn btn-success'>Add New (+)</Link>
            </div>
            <table className='table table border'>
                <thead className='bg-dark text-white'>
                    <tr>
                       <td>ID</td> 
                       <td>Name</td> 
                       <td>Email</td> 
                       <td>Phone</td> 
                       <td>Action</td> 
                    </tr>
                </thead>
                <tbody>
                    {   data &&
                        data.map(item=>(
                            <tr key={item.id}>
                              <td>{item.id}</td>
                              <td>{item.name}</td>
                              <td>{item.email}</td>
                              <td>{item.phone}</td>
                              <td to="/employee/edit/:empId" className='btn btn-warning'><a>edit</a></td>
                              <td className='btn btn-danger'><a>remove</a></td>
                              <td to="/employee/detail/:empId" className='btn btn-secondary'><a>details</a></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
         </div>
      </div>
    </div>
  )
}
  
export default Employee
