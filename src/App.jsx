import React from 'react'
import { ChatContext } from './context/ChatProvider'
import Navbar from './components/Navbar'
import Chats from './components/Chats'

const App = () => {
    const {usuario} = React.useContext(ChatContext)
  return usuario !== null ? (
    <div>
        <Navbar />
        {
            usuario.estado ? (
                <Chats />
            ) : (
                <div>
                    <h1 className="text-center my-5">Bienvenido a  la sala de chat</h1>
                    <p className='lead text-center'>Inicia sesión para unirte a nuestra comunidad.</p>
                </div>
            )
        }
    </div>
  ) : (
    <div>
        Cargando...
    </div>
  )
}

export default App