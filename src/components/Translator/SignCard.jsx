import PropTypes from 'prop-types';
import { getSignImagePath, getCommonSignPath } from '../../utils/signUtils';

function SignCard({ char, index, isCommonSign }) {
  const signImage = isCommonSign ? getCommonSignPath(char) : getSignImagePath(char);
  
  if (!signImage) {
    return null;
  }
  
  return (
    <div key={`${char}-${index}`} className="sign-card">
      <img 
        src={signImage} 
        alt={`Sign for ${char}`} 
        className="sign-image"
      />
      <span className="char-label">{char}</span>
    </div>
  );
}

SignCard.propTypes = {
  char: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isCommonSign: PropTypes.bool.isRequired
};

export default SignCard;