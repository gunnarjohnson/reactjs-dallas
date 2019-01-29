import React from 'react';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const EventTime = (props) => (
  <div className="event-time">
    <div className="event-time-container">
      <FontAwesomeIcon className ="event-time__icon" icon={faClock} />
      <Moment className="event-time__content event-time__content--date" format="MMMM DD, YYYY">{props.event.local_date}</Moment>
      <Moment className="event-time__content event-time__content--time" parse="HH:mm" format="h:mm a">{props.event.local_time}</Moment>
    </div>
  </div>
);

export default EventTime;