import React from 'react';

const RSVPsList = (props) => (
  <ul className="rsvps-list">
    {!props.rsvps.errors ? (
      props.rsvps.map((rsvp, i) => (
        rsvp.response === 'yes' && (
          <li className="rsvps-list__item" key={i}>
            {rsvp.member.name}
            {rsvp.guests > 0 && ' + ' + rsvp.guests}
          </li>
        )
      ))
    ) : (
      <li className="rsvps-list__item">RSVPs not available</li>
    )}
  </ul>
);

export default RSVPsList;