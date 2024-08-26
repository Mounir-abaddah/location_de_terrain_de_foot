import './Login.css';
import React, { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Navbare from '../Home/Navbare';
import Footer from '../Home/Footer';

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post('/api/user/login', values);
      if (response.data.success) {
        toast.success(response.data.message);
        toast("Redirection vers la page d'accueil");
        localStorage.setItem("token", response.data.data);
        navigate("/Dashboard");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Quelque chose ne va pas");
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      localStorage.setItem('token', token);
      navigate('/Dashboard');
    }
  }, [navigate]);

  return (
    <>
      <div className="authentification">
        <div className="authentification-form card p-2">
          <div className="login-login mx-auto flex max-w-[400px] flex-col items-center space-y-6 rounded-lg p-8 dark:bg-gray-900">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Bienvenue sur Sportify</h1>
              <p className="text-gray-500 dark:text-gray-400">Connectez-vous pour accéder à votre compte.</p>
            </div>
          </div>
          <Form layout='vertical' onFinish={onFinish}>
            <Form.Item label='Email:' name='email'>
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item label='Password:' name='password'>
              <Input placeholder="Password" type='password' />
            </Form.Item>
            <Button className="primary-button" htmlType='submit'>Se Connecter</Button>
            <h3>ou</h3>
            <a href="http://localhost:5000/auth/google" className="google-button">
              <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google icon" />
              <span>Se Connecter avec Google</span>
            </a>
            <Link to="/register" className='link'>Cliquer ici pour S'inscrire</Link>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;