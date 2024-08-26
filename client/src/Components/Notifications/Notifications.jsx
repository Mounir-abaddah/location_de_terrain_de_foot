import React, { useEffect, useState } from 'react';
import './Notifications.css';
import Layouts from '../Layouts/Layouts';
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../../redux/alertsSlice';
import axios from 'axios';
import toast from 'react-hot-toast';
import moment from 'moment';

const Notifications = () => {
    document.title = "Notification";
    const [reservations, setReservations] = useState([]);
    const dispatch = useDispatch();

    const deleteAll = async () => {
        try {
            dispatch(showLoading());
            const response = await axios.delete('/api/user/delete-all-reservations', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            dispatch(hideLoading());
            if (response.data.success) {
                toast.success(response.data.message);
                setReservations([]);    
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            toast.error('Quelque chose a mal tourné.');
        }
    };

    const fetchReservations = async () => {
        try {
            dispatch(showLoading());
            const response = await axios.get('/api/user/reservations', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            dispatch(hideLoading());
            if (response.data.success) {    
                setReservations(response.data.data);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            toast.error('Quelque chose a mal tourné.');
        }
    };

    useEffect(() => {
        fetchReservations();
    }, []);

    const sortedReservations = reservations.sort((a, b) => {
        const aStart = moment(a.timings[0], 'HH:mm');
        const bStart = moment(b.timings[0], 'HH:mm');
        return aStart - bStart;
    });

    return (
        <Layouts>
            <h1 className='page-title'>Notifications</h1>
            <div className="d-flex justify-content-end">
                <button className="text-notification" onClick={deleteAll}>
                    Supprimer tout
                </button>
            </div>
            <div className="class">
                <table className="notification-table">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>NTele</th>
                            <th>Address</th>
                            <th>Timing</th>
                            <th>Deleted</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedReservations.map((reservation) => (
                            <tr key={reservation._id}>
                                <td>{reservation.Name}</td>
                                <td>{reservation.email}</td>
                                <td>{reservation.phoneNumber}</td>
                                <td>{reservation.address}</td>
                                <td>{reservation.timings.map(time => moment(time, 'HH:mm').format('HH:mm')).join(' à ')}</td>
                                <td>{reservation.deleted ? 'Yes' : 'No'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layouts>
    );
};

export default Notifications;
