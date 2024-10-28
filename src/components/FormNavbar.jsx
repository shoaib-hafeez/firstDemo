import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const FormNavbar = () => {

    return (
        <Navbar expand="lg" className="bg-body-tertiary navbarjsx   ">
            <Container container-fluid>
                <Navbar.Brand  >  <p className='logo'><span>O</span>nline<span>S</span>tore</p> </Navbar.Brand>
                
                
            </Container>
        </Navbar>
    );
};

export default FormNavbar;
