import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UploadForm = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Please select a file to upload.</Form.Label>
                <Form.Control type="file" />
            </Form.Group>

            <Form.Group>
                <Form.Label>White, Male</Form.Label>
                <Form.Control type="number" />
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>White, Female</Form.Label>
                <Form.Control type="number" />
                <Form.Text></Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
}

export default UploadForm;