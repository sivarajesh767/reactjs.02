// Write your code here
const Logout=props=>{
  const {changeStatus}=props
  return (
    <button type="button" onClick={changeStatus} className="btn-logout">
      Login
    </button>
  )
}
export default Logout
