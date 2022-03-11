import { useNavigate } from 'react-router-dom'

export default function Login() {
  // biasakan pake react Hook di dalem function component. bukan di function buatan sendiri kayak handler lah atau apapun
  const navigate = useNavigate();
  
  function loginHandler(event) {
    event.preventDefault()
    
    const login = true;
    
    if(login) {
      navigate('/blog');
    }
    
  }
  
  return (
    <form onSubmit={loginHandler}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  )
}