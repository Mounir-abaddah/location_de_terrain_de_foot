import React, { useEffect, useState } from 'react';
import './UserList.css';
import Layout from '../Layouts/Layouts';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../../redux/alertsSlice';
import axios from 'axios';
import { Tabs, Table, Button } from 'antd';
import toast from 'react-hot-toast';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  const getUsersData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get('/api/admin/get-all-users', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      dispatch(hideLoading());
      if (response.data.success) {
        setUsers(response.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Erreur lors de la récupération des utilisateurs");
    }
  };

  const handleBlockUser = async (userId) => {
    try {
        dispatch(showLoading());
        const response = await axios.delete(`/api/admin/delete-user/${userId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        dispatch(hideLoading());
        if (response.data.success) {
            toast.success(response.data.message);
            setUsers(users.filter(user => user._id !== userId)); // Remove user from the state
        } else {
            toast.error(response.data.message);
        }
    } catch (error) {
        dispatch(hideLoading());
        toast.error("Erreur lors du blocage de l'utilisateur");
    }
};

  useEffect(() => {
    getUsersData();
  }, []);

  const columns = [
    { title: 'Nom', dataIndex: 'name' },
    { title: 'Email', dataIndex: 'email' },
    { title: 'Created at', dataIndex: 'createdAt' },
    { 
      title: 'Actions', 
      dataIndex: 'actions', 
      render: (text, record) => (
        <Button onClick={() => handleBlockUser(record._id)} type="primary" danger>
          Block
        </Button>
      )
    },
  ];

  return (
    <Layout>
      <h1 className='users font-bold text-2xl'>Liste D'utilisateurs:</h1>
      <Tabs>
        <Tabs.TabPane key="1">
          <Table 
            columns={columns} 
            dataSource={users} 
            rowKey="_id"
            scroll={{ x: '100%' }} // Permet le défilement horizontal
          />
        </Tabs.TabPane>
      </Tabs>
    </Layout>
  );
};
export default UserList;
