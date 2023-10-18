import React from 'react'
import Perfil from '../../assets/user.png'
import Carrinho from '../../assets/shopping-cart.png'
import LogoFarm from '../../assets/logo_farmacia.png'
import './navbar.css'


function Navbar() {



  return (
    <>
      <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <div><img src={LogoFarm} alt="" className='LogoFarmacia' /></div>

          <div className=''><label htmlFor="Procurar"><input
                type="text"
                placeholder="Procurar"
                name='procurar'
                className="border-2 border-slate-700 p-2 LabelProcurar"
              /></label>
            </div>

          <div className='flex gap-4 '>
            <div className='hover:underline'>  Categorias</div>
            <div className='hover:underline'>Cadastrar Categoria</div>
            <div className='hover:underline'><img src={Perfil} alt="" className='IconeNavBar' /></div>
            <div className='hover:underline'><img src={Carrinho} alt="" className='IconeNavBar' /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar