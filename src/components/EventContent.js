import React from 'react';

const EventContent = (props) => (
  <React.Fragment>
    <h2 className="event__title">{props.event.name}</h2>
    <p className="event__content">{props.event.local_date}</p>
    <p className="event__content">{props.event.local_time}</p>
    <p className="event__content">Attending: {props.event.yes_rsvp_count}</p>
    {props.event.waitlist_count > 0 && 
      <p className="event__content">Waitlist: {props.event.waitlist_count}</p>
    }
    <h3 className="event-details__title">Details</h3> 
    <div className="event-details__wrapper" dangerouslySetInnerHTML={{__html: props.event.description}} />
  </React.Fragment>
);

export default EventContent;