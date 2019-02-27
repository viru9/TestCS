import React from 'react';

const CardModel = (props) => {

  return (

    <div className="col-6 col-md-4">
      <div className="card" style={{"width": "18rem"}}>
      <img className="card-img-top" src={props.photo} alt="Card image cap"/>
      <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <h6 className="card-title">{props.dob}</h6>
      <p className="card-text">{props.description}</p>
      <h6 className="card-title">{props.phone}</h6>
      <h6 className="card-title">{props.email}</h6>
      </div>
      </div>
    </div>

  );

}

export default CardModel;
