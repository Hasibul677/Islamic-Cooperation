import React from 'react';

const LectureHire = (props) => {
// collect json data using props and distructuring the property
    const {name, country, language, cost, image, ratting}= props.lecturer
    
    return (
  <div className="col">
    <div className="card h-100">
      <img src={image} className="rounded-circle w-50 m-auto mt-2" alt="..."/>
      <div className="card-body">
        <h6 className="card-title"><strong>Name:</strong> {name}</h6>
        <h6 className="card-title"><strong>Country:</strong> {country}</h6>
        <h6 className="card-title"><strong>Language:</strong> {language}</h6>
        <h6 className="card-title"><strong>Ratting:</strong> {ratting}</h6>
        <h6 className="card-title"><strong>Cost:</strong> {cost}</h6>
      </div>
      <button className='btn-primary w-50 m-auto rounded-pill mb-2'>Hire ME</button>
    </div>
  </div>
);
};

export default LectureHire;