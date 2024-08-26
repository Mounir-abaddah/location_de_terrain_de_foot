import './Register.css';
import React, { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Home/Footer';

const Register = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const response = await axios.post('/api/user/register', values);
            if (response.data.success) {
                toast.success(response.data.message);
                navigate('/login');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error('Une erreur est survenue lors de l\'enregistrement');
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
                <div className="authentification-form-register card p-2">
                    <div className="register-container mx-auto flex max-w-[400px] flex-col items-center space-y-6 rounded-lg p-8">
                        <div className="space-y-2 text-center">
                            <h1 className="text-3xl font-bold">Bienvenue sur Sportify</h1>
                            <p className="text-gray-500 dark:text-gray-400">Connectez-vous pour accéder à votre compte.</p>
                        </div>
                    </div>
                    <Form layout='vertical' onFinish={onFinish}>
                        <Form.Item label='Nom:' name='name' rules={[{ required: true, message: 'Veuillez entrer votre nom' }]}>
                            <Input placeholder="Nom" />
                        </Form.Item>
                        <Form.Item label='Email:' name='email' rules={[{ required: true, type: 'email', message: 'Veuillez entrer un email valide' }]}>
                            <Input placeholder="Email" />
                        </Form.Item>
                        <Form.Item label='Tel:' name='tel' rules={[
                            { required: true, message: 'Veuillez entrer votre numéro de téléphone' },
                            { max: 10, message: 'Le numéro de téléphone ne peut pas dépasser 10 caractères' }
                        ]}>
                            <Input placeholder="Téléphone" maxLength={10} />
                        </Form.Item>
                        <Form.Item label='Mot de passe:' name='password' rules={[{ required: true, message: 'Veuillez entrer votre mot de passe' }]}>
                            <Input placeholder="Mot de passe" type='password' />
                        </Form.Item>
                        <Button className="primary-button" htmlType='submit'>S'inscrire</Button>
                        <h3>ou</h3>
                        <a href="http://localhost:5000/auth/google" className="google-button">
                            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google icon" />
                            <span>S'inscrire avec Google</span>
                        </a>
                        <Link to="/login" className='link'>Cliquer ici pour Se Connecter</Link>
                    </Form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Register;
