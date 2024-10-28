import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom' ;
import { AppContext } from '../context/context';
import {Link , Navigate} from 'react-router-dom' 
import NavbarJsx from '../components/Navbar';
import FormNavbar from './FormNavbar';
const SignupForm = () => {


const {email,setEmail , password, setPassword ,signup , fullName , setFullName} = useContext(AppContext)

  const [validated, setValidated] = useState(false);
 
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fullNameError, setFullNameError] = useState('');

  
  const navigate = useNavigate()

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const doPasswordsMatch = password === confirmPassword;

    if (isEmailValid && isPasswordValid && doPasswordsMatch) {
        setValidated(true);
        
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        
  
        const newUser = {
            fullName: fullName,
            email: email,
            password: password
        };
        
        existingUsers.push(newUser);

        localStorage.setItem('users', JSON.stringify(existingUsers));

        signup({ email, password, fullName });

        navigate('/Layout');
        setFullName('');
        setEmail('');
        setPassword('');
    } else {
        if (!isEmailValid) 
            setEmailError('Please enter a valid email.');
        if (!isPasswordValid) 
            setPasswordError('Password must be at least 8 characters.');
        if (!doPasswordsMatch) 
            setConfirmPasswordError('Passwords do not match.');
    }
};

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className='form_jsx'>
      <div className="form_main">
        <div className="signupForm">
        <h1 style={{textAlign:'center'}}>Join us today!</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                isInvalid={!!fullNameError}
              />
              {fullNameError && (
                <Form.Control.Feedback type="invalid">
                  {fullNameError}
                </Form.Control.Feedback>
              )}
            </Form.Group>



            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
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
                  type={showPassword ? 'text' : 'password'}
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


            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <div className="password-wrapper" style={{ position: 'relative' }}>
                <Form.Control
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  isInvalid={!!confirmPasswordError}
                />
                <span
                  onClick={toggleShowConfirmPassword}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer'
                  }}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                {confirmPasswordError && (
                  <Form.Control.Feedback type="invalid">
                    {confirmPasswordError}
                  </Form.Control.Feedback>
                )}
              </div>
            </Form.Group>

            <Button className='submit-btn mt-3 w-100' variant="success" type="submit">
              Signup
            </Button>
            <br /> <br />
           <div className="login_link">
           <p>Already have an account?</p> <Link to={'/LoginForm'}>Login</Link>
           </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
