import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { showLoading, hideLoading } from '../../redux/alertsSlice';
import toast from 'react-hot-toast';
import Layouts from '../../Components/Layouts/Layouts';
import { Card, Col, Row, Button } from 'antd';
import moment from 'moment';
import './Rendezvous.css';

const Rendezvous = () => {
    const [reservations, setReservations] = useState([]);
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);

    const fetchReservations = async () => {
        try {
            dispatch(showLoading());
            const response = await axios.get('/api/user/reservations', {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });
            dispatch(hideLoading());
            if (response.data.success) {
                const userReservations = response.data.data.filter(reservation => reservation.userId === user._id);
                setReservations(userReservations);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            toast.error("Erreur lors de la récupération des réservations");
        }
    };

    const deleteAllReservations = async () => {
        try {
            dispatch(showLoading());
            const response = await axios.put('/api/user/deletes-all-reservations', {
                userId: user._id
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });
            dispatch(hideLoading());
            if (response.data.success) {
                toast.success(response.data.message);
                setReservations([]); // Clear local state
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            toast.error("Erreur lors de la suppression des réservations");
        }
    };

    useEffect(() => {
        fetchReservations();
    }, []);

    return (
        <Layouts>
            <h1 className='page-title'>Mes Réservations</h1>
            <div className="buttons-delete flex justify-end items-end mt-2">
                <Button type="primary" danger onClick={deleteAllReservations}>
                    Supprimer toutes les réservations
                </Button>
            </div>
            <hr />
            <Row gutter={16} className='row'>
                {reservations.map(reservation => (
                    <Col span={8} key={reservation._id} className='tt'>
                        <Card title={`${reservation.Name}`} bordered={false} className='tt'>
                            <p><strong>Téléphone:</strong> {reservation.phoneNumber}</p>
                            <p><strong>Email:</strong> {reservation.email}</p>
                            <p><strong>Adresse:</strong> {reservation.address}</p>
                            <p>
                                <strong>Horaires:</strong> 
                                {reservation.timings.map(time => 
                                    moment(time, 'HH:mm').format('HH:mm')
                                ).join(' à ')}
                            </p>
                            {reservation.status === 'approved' && (
                                <a href={`reservation_${reservation._id}.pdf`} download>
                                    <Button type="primary">Télécharger le reçu</Button>
                                </a>
                            )}
                        </Card>
                    </Col>
                ))}
            </Row>
        </Layouts>
    );
};

export default Rendezvous;
