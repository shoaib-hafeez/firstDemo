import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/context';
import { Link } from 'react-router-dom';

const LoginForm = () => {

    const { email, setEmail, password, setPassword , login } = useContext(AppContext)

    const [validated, setValidated] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const isLoginSuccessful = login({ email, password });
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);
          
        // if (!isEmailValid) {
        //     setEmailError('Please enter a valid email.');
        // } else {
        //     setEmailError('');
        // }

        // if (!isPasswordValid) {
        //     setPasswordError('Password must be at least 8 characters.');
        // } else {
        //     setPasswordError('');
        // }

        if (isLoginSuccessful) {
            setValidated(true);
            const payload = {
                email: email,
                password: password,
            };
            console.log(payload)
            setEmail('');
            setPassword('');
            navigate("/Layout");
        }else{
            if (!isEmailValid) {
                setEmailError('Please enter a valid email.');
            } else {
                setEmailError('');
            }
    
            if (!isPasswordValid) {
                setPasswordError('Password must be at least 8 characters.');
            } else {
                setPasswordError('');
            }
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='form_jsx'>
            <div className="form_main">
                <div className="loginForm">
                    <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Welcome back!</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='label'>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                isInvalid={!!emailError}
                            />
                            {emailError && (
                                <Form.Control.Feedback type="invalid">
                                    {emailError}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <div className="password-wrapper" style={{ position: 'relative' }}>
                                <Form.Control
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    isInvalid={!!passwordError}
                                />
                                <span
                                    onClick={toggleShowPassword}
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                                {passwordError && (
                                    <Form.Control.Feedback type="invalid">
                                        {passwordError}
                                    </Form.Control.Feedback>
                                )}
                            </div>
                        </Form.Group>

                        <Button className='submit-btn mt-3 w-100' variant="success" type="submit">
                            Login
                        </Button>
                        <br /><br />
                        <div className="login_link">
                            <p>Dont have an account </p> <Link to={'/'}>Signup</Link>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
