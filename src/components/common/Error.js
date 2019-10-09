import React from 'react';

export default function Error(props) {
  let { error, retry, message } = props;

  const errorMessage =
    error.status === 429
      ? 'PUBG Servers are busy, please try again later'
      : error.status === 404
      ? `One or more players couldn't be found, be sure to type their correct names and try again.`
      : error === 'InsufficientPlayers'
      ? `Search must contain at least 2 players. Check your search and try again.`
      : message;

  if (error.status === 404 || error === 'InsufficientPlayers') {
    retry = false;
  }
  return (
    <div className="container h-100 mt-2">
      <h1 className="pubg-font text-center mb-3 display-4">Whoops!</h1>
      <div className="row d-flex justify-content-center">
        <div className="col-12">
          <h1 className="text-dark pubg-font text-center mb-3">{errorMessage}</h1>
        </div>
      </div>
      {retry ? (
        <div className="row d-flex justify-content-center">
          <div className="col-8 col-sm-6 col-md-4 col-lg-3">
            <button className="btn btn-warning w-100 " onClick={retry}>
              <i className="fas fa-redo-alt" /> <font size="3"> RETRY</font>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
