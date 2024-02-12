import React from 'react'
import Form from './Form'
import { ChatContext } from '../context/ChatProvider'

const Chats = () => {

    const {mensajes, usuario} = React.useContext(ChatContext)
    const refZoneChat = React.useRef(null)

    React.useEffect(() =>{
        refZoneChat.current.scrollTop = refZoneChat.current.scrollHeight
    }, [mensajes])

    return (
        <div className='mt-3 px-2'
        style={{height: '75vh', overflowY: 'scroll'}}
        ref={refZoneChat}
        >
            {
                mensajes.map((item, index) => (
                    usuario.uid === item.uid ? (
                        <div className='d-flex justify-content-end mb-2' key={index}>
                            <span style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#007bff', color: '#fff', borderRadius: '10px', padding: '5px' }}>
                                {item.texto}
                            </span>
                        </div>
                    ) : (
                        <div className='d-flex justify-content-start mb-2' key={index}>
                            <span style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#6c757d', color: '#fff', borderRadius: '10px', padding: '5px' }}>
                            {item.texto}
                            </span>
                        </div>
                    )
                ))
            }
            <Form />
        </div>
      )
}

export default Chats