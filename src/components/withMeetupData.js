import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';

const withMeetupData = (url) => (WrappedComponent) => {
  class WithMeetupData extends Component {
    state = {
      meetup: [],
      isLoading: false,
      error: false
    };

    fetchData = () => {
      this.setState({ isLoading: true });

      if (!!this.props.eventID) {
        url = url.replace(':event_id', this.props.eventID);
      }

      fetchJsonp(url)
        .then(response => response.json())
        .then(data => this.setState({ meetup: data, isLoading: false }))
        .catch(error => this.setState({ error: error, isLoading: false }));
    };

    componentDidMount() {
      this.fetchData();
    }

    render() {
      return (
        <WrappedComponent 
          {...this.state} 
          attending={this.props.attending} 
          waitlist={this.props.waitlist}
        />
      );
    }
  }

  WithMeetupData.displayName = `withMeetupData(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  return WithMeetupData;
}

export default withMeetupData;