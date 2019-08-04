import React from 'react';

function AloneTogetherPicker(props) {
  let { alone, setAlone } = props;
  return (
    <div className="row d-flex justify-content-center pubg-font">
      <div className="col-sm-6 col-12">
        <h2
          className={`display-4 pubg-font ${alone ? 'text-black' : 'text-muted'}`}
          style={{ cursor: 'pointer' }}
          onClick={() => setAlone(true)}
        >
          <div className="row d-flex">
            <div className="col-lg-9 col-md-8 col-sm-6 col-5  text-right d-flex justify-content-end">
              <span>{alone ? <i className="fas fa-fist-raised" /> : null}</span>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-7 text-left d-flex justify-content-start justify-content-sm-end">
              <span className="">Alone</span>
            </div>
          </div>
        </h2>
      </div>
      <div className="col-sm-6 col-12">
        <h2
          className={`display-4 text-center ${alone ? 'text-muted' : 'text-black'}`}
          style={{ cursor: 'pointer' }}
          onClick={() => setAlone(false)}
        >
          <div className="row d-flex">
            <div className="col-lg-4 col-md-6 col-7 order-1 order-sm-0 d-flex justify-content-sm-start">
              <span className="">Together</span>
            </div>
            <div className="order-0 order-sm-1 col-lg-8 col-md-6 col-5  text-right d-flex justify-content-sm-start justify-content-end">
              <span>{alone ? null : <i className="fas fa-hands-helping" />}</span>
            </div>
          </div>
        </h2>
      </div>
    </div>
  );
}

export default AloneTogetherPicker;
