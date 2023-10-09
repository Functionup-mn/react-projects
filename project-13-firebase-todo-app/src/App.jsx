import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BsSearch } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase"; 
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDiscloser from "./hooks/useDiscloser";

function App() {
  const [contacts, setContacts] = useState([]);
  const {isOpen, onClose, onOpen} = useDiscloser()

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  return (
    <>
    <div className=" max-w-[370px] mx-auto px-4">
      <Navbar />
      <div className=" flex relative items-center mb-8">
        <BsSearch className=" text-white text-2xl absolute m-2" />
        <input
          type="text"
          className=" bg-transparent flex-grow rounded-md border-white text-white border-[1px] h-[40px] px-10"
          placeholder="Seacrch Contact"
        />

        <div className=" text-white text-5xl ml-2 cursor-pointer" onClick={onOpen}>
          <AiFillPlusCircle />
        </div>
      </div>
      <div>
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
   <AddAndUpdateContact isOpen={isOpen} onClose={onClose}/>
    </>
  );
}

export default App;
