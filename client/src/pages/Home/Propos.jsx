import React from 'react'
import Navbare from './Navbare';
import Footer from './Footer';
import { RxAvatar } from "react-icons/rx";



const Propos = () => {
    return (
        <>
        <Navbare />
        <div className="w-full max-w-6xl mx-auto py-12 md:py-20 px-4 md:px-6">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold">À propos de Sportify</h1>
              <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                Sportify est une plateforme innovante qui permet de réserver facilement des terrains de sport pour une heure
                maximum. Nous sommes passionnés par le sport et notre mission est de faciliter l'accès à des installations
                de qualité pour tous.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold">Nos valeurs</h2>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-primary"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                    <div>
                      <h3 className="font-semibold">Accessibilité</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Nous croyons que le sport doit être accessible à tous, quel que soit votre niveau ou votre budget.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-primary"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <circle cx="12" cy="12" r="4"></circle>
                    </svg>
                    <div>
                      <h3 className="font-semibold">Efficacité</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Avec Sportify, réservez vos terrains en quelques clics et profitez d'une heure de jeu sans stress.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-primary"
                    >
                      <path d="M7 10v12"></path>
                      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                    </svg>
                    <div>
                      <h3 className="font-semibold">Passion</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Nous sommes une équipe de passionnés de sport qui met tout en œuvre pour vous offrir la meilleure
                        expérience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Notre équipe</h2>
                <div className="mt-4 grid gap-6">
                  <div className="flex items-center gap-4">
                      <RxAvatar />
                    <div>
                      <h3 className="font-semibold">Abaddah Mounir</h3>
                      <p className="text-gray-500 dark:text-gray-400">Développeur principal</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                      <RxAvatar />
                    <div>
                      <h3 className="font-semibold">Ramim Hassan</h3>
                      <p className="text-gray-500 dark:text-gray-400">Développeur principal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Pourquoi choisir Sportify ?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-primary"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <div>
                    <h3 className="font-semibold">Réservation rapide</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Réservez votre terrain en quelques clics seulement, sans avoir à attendre.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-primary"
                  >
                    <line x1="10" x2="14" y1="2" y2="2"></line>
                    <line x1="12" x2="15" y1="14" y2="11"></line>
                    <circle cx="12" cy="14" r="8"></circle>
                  </svg>
                  <div>
                    <h3 className="font-semibold">Créneau d'une heure</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Profitez d'un créneau d'une heure maximum pour jouer en toute tranquillité.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-primary"
                  >
                    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                  </svg>
                  <div>
                    <h3 className="font-semibold">Tarifs abordables</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Nos tarifs sont conçus pour être accessibles à tous les budgets.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-primary"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <div>
                    <h3 className="font-semibold">Disponibilité en temps réel</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Consultez la disponibilité des terrains en temps réel et réservez sans attendre.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        </>
        
      );
    }
    
   
export default Propos