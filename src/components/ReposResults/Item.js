import PropTypes from 'prop-types';

import { Card, Image } from 'semantic-ui-react';

const Item = ({
  name, description, image, url, owner,
}) => (
  <Card href={url} target="_blank">
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header style={{ wordBreak: 'break-all' }}>{name}</Card.Header>
      <Card.Meta>
        <span className="date">{owner}</span>
      </Card.Meta>
      <Card.Description style={{ wordBreak: 'break-all' }}>
        {description}
      </Card.Description>
    </Card.Content>
  </Card>
);

Item.defaultProps = {
  description: 'Ce repo n\'a pas de description',
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

export default Item;
