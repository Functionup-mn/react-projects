import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleLine } from 'react-icons/ri'
import { db } from '../config/firebase'
import useDiscloser from '../hooks/useDiscloser'
import AddAndUpdateContact from './AddAndUpdateContact'
import {toast} from 'react-toastify'

function ContactCard({contact}) {

    const {isOpen, onClose, onOpen} = useDiscloser() // custom hook-> self made

    const deleteContact = async(id) => {
        try {   
         await deleteDoc((doc(db, 'contacts', id))) // to write doc is very important. In this method i am using together
         toast.success('Conatact Deleted Successfully')
        } catch (error) {
            console.log(error);
        }
         }
  return (
    <>
    <div key={contact.id}
     className=' text-black flex items-center justify-between p-2 bg-yellow-300 rounded-lg mt-3'>
        <div className='flex gap-1'>
            <HiOutlineUserCircle className=' text-4xl text-orange-600' />
            <div className=' flex flex-col ml-2'>
              <h2 className='font-medium'>{contact.name}</h2>
              <p className=' text-sm'>{contact.email}</p>
            </div>
        </div>
            <div className='flex text-3xl'>
              <RiEditCircleLine onClick={onOpen} className=' cursor-pointer'/>
              <IoMdTrash onClick={()=>deleteContact(contact.id)} className=' text-orange-600 cursor-pointer'/>
            </div>
          </div>
          <AddAndUpdateContact isOpen={isOpen} onClose={onClose} isUpdate contact={contact}/>
          </>
  )
}

export default ContactCard
