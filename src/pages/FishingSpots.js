import React, { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Container, Table, Form, Button } from "react-bootstrap";

const FishingSpots = () => {
    const [spots, setSpots] = useState([]);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");

    useEffect(() => {
        fetchFishingSpots();
    }, []);

    const fetchFishingSpots = async () => {
        const response = await axiosInstance.get("/fishing-spots");
        setSpots(response.data);
    };

    const createFishingSpot = async (e) => {
        e.preventDefault();
        await axiosInstance.post("/fishing-spots", { name, location });
        fetchFishingSpots();
    };

    const updateFishingSpot = async (id) => {
        await axiosInstance.put(`/fishing-spots/${id}`, { name, location });
        fetchFishingSpots();
    };

    const deleteFishingSpot = async (id) => {
        await axiosInstance.delete(`/fishing-spots/${id}`);
        fetchFishingSpots();
    };

    return (
        <div>
            <Navbar />
            <div className="d-flex">
                <Sidebar />
                <Container className="p-4">
                    <h2>Fishing Spots</h2>
                    <Form onSubmit={createFishingSpot} className="mb-4">
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button type="submit" variant="primary">
                            Add Fishing Spot
                        </Button>
                    </Form>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {spots.map((spot) => (
                                <tr key={spot.id}>
                                    <td>{spot.name}</td>
                                    <td>{spot.location}</td>
                                    <td>
                                        <Button
                                            variant="warning"
                                            className="me-2"
                                            onClick={() =>
                                                updateFishingSpot(spot.id)
                                            }
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="danger"
                                            onClick={() =>
                                                deleteFishingSpot(spot.id)
                                            }
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </div>
        </div>
    );
};

export default FishingSpots;
