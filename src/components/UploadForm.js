import React from 'react';
import { Form } from 'react-bootstrap';

const UploadForm = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Please select a file to upload.</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
        </Form>
    )
}

export default UploadForm;