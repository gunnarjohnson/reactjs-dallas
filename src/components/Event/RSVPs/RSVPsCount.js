import React from 'react';

const RSVPsCount = (props) => (
  <div className="rsvps-count">
    <p className="rsvps-count__content rsvps-count__content--attending">{props.attending} people going</p>
    {props.waitlist > 0 && (
      <p className="rsvps-count__content rsvps-count__content--waitlist">{props.waitlist} on waitlist</p>
    )}
  </div>
);

export default RSVPsCount;