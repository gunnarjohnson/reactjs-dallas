import React from 'react';
import withMeetupData from './withMeetupData';
import RSVPsList from './RSVPsList';

const RSVPs = (props) => (
  <section className="rsvps">
    <h3 className="rsvps__title">Attendees</h3>
    {props.isLoading && 
      <p className="rsvps__content">Loading...</p>
    }
    {!!props.meetup.data 
      ? <RSVPsList rsvps={props.meetup.data} />
      : <p className="rsvps__content">No attendees found.</p>
    }
  </section>
);

RSVPs.displayName = 'RSVPs';
const url = 'https://api.meetup.com/reactjs-dallas/events/:event_id/rsvps?photo-host=public&sig_id=211601145&sig=1a398dd9c5980a32f63c2507aa0b7328d2310fcc';
const WrappedComponent = withMeetupData(url)(RSVPs);

export default WrappedComponent;