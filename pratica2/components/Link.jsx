import React from 'react';

function Link({ url, text }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
}

export default Link;
