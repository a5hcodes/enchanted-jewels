import React, {useState} from 'react';

function LoginForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin =(e) => {
        e.preventDefault();
        console.log('logginng in:', email, password);
    };

    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                type='email'
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />

                <br />

                <input
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />

                <br />

                <button type='submit'>Login</button>
                <p>Don't have an account? <a href='/signup'>Sign Up</a></p>
            </form>
        </div>
    );
};

export default LoginForm;