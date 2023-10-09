import { addDoc, collection } from 'firebase/firestore'
import Modal from './Modal'
import { Form, Formik, Field } from 'formik'
import { db } from '../config/firebase'

function AddAndUpdateContact({isOpen, onClose}) {

    const addContact = async(contact) =>{
        try {
            const contactRef = collection(db, 'contacts'); // db-> firstoreDatabese, 'contacts' -> collection name
              await addDoc(contactRef, contact)
        } catch (error) {
            console.log(error);
        }
       } 
   
  return (
    <div>
       <Modal isOpen={isOpen} onClose={onClose}>
       <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          onSubmit={(values) =>{
            // console.log(values);
            addContact(values)
          }}
       >
        <Form className=' flex flex-col gap-4'>
            <div className=' flex flex-col'>
                <label htmlFor="name">Name</label>
                <Field type='name' name='name' placeholder='Enter Your Name' className=' h-10 border border-black px-2' />
            </div>

            <div className=' flex flex-col gap-2'>
                <label htmlFor="name">Email</label>
                <Field type='email' name='email' placeholder='Enter Your Email' className=' h-10 border border-black px-2' />
            </div>
            <button type='submit' className=' bg-orange-600 py-2 px-4 rounded-lg self-end hover:bg-orange-400'>Add Contact</button>
                 
        </Form>
       </Formik>
    </Modal>
    </div>
  )
}

export default AddAndUpdateContact
