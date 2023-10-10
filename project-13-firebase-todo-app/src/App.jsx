import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BsSearch } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDiscloser from "./hooks/useDiscloser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from "./components/NotFoundContact";


function App() {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDiscloser();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {      // we can directly display the items through onsnapshot without refreshing
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContats = (e) => {
      const value = e.target.value

      const contactRef = collection(db, 'contacts')

      onSnapshot(contactRef, (snapshot) => {
        const contactLists = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        });
      
        const filteredContacts = contactLists.filter(contact => 
          contact.name.toLowerCase().includes(value.toLowerCase())
  )
       setContacts(filteredContacts)
       return filteredContacts
}) }

  return (
    <>
      <div className=" max-w-[370px] mx-auto px-4">
        <Navbar />
        <div className=" flex relative items-center mb-8">
          <BsSearch className=" text-white text-2xl absolute m-2" />
          <input
            onChange={filterContats}
            type="text"
            className=" bg-transparent flex-grow rounded-md border-white text-white border-[1px] h-[40px] px-10"
            placeholder="Seacrch Contact"
          />

          <div
            className=" text-white text-5xl ml-2 cursor-pointer"
            onClick={onOpen}
          >
            <AiFillPlusCircle className=" hover:bg-orange-500" />
          </div>
        </div>
        <div>
          {contacts.length <= 0 ? <NotFoundContact/> : contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
      <ToastContainer/>
    </>
  );
}

export default App;
