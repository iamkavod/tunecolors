import React, { useState } from 'react';
import axios from 'axios';

const TranslationComponent = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('fr');

  const translateText = async () => {
    try {
      const response = await axios.post('http://localhost:5000/translate', {
        text,
        targetLanguage
      });
      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error('Translation error', error);
    }
  };

  return (
    <div>
      <h1>Translate Text with Backend</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <input
        type="text"
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
        placeholder="Enter target language code (e.g., 'fr')"
      />
      <button onClick={translateText}>Translate</button>
      {translatedText && (
        <div>
          <h2>Translated Text:</h2>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default TranslationComponent;
