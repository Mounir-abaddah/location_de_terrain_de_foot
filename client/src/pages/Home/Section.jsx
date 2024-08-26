import React from 'react'
import mobile from '../../assets/img/mobile.png'
import website from '../../assets/img/website.png'
import support from '../../assets/img/support.png'
import soccer from '../../assets/img/soccer.png'
import trophy from '../../assets/img/trophy.png'
import community from '../../assets/img/community.png'
import { Link, useNavigate } from 'react-router-dom'

const Section = () => {
    const navigate = useNavigate()
    const onSubmit = ()=>{
        navigate('/login')
    }
  return (
    <>
    <main className="flex-1 bg-gray-100 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-10 md:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Réservez votre terrain de football sur Sportify
            </h1>
            <p className="text-gray-600 text-lg md:text-xl">
              Trouvez facilement un terrain de football près de chez vous et réservez-le en quelques clics.
            </p>
            <p className="text-gray-600 text-lg md:text-xl">
              Avec Sportify, vous pouvez réserver votre terrain de football en toute simplicité. Choisissez la date,
              l'heure et le nombre de joueurs, et c'est tout !
            </p>
            <p className="text-gray-600 text-lg md:text-xl">
              Que vous soyez un joueur occasionnel ou un passionné de football, Sportify vous permet de trouver le
              terrain idéal pour votre prochaine partie.
            </p>
            <p className="text-gray-600 text-lg md:text-xl">
              Rejoignez notre communauté de joueurs et participez à nos événements et tournois.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10">
            <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="start-time" className="block text-sm font-medium text-gray-700 mb-1">
                  Heure de début
                </label>
                <input
                  type="time"
                  id="start-time"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="end-time" className="block text-sm font-medium text-gray-700 mb-1">
                  Heure de fin
                </label>
                <input
                  type="time"
                  id="end-time"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="players" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre de joueurs
                </label>
                <input
                  type="number"
                  id="players"
                  min="2"
                  max="22"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <button
                className="col-span-1 sm:col-span-2 md:col-span-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={onSubmit}
              >
                Réserver
              </button>
            </form>
          </div>
          <p className="text-gray-600 text-sm mt-4 text-center">La durée maximale de réservation est d'une heure.</p>
        </div>
      </main>
      <section className="bg-gray-100 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Réservez depuis votre téléphone ou votre ordinateur
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Avec Sportify, vous pouvez réserver votre terrain de football depuis n'importe où.
            </p>
            <p className="text-gray-600 text-lg md:text-xl">
              Que vous soyez en déplacement ou à la maison, notre application mobile et notre site web vous permettent
              de trouver et de réserver facilement votre terrain.
            </p>
            <p className="text-gray-600 text-lg md:text-xl">
              Rejoignez notre communauté en ligne et participez à nos événements et tournois.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10">
              <div className="flex items-center justify-center mb-4">
                <img src={mobile} alt="Mobile App" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold mb-2">Application mobile(bientôt)</h3>
              <p className="text-gray-600 mb-4">
                Téléchargez notre application mobile pour réserver votre terrain de football en un clin d'oeil.
              </p>
              <button 
              disabled
                className="bg-gray-400 text-white font-medium rounded-md py-2 px-4 inline-block cursor-not-allowed"
              >
                Télécharger
              </button >
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10">
              <div className="flex items-center justify-center mb-4">
                <img src={website} alt="Website" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold mb-2">Site web</h3>
              <p className="text-gray-600 mb-4">
                Visitez notre site web pour réserver votre terrain de football en ligne.
              </p>
              <Link
                to="/login"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md py-2 px-4 inline-block"
              >
                Visiter le site
              </Link>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10">
              <div className="flex items-center justify-center mb-4">
                <img src={support} alt="Support" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold mb-2">Support</h3>
              <p className="text-gray-600 mb-4">
                Notre équipe de support est là pour vous aider à réserver votre terrain de football.
              </p>
              <Link
                to="Contacter_Nous"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md py-2 px-4 inline-block"
              >
                Contacter le support
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Rejoignez notre communauté
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">Faites partie de notre communauté de joueurs passionnés.</p>
            <p className="text-gray-600 text-lg md:text-xl">
              Participez à nos événements et tournois pour rencontrer de nouveaux joueurs et améliorer vos compétences.
            </p>
            <p className="text-gray-600 text-lg md:text-xl">
              Créez votre propre équipe et défiez d'autres équipes sur nos terrains.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10">
              <div className="flex items-center justify-center mb-4">
                <img src={soccer} alt="Team" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold mb-2">Équipes</h3>
              <p className="text-gray-600 mb-4">
                Créez votre propre équipe et défiez d'autres équipes sur nos terrains.
              </p>
              <Link
                to="/login"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md py-2 px-4 inline-block"
              >
                Créer une équipe
              </Link>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10">
              <div className="flex items-center justify-center mb-4">
                <img src={trophy} alt="Tournament" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold mb-2">Tournois</h3>
              <p className="text-gray-600 mb-4">
                Participez à nos tournois pour relever de nouveaux défis et rencontrer d'autres joueurs.
              </p>
              <Link
                to="/login"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md py-2 px-4 inline-block"
              >
                Participer à un tournoi
              </Link>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10">
              <div className="flex items-center justify-center mb-4">
                <img src={community} alt="Community" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold mb-2">Communauté</h3>
              <p className="text-gray-600 mb-4">
                Rejoignez notre communauté en ligne pour discuter, partager et vous améliorer ensemble.
              </p>
              <Link
                to="/login"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md py-2 px-4 inline-block"
              >
                Rejoindre la communauté
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section