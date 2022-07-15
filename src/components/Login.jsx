import React,{useState} from 'react'

export const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  /*const [error, setError] = useState('');*/


  return (
    <div className='container'>
        <p/>
        <h2>Login</h2>
        <p/>
        <form autoComplete='off' className='form-group' onSubmit={Login}>
        <label htmlFor='Email'>Email</label>
            <input type='email'  className='form-control' required
            onChange={(e) => setEmail(e.target.value)} value={email}/>
            <p/>
            <label htmlFor='Password'>Password</label>
            <input type='password' className='form-control' required
            onChange={(e) => setPassword(e.target.value)} value={password}/>
            <p/>
            <button type='submit' className='btn btn-primary'>Login</button>
        </form>
    </div>
  )
}

  
  

