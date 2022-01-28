import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Summary = () => {
    const navigate = useNavigate();
  return (
      <>
        <div>Summary page</div>
        <button onClick={() => navigate(-1)}>go back!</button>
      </>
  )
};
