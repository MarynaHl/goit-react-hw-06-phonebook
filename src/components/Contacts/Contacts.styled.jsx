import styled from 'styled-components';

export const ContactsList = styled.ul``;

export const ContactsListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  cursor: context-menu;
  border: 2px solid #fff;
  transition: border-color 300ms ease-out;

  &:hover {
    border-color: #ccc;
  }
`;

export const UserName = styled.span`
  font-weight: 700;
`;

export const DeleteBtn = styled.button`
  width: 100px;
  background-color: #fff;
  border: 2px solid #999;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 300ms ease-out;
  &:hover {
    background-color: #fbb;
  }
`;
