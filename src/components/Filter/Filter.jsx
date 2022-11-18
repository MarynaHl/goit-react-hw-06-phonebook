import { useDispatch, useSelector } from 'react-redux';

import { filterAction, getFilterValue } from '../../redux/filterSlice';

import { FilterInput } from './Filter.styled.jsx';

export default function Filter() {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const changeFilter = evt => dispatch(filterAction(evt.currentTarget.value));

  return (
    <FilterInput>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={changeFilter} />
    </FilterInput>
  );
}
