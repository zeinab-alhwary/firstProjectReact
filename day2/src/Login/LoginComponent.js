import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { PasswordToggle } from '../Store/Action';
import "./LoginComponent.css";
function LoginComponent(){
  const test=useSelector((state)=>state.passToggle)
   
      const  dispach=useDispatch();
      const passChange=()=>{
        dispach(PasswordToggle(test=="hidden"?"visible":"hidden"))


      }
  const [userData,setuserdata]=useState({
    email:"",
    password:""
  })
  const [error, setErros] = useState({
    email:null,
    password: null
})
const changeUserData=(e)=>{
  if(e.target.name == "email"){
    setuserdata({
        ...userData,
        email: e.target.value
    })

    setErros({
      ...error, 
      email: e.target.value.length == 0 && "This Field is Required"  
  })
}else{
  setuserdata({
      ...userData,
      password: e.target.value
  })

  setErros({
      ...error,
      password: e.target.value.length == 0 ? "This Field is Required" :e.target.value.length<8 ?"minimum charcter must be at least 8" :null
  })
}

}
 
  
const submitData = (e) => {
  e.preventDefault()
}

    return(<>
    <div className='main'>
    <Form className='loginContainer' onSubmit={(e) => submitData(e)}>
        <h1 className='head'>LOGIN</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email"  className={`form-control ${error.email && "border-danger"}`}
                value={userData.email} onChange={(e) => changeUserData(e)}  /> 
        <p  className="textError">
        {error.email}
        </ p>
      </Form.Group>

      <Form.Group className="mb-3 formC" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type={test=="hidden"?"password":"text"} placeholder="Password" className="form-control"  value={userData.password} onChange={(e) => changeUserData(e)}  />
        <span className='eyeT' onClick={()=>passChange()}><i  class={test=="hidden"?"fa-solid fa-eye-slash":"fa-solid fa-eye"}></i></span>
       
        <p  className="textError">
        {error.password}
        </p>
      </Form.Group>
     <div className='btn'>
      <button  className='btn1' type="submit"  disabled = {error.password || error.email }>
        Submit
      </ button>
      </div>
    </Form >
    </div>
    </>)
}
export default LoginComponent;