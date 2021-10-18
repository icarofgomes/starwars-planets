import React from 'react';

function SkipButton ({ handleClick }) {
  return(
    <button
      onClick={ handleClick}
      type="button"
      className="border-4 border-yellow-300 rounded-full p-1 fixed top-8 right-6
        z-10 md:top-auto md:bottom-8 hover:border-white"
    >
      <svg class="w-10 h-10 transition-all duration-200 md:w-14 md:h-14" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  )
}

export default SkipButton;
