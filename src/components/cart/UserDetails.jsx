import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import NavbarJsx from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const UserDetails = () => {

  const {removeToCart , cartItems} =  useContext(CartContext)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [errors, setErrors] = useState({});

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(inputEmail)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   

    let newErrors = {};

    if (!firstName) newErrors.firstName = "First name is required";
    if (!lastName) newErrors.lastName = "Last name is required";
    if (!email || isValidEmail === false) newErrors.email = "Please enter a valid email";
    if (!phoneNumber || phoneNumber.length < 10) newErrors.phoneNumber = "Please enter a valid phone number";
    if (!address) newErrors.address = "Address is required";
    if (!city) newErrors.city = "City is required";
    if (!state) newErrors.state = "State is required";
    if (!zip) newErrors.zip = "Zip code is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const payload = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        phonenumber: phoneNumber,
        address: address,
        city: city,
        state: state,
        zip: zip,
      }
      console.log(payload)


      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setAddress('');
      setCity('');
      setState('');
      setZip('');
      setIsValidEmail(null);
      setErrors({});
      removeToCart(cartItems);
    }
  };

  return (
    <div className="userDetails_jsx">
      <NavbarJsx />

      <div className="userForm">
        <h1>Shipping Form</h1>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Label>First name</Form.Label>
              <Form.Control
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Col>
            <Col>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
                isValid={isValidEmail === true}
                isInvalid={isValidEmail === false || !!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email || "Please enter a valid email."}
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                Looks good!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone" className="phone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control

                type="tel"
                placeholder="0312XXXXXXX"
                value={phoneNumber}
                maxLength={11}
                onChange={(e) => setPhoneNumber(e.target.value)}
                isInvalid={!!errors.phoneNumber}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phoneNumber}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              isInvalid={!!errors.address}
            />
            <Form.Control.Feedback type="invalid">
              {errors.address}
            </Form.Control.Feedback>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                value={city}
                onChange={(e) => setCity(e.target.value)}
                isInvalid={!!errors.city}
              />
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select
                defaultValue="Choose..."
                value={state}
                onChange={(e) => setState(e.target.value)}
                isInvalid={!!errors.state}
              >
                <option value="">Choose...</option>
                <option value="State1">State1</option>
                <option value="State2">State2</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                isInvalid={!!errors.zip}
              />
              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Link to={"/Thankyou"} className='userSubmitBtn' onClick={()=> removeToCart(cartItems)} >
            <div className="userBtn">
              <button type="submit" className="userSubmitBtn" >
                Submit
              </button>
            </div>
          </Link>
        </Form>
      </div>

      <br />
      <div className="userDetailsFoter">
        
      <Footer />
      </div>
    </div>
  );
};

export default UserDetails;
