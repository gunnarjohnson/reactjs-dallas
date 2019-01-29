import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-regular-svg-icons/faBuilding';

const EventLocation = (props) => (
  <div className="event-location">
    <div className="event-location-container">
      <FontAwesomeIcon className ="event-location__icon" icon={faBuilding} />
      <p className="event-location__content">
        <span className="event-location__content--address">{props.location.address_1}</span>
        {props.location.address_2 && (
          <span className="event-location__content--address">{props.location.address_2}</span>
        )}
        <span className="event-location__content--city">{props.location.city}, </span>
        <span className="event-location__content--state">{props.location.state.toUpperCase()} </span>
        <span className="event-location__content--zip">{props.location.zip}</span>
      </p>
    </div>
  </div>
);

export default EventLocation;