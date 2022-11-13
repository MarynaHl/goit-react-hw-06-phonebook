import PropTypes from 'prop-types';

import { FilterInput } from './Filter.styled.jsx';

const Filter = ({ value, onChange }) => (
  <FilterInput>
    <p>Find contacts by name</p>
    <input type="text" value={value} onChange={onChange} />
  </FilterInput>
);
export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  // onChange: PropTypes.func.isRequired,
};
