import styled from 'styled-components';

export const FormTag = styled.form`
  border: 2px solid #999;
  border-radius: 5px;
  margin-bottom: 30px;
  padding: 10px;
`;

export const InputField = styled.input`
  width: 300px;
  margin-bottom: 10px;
`;

export const FormBtn = styled.button`
  width: 200px;
  height: 30px;
  margin-top: 20px;
  background-color: #fff;
  border: 2px solid #999;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 300ms ease-out;
  &:hover {
    background-color: #eee;
  }
`;
