import { Segment, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const LoadMore = ({ searchMore }) => (
  <Segment>
    <Button fluid onClick={searchMore}>Plus de résultats</Button>
  </Segment>
);

LoadMore.propTypes = {
  searchMore: PropTypes.func.isRequired,
};

export default LoadMore;
