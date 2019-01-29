import React from 'react';

const RSVPsList = (props) => (
  <ul className="rsvps-list">
    {props.rsvps.map((rsvp, i) => (
      rsvp.response === 'yes' && (
        <li className="rsvps-list__item" key={i}>
          {rsvp.member.name}
          {rsvp.guests > 0 && ' + ' + rsvp.guests}
        </li>
    )))}
  </ul>
);

export default RSVPsList;