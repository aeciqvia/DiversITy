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

            <Form.Group>
                <Form.Label>Black, Male</Form.Label>
                <Form.Control type="number" />
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Black, Female</Form.Label>
                <Form.Control type="number" />
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Asian, Male</Form.Label>
                <Form.Control type="number" />
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Asian, Female</Form.Label>
                <Form.Control type="number" />
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Native American, Male</Form.Label>
                <Form.Control type="number" />
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Native American, Female</Form.Label>
                <Form.Control type="number" />
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Pacific Islander, Male</Form.Label>
                <Form.Control type="number" />
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Pacific Islander, Female</Form.Label>
                <Form.Control type="number" />
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Multiple, Male</Form.Label>
                <Form.Control type="number" />
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Multiple, Female</Form.Label>
                <Form.Control type="number" />
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Other, Male</Form.Label>
                <Form.Control type="number" />
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Other, Female</Form.Label>
                <Form.Control type="number" />
                <Form.Text></Form.Text>
            </Form.Group>

            

            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
}

export default UploadForm;