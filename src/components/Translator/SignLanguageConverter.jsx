import { useState } from 'react';
import Header from './Header';
import InputSection from './InputSection';
import SignDisplay from './SignDisplay';

function SignLanguageConverter() {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleConvert = () => {
    if (inputText.trim()) {
      setDisplayText(inputText);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputText.trim()) {
      handleConvert();
    }
  };

  return (
    <div className="containerrr">
      <Header 
        title="Sign Language Translator" 
        subtitle="Convert text to sign language gestures" 
      />
      <InputSection
        value={inputText}
        onChange={setInputText}
        onConvert={handleConvert}
        onKeyPress={handleKeyPress}
      />
      {displayText && <SignDisplay text={displayText} />}
    </div>
  );
}

export default SignLanguageConverter;