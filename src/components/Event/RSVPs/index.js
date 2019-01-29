import React from 'react';
import withMeetupData from '../../withMeetupData';
import RSVPsCount from './RSVPsCount';
import RSVPsList from './RSVPsList';

const RSVPs = (props) => (
  <section className="rsvps">
    <h3 className="rsvps__title">Attendees</h3>
    {props.isLoading && (
      <p className="rsvps__content">Loading...</p>
    )}
    {!!props.error && (
      <p className="rsvps__content">Something went wrong.</p>
    )}
    {!!props.meetup.data && (
      <React.Fragment>
        <RSVPsCount attending={props.attending} waitlist={props.waitlist} />
        <RSVPsList rsvps={props.meetup.data} />
      </React.Fragment>
    )}
  </section>
);

const url = 'https://api.meetup.com/reactjs-dallas/events/:event_id/rsvps?photo-host=public&sig_id=211601145&sig=1a398dd9c5980a32f63c2507aa0b7328d2310fcc';
const WrappedComponent = withMeetupData(url)(RSVPs);

export default WrappedComponent;