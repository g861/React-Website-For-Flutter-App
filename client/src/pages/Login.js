// We have to create a Sign Up component  in the components folder  
import React, { useRef , useState } from 'react'
import { Form , Button , Card , Alert} from 'react-bootstrap' 
import { useAuth } from '../contexts/AuthContext'
import { Link , useHistory } from 'react-router-dom'
function Login() {
    const emailRef =useRef()
    const passwordRef = useRef()
    const { login } = useAuth() 
    const [error,setError] = useState("") ;
    const [loading,setLoading] = useState(false)
    const history = useHistory()
 async function handleSubmit(e){
        e.preventDefault()

       try{ 
           setError("")
           setLoading(true)
           await login(emailRef.current.value , passwordRef.current.value)  
           history.push("/")       
        } catch{
            setError('Failed to Login ! Please try once Again ')
        }
        
        setLoading(false)
    }
    return (
        <div className="makers">
            <Card >
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={ handleSubmit }>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email Id" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Your Password" ref={passwordRef} required  />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Log In</Button>
                    </Form> 
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Do not have An Account ? Create One  <Link to="./SignUp"> SignUp</Link>
            </div>
        </div>
    )
}

export default Login
