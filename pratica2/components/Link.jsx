import React from 'react';

function Link({ url = '#', texto = 'Link' }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {texto}
    </a>
  );
}

export default Link;
