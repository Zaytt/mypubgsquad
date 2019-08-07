import React from 'react';
import Loader from 'react-loader-spinner';

export default function Spinner() {
  return (
    <div className="d-flex justify-content-center align-items-center spinner">
      <Loader type="TailSpin" color="#ffa812" height={100} width={100} />
    </div>
  );
}
