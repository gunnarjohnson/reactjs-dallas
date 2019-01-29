import React from 'react';
import withMeetupData from '../withMeetupData';
import EventDetails from './EventDetails';
import EventLocation from './EventLocation';
import EventTime from './EventTime';
import RSVPs from './RSVPs';

const Event = (props) => (
  <React.Fragment>
    <section className="event">
      {props.isLoading && (
        <p className="event__content event__content--loading">Loading...</p>
      )}
      {!!props.error && (
        <p className="event__content event__content--error">Something went wrong.</p>
      )}
      {!!props.meetup.data && (
        <React.Fragment>
          <h2 className="event__title">{props.meetup.data[0].name}</h2>
          <div className="event-container">
            <EventTime event={props.meetup.data[0]} />
            <EventLocation location={props.meetup.data[0].venue} />
          </div>
          <EventDetails event={props.meetup.data[0]} />
        </React.Fragment>
      )}
    </section>
    {!!props.meetup.data && (
      <RSVPs 
        eventID={props.meetup.data[0].id} 
        attending={props.meetup.data[0].yes_rsvp_count} 
        waitlist={props.meetup.data[0].waitlist_count}
      />
    )}
  </React.Fragment>
);

Event.displayName = 'Event';
const url = 'https://api.meetup.com/reactjs-dallas/events?photo-host=public&page=1&sig_id=211601145&sig=7e332371254b355d639ce06a1f502965eb53eca9';
const WrappedComponent = withMeetupData(url)(Event);

export default WrappedComponent;