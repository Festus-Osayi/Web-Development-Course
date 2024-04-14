import { Card, Form, Button, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import { authenticateUser } from '@/lib/authenticate';
import { useRouter } from "next/router";

export default function Login(props) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('')
    const [warning, setWarning] = useState('');
    const router = useRouter();



    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await authenticateUser(user, password);
            router.push('/vehicles');
        } catch (err) {
            setWarning(err.message);
        }
    }

    return (
        <>
            <Card bg="light">
                <Card.Body><h2>Login</h2>Enter your login information below:</Card.Body>
            </Card>
            <br />
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>User:</Form.Label>
                    <Form.Control value={user} onChange={(e) => setUser(e.target.value)} type="text" id="userName" name="userName" />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" />
                </Form.Group>
                <br />
                <Button variant="primary" className="pull-right" type="submit">Login</Button>
            </Form>
            {warning && (<><br /><Alert variant="danger">{warning}</Alert></>)}
            
        </>
    );
}