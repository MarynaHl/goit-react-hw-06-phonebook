import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';

import Form from '../Form';
import Contacts from '../Contacts';
import Filter from '../Filter';

import { Container, TitleMain, TitleSecond } from './App.styled';

const LS_KEY = 'contacts';

function App() {
  // State. Contacts from localStorage
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem(LS_KEY)) ?? []
  );
  const [filter, setFilter] = useState('');

  // for filter
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const formSubmitHandler = data => {
    // checking name for matches
    const normalizedName = data.name.toLowerCase();
    const isFoundName = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
    // if already exist - show message
    if (isFoundName) {
      toast.error(`${data.name} is already in contacts!`);
      return;
    }
    // if not found, add new contact
    const newData = { id: nanoid(5), ...data };
    setContacts(prevState => [...prevState, newData]);
    toast.success('Successfully added!');
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  // contacts were updated!
  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(contacts));
    if (contacts.length === 0) {
      toast.error('Phonebook is empty!');
    }
  }, [contacts]);

  return (
    <Container>
      <Toaster
        toastOptions={{
          style: {
            border: '1px solid #713200',
            padding: '16px',
          },
        }}
      />
      <TitleMain>Phonebook</TitleMain>
      <Form onSubmit={formSubmitHandler} />
      <TitleSecond>Contacts</TitleSecond>
      <Filter value={filter} onChange={changeFilter} />
      <Contacts arr={filteredContacts} onDelContact={deleteContact} />
    </Container>
  );
}

export default App;
