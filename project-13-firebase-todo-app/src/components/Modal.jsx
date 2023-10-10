import {createPortal} from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

function Modal({isOpen, onClose, children}) {
  return createPortal(
    <>
      { isOpen && (
          <div className=' absolute top-0 z-30 grid h-screen w-screen backdrop-blur '>
           <div className=' relative z-50 min-h-[200px] min-w-[40%] bg-white m-auto p-3'>
            <div className=' flex justify-end'>
             <AiOutlineClose onClick={onClose} className=' text-2xl hover:bg-orange-600 hover:text-white '/>
            </div>
            {children}
           </div>
          </div>
        )
      }
    </>,
    document.getElementById('modal-root')
  )
}

export default Modal
