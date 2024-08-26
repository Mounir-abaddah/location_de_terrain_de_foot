import React from 'react'
import Navbare from './Navbare'
import Footer from './Footer'

const AboutUs = () => {
  return (
    <>
    <Navbare />
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">À propos de Sportify</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl lg:text-2xl">
            Sportify est une plateforme innovante qui facilite la réservation de terrains de sport. Nous sommes
            déterminés à offrir une expérience de réservation fluide et accessible à tous les amateurs de sport.
          </p>
        </div>
        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Nos services</h2>
          <ul className="space-y-2 md:space-y-3 lg:space-y-4">
            <li className="flex items-start gap-3">
              <CheckIcon className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">Réservation de terrains</h3>
                <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg lg:text-xl">
                  Réservez facilement des terrains de sport pour une heure maximum.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">Paiement sur place</h3>
                <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg lg:text-xl">
                  Payez en espèces directement sur le terrain.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 md:mt-16 lg:mt-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 lg:mb-8">Pourquoi choisir Sportify ?</h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 md:p-6 lg:p-8 space-y-3 md:space-y-4 lg:space-y-5">
            <ClockIcon className="w-8 h-8 text-primary" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">Réservation rapide</h3>
            <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg lg:text-xl">
              Réservez un terrain en quelques clics seulement.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 md:p-6 lg:p-8 space-y-3 md:space-y-4 lg:space-y-5">
            <WalletIcon className="w-8 h-8 text-primary" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">Paiement flexible</h3>
            <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg lg:text-xl">
              Payez en espèces directement sur le terrain.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 md:p-6 lg:p-8 space-y-3 md:space-y-4 lg:space-y-5">
            <MapPinIcon className="w-8 h-8 text-primary" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">Emplacements pratiques</h3>
            <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg lg:text-xl">
              Trouvez facilement des terrains de sport à proximité.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 md:p-6 lg:p-8 space-y-3 md:space-y-4 lg:space-y-5">
            <UsersIcon className="w-8 h-8 text-primary" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">Communauté active</h3>
            <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg lg:text-xl">
              Rejoignez notre communauté d'amateurs de sport.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function WalletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}

export default AboutUs