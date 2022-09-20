import { useEffect } from "react";
import { Message as SemanticUIMessage } from "semantic-ui-react";
import PropTypes from "prop-types";

const Message = ({ message, isErrorMessage, setIsShownMessage }) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      setIsShownMessage(false);
    }, 3000);

    const maFonctionDeNettoyage = () => {
      clearTimeout(timer);
    };

    return maFonctionDeNettoyage;
  }, [message, isErrorMessage, setIsShownMessage]);
  return (
    <SemanticUIMessage negative={isErrorMessage}>{message}</SemanticUIMessage>
  );
};
Message.defaultProps = {
  isErrorMessage: false,
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  isErrorMessage: PropTypes.bool,
  setIsShownMessage: PropTypes.func.isRequired,
};

export default Message;
