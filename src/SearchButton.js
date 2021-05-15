import { FaSearchengin } from 'react-icons/fa';

import './SearchButton.css';

const SearchButton = props => {
  return (
    <button data-testid={props.testId} onClick={props.onClick}>
      <FaSearchengin />
    </button>
  );
};

export default SearchButton;
