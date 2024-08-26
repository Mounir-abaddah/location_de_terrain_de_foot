import React, { useEffect, useState } from 'react';
import Layout from '../../Layouts/Layouts';
import axios from 'axios';
import { Card, Row, Col, message } from 'antd';
import './AcceuilAdmin.css'

const AcceuilAdmin = () => {
    const [userCount, setUserCount] = useState(0);
    const [reservationCount, setReservationCount] = useState(0);
    const [messageCount, setMessageCount] = useState(0);

    useEffect(() => {
        fetchCounts();
    }, []);

    const fetchCounts = async () => {
        try {
            const userResponse = await axios.get('/api/user/user-count', {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });
            const reservationResponse = await axios.get('/api/user/reservation-count', {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });
            const messageResponse = await axios.get('/api/user/message-count', {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });

            if (userResponse.data.success) {
                setUserCount(userResponse.data.count);
            } else {
                message.error('Failed to fetch user count');
            }

            if (reservationResponse.data.success) {
                setReservationCount(reservationResponse.data.count);
            } else {
                message.error('Failed to fetch reservation count');
            }

            if (messageResponse.data.success) {
                setMessageCount(messageResponse.data.count);
            } else {
                message.error('Failed to fetch message count');
            }
        } catch (error) {
            message.error('Failed to fetch counts');
        }
    };

    return (
        <Layout>
            <h1 className='text-2xl font-bold mb-4'>Acceuil Admin</h1>
            <Row gutter={16} className='admine-acceuil'>
                <Col span={8}>
                    <Card title="Utilisateurs Enregistrés" bordered={false}>
                        {userCount}
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Réservations" bordered={false}>
                        {reservationCount}
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Messages" bordered={false}>
                        {messageCount}
                    </Card>
                </Col>
            </Row>
        </Layout>
    );
}

export default AcceuilAdmin;
