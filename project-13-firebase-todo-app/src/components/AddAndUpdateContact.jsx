import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import Modal from './Modal'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import { db } from '../config/firebase'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required('Name is Required'),
  email: Yup.string().email('Invalid email').required('Email is Required'),
});

function AddAndUpdateContact({isOpen, onClose, isUpdate, contact}) {

    const addContact = async(contact) =>{
        try {
            const contactRef = collection(db, 'contacts'); // db-> firstoreDatabese, 'contacts' -> collection name
              await addDoc(contactRef, contact)
              onClose()
              toast.success('Conatact Added Successfully')
        } catch (error) {
            console.log(error);
        }
       }
       
    const updateContact = async(contact, id) => {
        try {
              const contactRef = doc(db, 'contacts', id);
              await updateDoc(contactRef, contact);
             onClose() 
             toast.success('Conatact Updated Successfully')
              
        } catch (error) {
          console.log(error);
        }
    }   
   
  return (
    <div>
       <Modal isOpen={isOpen} onClose={onClose}>
       <Formik
          validationSchema={contactSchemaValidation}
          initialValues={ isUpdate ? {
            name: contact.name,
            email: contact.email,
          } : {
            name: "",
            email: "",
          }}
          onSubmit={(values) =>{
            // console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values)
          }}
       >
        <Form className=' flex flex-col gap-4'>
            <div className=' flex flex-col'>
                <label htmlFor="name">Name</label>
                <Field name='name' placeholder='Enter Your Name' className=' h-10 border border-black px-2'/>
                <div className='text-red-500 text-xs'>
                  <ErrorMessage name='name'/>
                </div>
            </div>

            <div className=' flex flex-col gap-2'>
                <label htmlFor="name">Email</label>
                <Field name='email' placeholder='Enter Your Email' className=' h-10 border border-black px-2' />
                <div className='text-red-500 text-xs'>
                  <ErrorMessage name='email'/>
                </div>
            </div>
            <button type='submit' className=' bg-orange-600 py-2 px-4 rounded-lg self-end hover:bg-orange-400'> {isUpdate ? 'Update': 'Add'} Contact</button>
                 
        </Form>
       </Formik>
    </Modal>
    </div>
  )
}

export default AddAndUpdateContact
