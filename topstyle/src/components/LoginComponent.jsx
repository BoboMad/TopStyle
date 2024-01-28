import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const LoginComponent = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  
    const handleLogin = (e) =>{
        e.preventDefault();
        console.log(email)
        console.log(password)

    }
  
  
    return (
        <Form onSubmit={handleLogin}>
            <FloatingLabel  
            controlId="floatingInput"
            label="E-mail"
            className="mb-3">

                <Form.Control type='email' placeholder='name@example.com' onChange={e => setEmail(e.target.value)} />
            </FloatingLabel>

            <FloatingLabel 
            controlId="floatingPassword" 
            label="Password">
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            </FloatingLabel>

            <Button type='submit'>Login</Button>
            
        </Form>
  )
}

export default LoginComponent;