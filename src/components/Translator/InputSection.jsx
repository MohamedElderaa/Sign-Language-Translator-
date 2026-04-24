import PropTypes from 'prop-types';

function InputSection({ value, onChange, onConvert, onKeyPress }) {
  return (
    <div className="input-container">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={onKeyPress}
        placeholder="Enter text to convert..."
        className="text-input"
      />
      <button 
        onClick={onConvert} 
        className="convert-button"
        disabled={!value.trim()}
      >
        <span className="button-icon">📨</span>
        Convert
      </button>
    </div>
  );
}

InputSection.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onConvert: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired
};

export default InputSection;