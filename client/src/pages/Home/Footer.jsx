import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-indigo-500 font-bold text-xl">
              Sportify
            </Link>
            <p className="text-gray-400 text-sm mt-2">Réservez votre terrain de football en ligne.</p>
          </div>
          <div className="list-footer flex space-x-4 flex-wrap items-center justify-center gap-2">
            <Link to="/" className="text-gray-400 hover:text-gray-300 font-medium">
              Accueil
            </Link>
            <Link to="/about_us" className="text-gray-400 hover:text-gray-300 font-medium">
              AboutUs
            </Link>
            <Link to="/A_Propos_de_Nous" className="text-gray-400 hover:text-gray-300 font-medium">
              À propos de nous
            </Link>
            <Link to="/Contacter_Nous" className="text-gray-400 hover:text-gray-300 font-medium">
              Contactez-nous
            </Link>
          </div>
        </div>
      </footer>
  )
}

export default Footer