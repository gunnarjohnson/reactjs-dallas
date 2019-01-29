import React from 'react';

const EventDetails = (props) => (
  <div className="event-details">
    <h3 className="event-details__title">Details</h3> 
    <div className="event-details-container" dangerouslySetInnerHTML={{__html: props.event.description}} />
  </div>
);

export default EventDetails;