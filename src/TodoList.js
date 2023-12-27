// TodoList.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup, Modal } from 'react-bootstrap';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [showModal, setShowModal] = useState(false);

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
            setShowModal(false);
        }
    };

    const removeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <Container>
            <Row className="mt-4">
                <Col md={{ span: 6, offset: 3 }}>
                    <h1 className="text-center">To-Do List</h1>

                    <ListGroup className="mt-4">
                        {tasks.map((task, index) => (
                            <ListGroup.Item key={index}>
                                {task}
                                <Button
                                    variant="danger"
                                    className="float-right"
                                    onClick={() => removeTask(index)}
                                >
                                    Remove
                                </Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>


                    <Button variant="primary" onClick={() => setShowModal(true)}>
                        Add Task
                    </Button>

                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Task</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="taskInput">
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter a new task"
                                        value={newTask}
                                        onChange={(e) => setNewTask(e.target.value)}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowModal(false)}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={addTask}>
                                Add Task
                            </Button>
                        </Modal.Footer>
                    </Modal>


                </Col>
            </Row>
        </Container>
    );
};

export default TodoList;
