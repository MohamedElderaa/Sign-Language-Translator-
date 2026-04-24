import PropTypes from 'prop-types';
import SignCard from './SignCard';
import { hasCommonSign, getCommonSignPath } from '../../utils/signUtils';

function Word({ word }) {
  // Check if the word has a common sign
  const commonSign = getCommonSignPath(word);

  return (
    <div className="word-container">
      <div className="signs-row">
        {commonSign ? (
          // If it's a common word, show single sign
          <SignCard char={word} index={0} isCommonSign={true} />
        ) : (
          // Otherwise spell it out letter by letter
          word.split('').map((char, index) => (
            <SignCard key={`${char}-${index}`} char={char} index={index} isCommonSign={false} />
          ))
        )}
      </div>
      <div className="word-text">{word}</div>
    </div>
  );
}

Word.propTypes = {
  word: PropTypes.string.isRequired
};

export default Word;