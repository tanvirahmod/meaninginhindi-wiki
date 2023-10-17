"use client"
const Play_It = (props:{theWord:any, langCode:any, lang:any}) => {
  const inputText = props.theWord
  let isBrowserSupports:boolean = true
  
  const speakText = () => {
    if ('speechSynthesis' in window) {
      const synthesis = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(inputText);
      utterance.lang = props.langCode; // Set the language to English
      synthesis.speak(utterance);
    } else {
      isBrowserSupports = false
    }
  };

  return (
    <>
      {isBrowserSupports && 
      <button title={`Play ${props.lang}`} className="flex items-center" onClick={speakText}>
      <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 8.99998C16.5 9.49998 17 10.5 17 12C17 13.5 16.5 14.5 16 15M3 10.5V13.5C3 14.6046 3.5 15.5 5.5 16C7.5 16.5 9 21 12 21C14 21 14 3 12 3C9 3 7.5 7.5 5.5 8C3.5 8.5 3 9.39543 3 10.5Z" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
      </button>}
    </>
  );
};

export default Play_It;
