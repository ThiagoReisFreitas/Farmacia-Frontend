import React from 'react';
import homeLogo from '../../assets/Home.png'
import './Home.css';

function Home() {
    return (
        <>
        <div className="bg-blue-farm flex justify-center">
          <div className='container grid grid-cols-2'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Aqui você enconta Medicamentos e Cosméticos!</p>
  
              <div className="flex justify-around gap-4">
      
              <button className='rounded bg-indigo-800 text-white py-2 px-4'>Cadastrar produtos</button>
            </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
        
      </>
    );
}

export default Home;