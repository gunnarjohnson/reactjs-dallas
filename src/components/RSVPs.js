import React from 'react';
import withMeetupData from './withMeetupData';

const RSVPs = (props) => (
  <section className="rsvps">
    <h3 className="rsvps__title">Attendees</h3>
    {props.isLoading && <p className="rsvps__content">Loading...</p>}
    {!!props.meetup.data ? (
      props.meetup.data.map((rsvp, i) => (
        rsvp.response === 'yes' && (
          <p className="rsvps__content" key={i}>
            {rsvp.member.name}{rsvp.guests > 0 && ' + ' + rsvp.guests}
          </p>
        )))
    ) : ( 
      <p className="rsvps__content">No attendees found.</p>
    )}
  </section>
);

RSVPs.displayName = 'RSVPs';
const url = 'https://api.meetup.com/reactjs-dallas/events/:event_id/rsvps?photo-host=public&sig_id=211601145&sig=1a398dd9c5980a32f63c2507aa0b7328d2310fcc';
const WrappedComponent = withMeetupData(url)(RSVPs);

export default WrappedComponent;