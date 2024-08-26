import React from 'react';
import { Form, Input, Button, DatePicker,message } from 'antd';
import Navbare from './Navbare';
import Footer from './Footer';
import axios from 'axios'

const { TextArea } = Input;

const ContactUs = () => {
  const [form] = Form.useForm();

  const onFinish = async(values) => {
    try {
      const response = await axios.post('/api/user/submit-message', values);
      if (response.data.success) {
        message.success('Message submitted successfully');
        form.resetFields();
      } else {
        message.error('Failed to submit message');
      }
    } catch (error) {
      message.error('Failed to submit message');
    }
  };

  return (
    <>
      <Navbare />
      <div className="w-full max-w-4xl mx-auto p-6 md:p-10">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Contactez-nous</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Réservez votre terrain de sport en quelques clics.
            </p>
          </div>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Form.Item
                name="name"
                label="Nom"
                rules={[{ required: true, message: 'Veuillez entrer votre nom' }]}
              >
                <Input placeholder="Entrez votre nom" className='rounded-md'/>
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: 'Veuillez entrer votre email' }, { type: 'email', message: 'Veuillez entrer un email valide' }]}
              >
                <Input type="email" placeholder="Entrez votre email" className='rounded-md'/>
              </Form.Item>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Form.Item
                name="phone"
                label="Téléphone"
                rules={[{ required: true, message: 'Veuillez entrer votre numéro de téléphone' }]}
              >
                <Input placeholder="Entrez votre numéro de téléphone" className='rounded-md'/>
              </Form.Item>
              <Form.Item
                name="datetime"
                label="Date et heure"
                rules={[{ required: true, message: 'Veuillez sélectionner une date et une heure' }]}
              >
                <DatePicker
                  showTime
                  format="YYYY-MM-DD HH:mm"
                  placeholder="Sélectionnez la date et l'heure"
                  style={{ width: '100%' }}
                  className='rounded-md'
                />
              </Form.Item>
            </div>
            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: 'Veuillez entrer votre message' }]}
            >
              <TextArea rows={4} placeholder="Entrez votre message" />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType="submit" className="w-full bg-violet-500 text-white">
                Envoyer
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="mt-10 space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Informations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="font-semibold">Horaires d'ouverture</p>
                <p className="text-gray-500 dark:text-gray-400">
                  Lundi - Vendredi: 8h - 20h
                  <br />
                  Samedi - Dimanche: 10h - 18h
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold">Service client</p>
                <p className="text-gray-500 dark:text-gray-400">
                  Téléphone: 0657916587
                  <br />
                  Email: sportify357@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;