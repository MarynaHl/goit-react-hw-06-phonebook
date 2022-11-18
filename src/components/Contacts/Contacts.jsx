import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { delContactAction, getContactsArr } from '../../redux/contactsSlice';

import { getFilterValue } from '../../redux/filterSlice';

import {
  ContactsList,
  ContactsListItem,
  UserName,
  DeleteBtn,
} from './Contacts.styled';

export default function Contacts() {
  const contacts = useSelector(getContactsArr);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  // for filter
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const deleteContact = id => {
    dispatch(delContactAction(id));
    toast.success('Successfully deleted!');
  };

  return (
    <ContactsList>
      {filteredContacts.map(({ name, number, id }) => (
        <ContactsListItem key={id}>
          <p>
            <UserName>{name}: </UserName>
            {number}
          </p>
          <DeleteBtn onClick={() => deleteContact(id)}>delete</DeleteBtn>
        </ContactsListItem>
      ))}
    </ContactsList>
  );
}
