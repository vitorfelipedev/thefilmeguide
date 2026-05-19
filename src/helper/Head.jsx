import React from 'react';

const Head = ({ title, description }) => {
  React.useEffect(() => {
    document.title = `${title} | Dogs`;
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute('content', description || '');
    }
  }, [title, description]);
  return <></>;
};

export default Head;
