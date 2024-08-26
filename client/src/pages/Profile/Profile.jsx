import React, { useEffect, useState } from 'react';
import Layout from '../../Components/Layouts/Layouts';
import { Input, Form, Button, Row, Col, message } from 'antd';
import axios from 'axios';
import './Profile.css'

const Profile = () => {
  const [form] = Form.useForm();
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch user information by ID (you may need to adjust the endpoint and user ID logic)
    const fetchUserData = async () => {
      try {
        const response = await axios.post('/api/user/get-user-info-by-id', { userId: 'user-id-from-context-or-props' }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (response.data.success) {
          setUserData(response.data.data);
          form.setFieldsValue(response.data.data);
        } else {
          message.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data', error);
        message.error('An error occurred while fetching user data');
      }
    };

    fetchUserData();
  }, [form]);

  const onFinish = (values) => {
    console.log('Form Values:', values);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Mon Profil</h1>
      <Form layout="vertical" form={form} className="space-y-4" onFinish={onFinish}>
        <Row gutter={16} className='Profile'>
          <Col span={12}>
            <Form.Item
              label="Nom"
              name="name"
            >
              <Input disabled={!isEditing} className="mt-1 block w-full InputProfile" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Email"
              name="email"
            >
              <Input disabled={!isEditing} className="mt-1 block w-full InputeProfile" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Tel"
              name="tel"
            >
              <Input disabled={!isEditing} className="mt-1 block w-full InputProfile" />
            </Form.Item>
          </Col>
        </Row>
        {/* <div className="flex justify-end">
          {isEditing ? (
            <>
              <Button type="primary" htmlType="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Enregistrer</Button>
              <Button onClick={toggleEdit} className="ml-2 px-4 py-2">Annuler</Button>
            </>
          ) : (
            <Button onClick={toggleEdit} className="px-4 py-2 bg-blue-600 text-white rounded-md">Modifier</Button>
          )}
        </div> */}
      </Form>
    </Layout>
  );
};

export default Profile;
