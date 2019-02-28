import React from 'react';

const CardModel = (props) => {

  return (

    <div className="col-6 col-md-4 user-card">
      <div className="card" style={{"width": "22rem"}}>


     <div className="card-header">
      <div className="row">
        <div className="col-6 col-md-6">
        <img className="card-img-top" src={props.photo} alt="Card image cap"/>
        </div>
        <div className="col-6 col-md-6">
        <label className="card-name">{props.name}</label>
        <label className="card-location-dob"><i className="fas fa-map-marker-alt"/>&nbsp;{props.location}</label>
        <label className="card-location-dob"><i className="fas fa-birthday-cake"/>&nbsp;{props.dob}</label>
        </div>
      </div>
    </div>

      <div className="card-body">
      <p className="card-description">{props.description}</p>
      </div>

      <div className="card-footer">
      <div className="row">
      <label className="card-phone-email"><i className="fas fa-phone"/>&nbsp;{props.phone}</label>
      </div>
      <div className="row">
      <label className="card-phone-email"><i className="fas fa-envelope"/>&nbsp;{props.email}</label>
      </div>
      </div>


      </div>
    </div>

  );

}

export default CardModel;
