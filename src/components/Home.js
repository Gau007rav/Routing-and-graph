import React,{useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Home() {
    let navigate = useNavigate()
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    let [userError,setUserError] = useState(false)
    let [passwordError,setPasswordError]=useState(false)
   
    function userHandler(e){
        let item= (e.target.value);
        if(item.length<3 )
        {
           setUserError(true)
        }
        else
        {
            setUserError(false)
        }
        setUser(item)
    }
    function passwordHandler(e){
        let item= ( e.target.value);
        if(item.length<3 )
        {
           setPasswordError(true)
        }
        else
        {
            setPasswordError(false)
        }
        setPassword(item)

    }
  return (
      <>
      <div id="bckGround">
      <form id="form">
          <h3>Register here</h3>
      <div>
          <label>Your E-mail address</label>
          <input placeholder="full Name" type="email" className="d1" ></input>
      </div>
      <div>
          <label>your Password</label>
          <input placeholder="Password" type="password" className="d2" value={password} onChange={passwordHandler}></input>
        {passwordError?<span>Password Not Valid</span>:""}

      </div>
      <div>
          <label>Confirm-Password</label>
          <input placeholder="Password" type="password" className="d3"></input>
      </div>
      <div>
          <label>Name</label>
          <input placeholder="full Name" type="text" className="d4" value={user} onChange={userHandler}></input><br></br>
          {userError?<span>User Not Valid</span>:""} 
      </div>
      <div>
          <label>Your Phone no.</label>
          <input placeholder="Phone no." type="text" className="d5"></input>
      </div>
      </form>

      <button type="submit" onClick={(e)=>{
          navigate("/about")
          if(user.length<3 || password.length<3)
        {
            alert("type correct values")
        }
        else
        {
            alert("all good :)")
        }

        e.preventDefault()
      }} className="btn" >sign-up</button>
      </div>
      </>
  );
}

export default Home;