import React, { useEffect, useState } from 'react';
import Layout from '../../Components/Layouts/Layouts';
import axios from 'axios';
import { Table, message, Button } from 'antd';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';


const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { user } = useSelector(state => state.user);

  useEffect(() => {
    if (user && user.isAdmin) {
      fetchMessages();
    }
  }, [user]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('/api/user/messages', {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      if (response.data.success) {
        setMessages(response.data.data);
      } else {
        toast.error('Failed to fetch messages');
      }
    } catch (error) {
      toast.error('Failed to fetch messages');
    }
  };

  const handleDeleteAllMessages = async () => {
    try {
      const response = await axios.delete('/api/user/supprimer-all-messages', {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      if (response.data.success) {
        toast.success('Tous les messages ont été supprimés avec succès');
        setMessages([]); 
      } else {
        toast.error('Échec de la suppression des messages');
      }
    } catch (error) {
      toast.error('Erreur lors de la suppression des messages');
    }
  };

  const columns = [
    {
      title: 'Nom',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Téléphone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Date et Heure',
      dataIndex: 'datetime',
      key: 'datetime',
      render: (text) => new Date(text).toLocaleString(),
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
    },
  ];

  return (
    <Layout>
      {user && user.isAdmin ? (
        <div>
          <h1 className='text-2xl font-bold mb-4'>Messages des Clients</h1>
          <Button type="primary" danger onClick={handleDeleteAllMessages} style={{ marginBottom: '16px' }}>
            Supprimer tous les messages
          </Button>
          <Table columns={columns} dataSource={messages} rowKey='_id' />
        </div>
      ) : (
        <div>Accès refusé</div>
      )}
    </Layout>
  );
}

export default Messages;
