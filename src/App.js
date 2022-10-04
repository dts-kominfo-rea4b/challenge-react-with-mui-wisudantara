import './App.css';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import Contact from './components/Contact';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
import { useState } from 'react';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setContacts] = useState(contactsJSON);

  const clickHandler = (newContact) => {
    setContacts([...contacts, newContact]);
  }

  return (
    <div className="App">
      <Header />
      <div className="grid-container">
      <div>
        <ContactForm clickHandler={clickHandler} />
      </div>
      <div>
        {contacts.map((data, index) => (
          <Contact data={data} key={index} />
        ))}
        
      </div>
      </div>
      
    </div>
  );
};

export default App;
