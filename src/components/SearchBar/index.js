import PropTypes from "prop-types";
import { Segment, Form, Input } from "semantic-ui-react";

const SearchBar = ({ searchValue, setSearchValue, search, isLoading }) => (
  <Segment>
    <Form
      onSubmit={(event) => {
        search();
      }}
    >
      <Form.Field>
        {}
        <Input
          loading={isLoading}
          placeholder="Veuillez rentrer un nom de Repo..."
          icon="search"
          iconPosition="left"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
      </Form.Field>
    </Form>
  </Segment>
);

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default SearchBar;
