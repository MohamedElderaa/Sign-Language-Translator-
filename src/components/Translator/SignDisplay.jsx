import PropTypes from 'prop-types';
import Word from './Word';

function SignDisplay({ text }) {
  // Split text into words and filter out empty strings
  const words = text.split(' ').filter(word => word.length > 0);

  return (
    <div className="translation-container">
      <h2 className="translation-title">Sign Language Translation</h2>
      <div className="words-container">
        {words.map((word, index) => (
          <Word key={`word-${index}`} word={word} />
        ))}
      </div>
    </div>
  );
}

SignDisplay.propTypes = {
  text: PropTypes.string.isRequired
};

export default SignDisplay;