// Write your code here
const Login=props=>{
  const {changeStatus}=props

  return (
    <button type="button" onClick={changeStatus} className="btn-login">
      Logout
    </button>
  )
}

export default Login
