import React from 'react'
import Layout from '../../Components/Layouts/Layouts'
import { Link } from 'react-router-dom'
import './Acceuil.css'

const Acceuil = () => {
  return (
    <Layout>
      <h1 className='text-2xl font-bold mb-4'>Acceuil:</h1>
      <hr className='mb-4' />
      <div className="acceuil-container flex justify-between align-center flex-wrap gap-7">
        <div className="cards-1 flex flex-col gap-7 bg-slate-800 text-white">
            <h2>Dernier rendez-vous</h2>
            <p>Consultez les derniers rendez-vous programmés avec vos clients.</p>
            <Link href="#" className="text-blue-500 hover:underline" prefetch={false}>
                Voir les rendez-vous
            </Link>
        </div>
        <div className="cards-2 flex flex-col gap-7 bg-slate-800 text-white">
            <h2>Dernières postulations</h2>
            <p>Consultez les dernières postulations de terrain effectuées par vos clients..</p>
            <Link href="#" className="text-blue-500 hover:underline" prefetch={false}>
            Voir les postulations
            </Link>
        </div>
        <div className="cards-3 flex flex-col gap-7 bg-slate-800 text-white">
            <h2>Profil</h2>
            <p>Accédez à votre profil pour gérer vos informations personnelles.</p>
            <Link href="#" className="text-blue-500 hover:underline" prefetch={false}>
            Voir le profil
            </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Acceuil