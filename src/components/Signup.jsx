import React from 'react'




export const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const Signup = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
        } else {
            alert('Signup successful');
        }
        console.log('form submitted')
        console.log(name,email,password,confirmPassword)
    }


    


  return (
    <div className='container'>
        <p/>
        <h2>Sign Up</h2>
        <p/>
        <form autoComplete='off' className='form-group' onSubmit={Signup}>
            <label htmlFor='Name'>Name</label>
            <input type='text' className='form-control' required
            onChange={(e) => setName(e.target.value)} value={name} />
            <p/>
            <label htmlFor='Email'>Email</label>
            <input type='email'  className='form-control' required
            onChange={(e) => setEmail(e.target.value)} value={email}/>
            <p/>
            <label htmlFor='Password'>Password</label>
            <input type='password' className='form-control' required
            onChange={(e) => setPassword(e.target.value)} value={password}/>
            <p/>
            <label htmlFor='ConfirmPassword'>Confirm Password</label>
            <input type='password'  className='form-control' required
            onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
            <p/>
            <button type='submit' className='btn btn-primary'>Sign Up</button>
        </form>
    </div>
  )
}
