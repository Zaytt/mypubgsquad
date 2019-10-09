import React from 'react';

function AloneTogetherPicker(props) {
  let { alone, setAlone } = props;
  return (
    <div className="row d-flex justify-content-center pubg-font">
      <div className="col-12">
        <h2 className="display-4 pubg-font text-center">As</h2>
      </div>
      <div className="col-sm-6 col-12">
        <h2
          className={`display-4 pubg-font ${alone ? 'text-black' : 'text-muted'}`}
          style={{ cursor: 'pointer' }}
          onClick={() => setAlone(true)}
        >
          <div className="row d-flex">
            <div className="col-12  text-center d-flex justify-content-sm-end justify-content-center">
              <span className={`mx-2 ${!alone ? 'hidden' : ''}`}>
                <i className="fas fa-fist-raised" />{' '}
              </span>
              <span className="mx-2">Individuals</span>
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
            <div className="col-12 order-1 order-sm-0 d-flex justify-content-sm-start justify-content-center">
              <span className="order-sm-0 order-1 mx-2">a Team</span>
              <span className={`order-sm-1 order-0 mx-2 ${alone ? 'hidden' : ''}`}>
                <i className="fas fa-hands-helping" />
              </span>
            </div>
          </div>
        </h2>
      </div>
    </div>
  );
}

export default AloneTogetherPicker;
