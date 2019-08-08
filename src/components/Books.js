import React, {
    useState
} from 'react'
import {
    Badge, Button, Container, Col, Row,
    Card, CardBody, CardSubtitle, CardTitle,
    Input, FormGroup, Label
} from 'reactstrap';
import { CountProvider, useGlobal } from './Context';

let books = [];
const CreateBooks = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [, dispatch] = useGlobal();

    const addBook = () => {
        books.push({ title, description })
        dispatch({ type: "CREATE_BOOK", books })
    }

    return (
        <>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" name="title" placeholder="with a title"
                    defaultValue={title}
                    onChange={e => setTitle(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label for="description">Description</Label>
                <Input type="text" name="description" placeholder="with a description"
                    defaultValue={description}
                    onChange={e => setDescription(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Button disabled={title === "" || description === ""} block color="success"
                    onClick={() => addBook()}
                >
                    Create Book
                </Button>
            </FormGroup>
        </>
    );
}


const Books = () => {
    const [state] = useGlobal();

    return (
        <>
            {state.books.map((item, i) => {
                return (
                    <div key={i}>
                        <CardTitle>{item.title}</CardTitle>
                        <CardSubtitle>{item.description}</CardSubtitle>
                    </div>
                )
            })}
        </>
    )


}

const CountBooks = () => {
    const [state] = useGlobal();
    return (<h3 className="text-white">Count list of Books <Badge color="secondary">{state.countBooks}</Badge></h3>);
}


export default () => {
    return (
        <>
            <Container className="text-center">
                <h1 className="text-white mt-5 mb-5">Welcome to Books</h1>
                <CountProvider>
                    <Row >
                        <Col md={6}>
                            <Card>
                                <CardBody>
                                    <CreateBooks />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card>
                                <CardBody>
                                    <Books />
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>
                    <Row className="mt-5">
                        <Col md={12}>
                            <CountBooks />
                        </Col>
                    </Row>
                </CountProvider>
            </Container>
        </>
    );
}






