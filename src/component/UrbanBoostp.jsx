import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import Image from 'react-bootstrap/Image';
import { House, PersonCircle, Bell } from 'react-bootstrap-icons';

const UrbanBTS = () => {
    const [validated, setValidated] = useState(false);

    const users = [
        { id: 1, firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
        { id: 2, firstName: 'Jacob', lastName: 'Thornton', username: '@fat' },
        { id: 3, firstName: 'Larry', lastName: 'Bird', username: '@twitter' }
    ];
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (

        <Container className='mt-4'>
            <Row >
                <Col xs={3}><Button variant="primary">Primary</Button></Col>
                <Col xs={3}><Button variant="secondary">Secondary</Button></Col>
                <Col xs={3}><Button variant="success">Primary</Button></Col>
                <Col xs={3}><Button variant="warning">   <Bell size={20} color="red" /> Notificaciones</Button></Col>
            </Row>
            <Row className='mt-2'>
                <Col xs={12}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.username}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue="Mark"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                defaultValue="Otto"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="text" placeholder="Zip" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid zip.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                </Form>
            </Row>
            <Row className='mt-2 mb-3'>
                <Col xs={6} md={4}>
                    <Image width={'100%'} height={'100%'} src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c" rounded />
                </Col>
                <Col xs={6} md={4}>
                    <Image width={'100%'} height={'100%'} src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c" roundedCircle />
                </Col>
            </Row>
        </Container>
    )
}
export default UrbanBTS