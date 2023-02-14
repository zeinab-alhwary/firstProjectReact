import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./RegisterComponent.css"

function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    userName: "",
    passowrd: "",
    confirmPassword:""
  });
const [error, setErros] = useState({
    name:null,
    email:null,
    userName:null,
    password: null,
    confirmPassword:null
})
  const changeData = (event) => {
    //console.log(event);
    if(event.target.name ==="name"){
      setUserData({
          ...userData,
          name: event.target.value
    
    })
   setErros({
    ...error,
    name: event.target.value.length == 0 && "This Field is Required" 

   })
  }
    if(event.target.name==="email")
    {
      setUserData({
        ...userData,
        email:event.target.value
      })
      setErros({
        ...error,
        email: event.target.value.length == 0 ? "This Field is Required" : /.+@.+\.[A-Za-z]+$/.test(event.target.value) ? null : "this email not valid"
    
       })
    }
    if(event.target.name==="userName")
    {
      setUserData({
        ...userData,
        userName:event.target.value
      })
      setErros({
        ...error,
      userName: event.target.value.length == 0 ? "This Field is Required" : RegExp([/^" "/]).test(event.target.value) ? "this email not valid" :null
    })
    }

    if(event.target.name==="password")
    {
      setUserData({
        ...userData,
        passowrd:event.target.value
      })
      setErros({
        ...error,
      password: event.target.value.length == 0 ? "This Field is Required" : event.target.value.length < 8 ? "must be at least 8 number":null
    })
    }
    if(event.target.name==="Confirmpassword")
    {
      setUserData({
        ...userData,
        confirmPassword:event.target.value
      })
      setErros({
        ...error,
        confirmPassword: event.target.value != userData.passowrd ?"Not confirm": event.target.value.length < 8 ? "must be at least 8 number":null
    })
    }
  
  }
  const submitData = (e) => {
    e.preventDefault()
  }
 
  return (
    <>
    <div className='main'> 
      <Form className="registerContainer"  onSubmit={(e) => submitData(e)}>
      <h1 className='head'>REGISTER</h1>
        <Form.Group className="mb-3" controlId="formText">
          <Form.Control
          name="name"
            type="text"
            placeholder="Name"
            aria-label="Disabled input example" value={userData.name}  onChange={(e) => changeData(e)}
            className={`form-control ${error.name}`}
          />
          <p className="text-danger">{error.name}</p>
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
          name="email"
            type="email"
            placeholder="Email"
              value={userData.email} onChange={(e) => changeData(e)}
               
          />
          <p className="text-danger">{error.email}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formText">
          <Form.Control
            name="userName"
            type="text"
            placeholder="User Name"
            aria-label="Disabled input example"
            value={userData.userName} onChange={(e) => changeData(e)}
          />
           <p className="text-dark">{error.userName}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" name="password" value={userData.passowrd} onChange={(e) => changeData(e)} />
          <p className="text-dark">{error.password}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Confirm Password" name="Confirmpassword" value={userData.confirmPassword} onChange={(e) => changeData(e)} />
          <p className="text-dark">{error.confirmPassword}</p>
        </Form.Group>
        <div className='btn'>
        <Button className="btn3" type="submit">
          Submit
        </Button>
        </div>
      </Form>
      </div>
    </>
  );
}
export default Register;
