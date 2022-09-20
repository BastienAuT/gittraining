import PropTypes from 'prop-types';

import { Card } from 'semantic-ui-react';

import Item from './Item';

const ReposResults = ({ repos }) => (
  <Card.Group itemsPerRow={3} stackable>
    {
      repos.map(
        (repo) => <Item key={repo.id} {...repo} />,
      )
    }
  </Card.Group>
);

ReposResults.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ReposResults;
