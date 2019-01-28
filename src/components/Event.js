import React from 'react';
import withMeetupData from './withMeetupData';
import EventContent from './EventContent';
import RSVPs from './RSVPs';

const Event = (props) => (
  <React.Fragment>
    <section className="event">
      {props.isLoading && <p className="event__content">Loading...</p>}
      {!!props.meetup.data ? (
        <EventContent event={props.meetup.data[0]} />
      ) : (
        <p className="event__content">No event found.</p>
      )}
    </section>
    {!!props.meetup.data && <RSVPs eventID={props.meetup.data[0].id} />}
  </React.Fragment>
);

Event.displayName = 'Event';
const url = 'https://api.meetup.com/reactjs-dallas/events?photo-host=public&page=1&sig_id=211601145&sig=7e332371254b355d639ce06a1f502965eb53eca9';
const WrappedComponent = withMeetupData(url)(Event);

export default WrappedComponent;