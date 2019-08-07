import React from 'react';

export default function Separator(props) {
  const { color, marginTop, marginBottom, length } = props;
  return (
    <div className={`row d-flex justify-content-center mt-${marginTop} mb-${marginBottom}`}>
      <div className={`col-${length}`}>
        <hr className={`text-center shadow ${`bg-${color}`}`} />
      </div>
    </div>
  );
}
