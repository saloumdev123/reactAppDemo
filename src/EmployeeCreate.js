import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const EmployeeCreate = () => {
    const[id]=useState("")
    const[name,nameChange]=useState("")
    const[email,emailChange]=useState("")
    const[phone,phoneChange]=useState("")
    const[active,activeChange]=useState(true)

    const [validation, validChange] = useState(true)

    const navigate= useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const employeeData =({id, name, email, phone,active});

        fetch("http://localhost:9001/employee",{ 
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(employeeData)
        }).then((res)=>{
           alert("saved successfully")
           navigate("/");
        }).catch((err)=>{
            console.log(err.message);
        })
    }

  return (
    <div>
      
      <div className='row'>
        <div className='offset-lg-3 col-lg-6'>
            <form className='container'  onSubmit={handleSubmit}>

                <div className='card' style={{"textAlign":"left"}}>
                    <div className='card-title'>
                        <h2>Employee Create</h2>
                    </div>
                    <div className='card-body'>
                        <div className='col-lg-12'>
                            <div className='form-group'>
                                <label>ID</label>
                                <input value={id } disabled="disable" className='form-control'></input>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='form-group'>
                                <label>NAME</label>
                                <input required value={name} onMouseDownCapture={e=>validChange(true)} onChange={e=>nameChange(e.target.value)} className='form-control'></input>
                                {name.length===0 && validation && <span className='text-danger'>Please file out the name</span>}
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='form-group'>
                                <label>EMAIL</label>
                                <input  type="email" required="required" onMouseDownCapture={e=>validChange(true)}
                                 value={email} onChange={e=>emailChange(e.target.value)}
                                className='form-control'></input>
                                {email.length>0 && email.length<25 && validation && <span className='text-danger'>please make sure to file a valid email</span>} 
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='form-group'>
                                <label>PHONE</label>
                                <input  value={phone} 
                                onMouseDown={e=>validChange(true)}
                                onChange={e=>phoneChange(e.target.value)} className='form-control'></input>
                                {phone.length===9 && phone.startsWith(77 || 76 || 78||75) && validation && <span className='text-danger'>please the number should be 9 digits</span>}
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='form-check'>
                            <input checked={active} onChange={e=>activeChange.target.checked}
                            type="checkbox"className='form-check-input'></input>
                                <label>Is Activated</label>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='form-group'>
                            <button type="submit"className='btn btn-success'>save</button>
                            <Link to="/" type="button" className='btn btn-danger'>back</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default EmployeeCreate
