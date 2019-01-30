# ReactJS Dallas
**A React app that consumes the Meetup API and displays information about an upcoming ReactJS Dallas event.**

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Technologies](#technologies)
* [Project Requirements](#project-requirements)
* [Related Documentation](#related-documentation)
* [License](#license)

## Installation

### Get App
Choose from the following options:
* **Clone:** `git clone https://github.com/gunnarjohnson/reactjs-dallas.git`
* [**Download**](https://github.com/gunnarjohnson/reactjs-dallas/archive/master.zip)
* [**Fork**](https://github.com/gunnarjohnson/reactjs-dallas/fork)

### Install Dependencies
```
npm install
```
Installs the dependencies in the local `node_modules` directory.

## Usage

### Development
```
npm run dev
```
Runs the app in Webpack's development mode using `webpack-serve`. Open [http://localhost:8080/](http://localhost:8080/) to view it in the browser.

### Deployment
```
npm run build
```
Builds the app in Webpack's production mode to the `dist` directory.

## Technologies

* [Babel](https://github.com/babel/babel)
* [Fetch JSONP](https://github.com/camsong/fetch-jsonp)
* [Font Awesome](https://github.com/FortAwesome/Font-Awesome)
* [Moment](https://github.com/moment/moment)
* [PostCSS](https://github.com/postcss/postcss)
* [React](https://github.com/facebook/react)
* [React Boilerplate](https://github.com/gunnarjohnson/react-boilerplate)
* [React Moment](https://github.com/headzoo/react-moment)
* [Webpack](https://github.com/webpack/webpack)

## Project Requirements

**_Build and deploy a React application that meets the following criteria:_**

**Consume Meetup.com web API and display information about an upcoming ReactJS Dallas event.**
> I built the `withMeetupAPI` higher-order component (HOC) for the API calls. It utilizes `Fetch JSONP` to get the data.

**Use the v3 events endpoint to get event information (the urlname for the group is “reactjs-dallas”).**
> The `Event` component is passed with the v3 events endpoint to the `withMeetupData` HOC, which gets the event information. The `Event` component returns the event information and passes the event ID to the `RSVPs` component.

**Use the v3 rsvps endpoint to get rsvps for an event. Use the “id” of the event returned from the call above.**
> The `RSVPs` component is passed with the v3 rsvps endpoint to the `withMeetupData` HOC, which gets the event rsvps. The `RSVPs` component returns the event rsvps.

**Use more than one react component.**
> This project contains multiple React components, located in the `/src/` and `/src/components/` directories.

**Use both state and props.**
> State is managed by the reusable `withMeetupData` HOC and passed as props to the wrapped component (`Event` or `RSVPs`). Additionally, the `Event` component passes props through the `withMeetupData` HOC to the `RSVPs` component.

**Demonstrate knowledge of component lifecycle.**
> The API calls are placed in the `componentDidMount` method. The `render` method is called once, then the `componentDidMount` method is called, storing the fetched data in the component state and triggering a re-render. Depending on the component's state, the component will return a loading message, error message, or data from the JSON object.

## Related Documentation

* [Meetup API](https://www.meetup.com/meetup_api/)
* [Authenticating with the Meetup API](https://www.meetup.com/meetup_api/auth/)
* [Meetup API v3 Events Endpoint](https://secure.meetup.com/meetup_api/console/?path=/:urlname/events)
* [Meetup API v3 RSVPs Endpoint](https://secure.meetup.com/meetup_api/console/?path=/:urlname/events/:event_id/rsvps)
* [Meetup Trademark Guidelines](https://help.meetup.com/hc/en-us/articles/360001655932-Meetup-Trademark-Guidelines)

## License

ReactJS Dallas is open source software, built with [React Boilerplate](https://github.com/gunnarjohnson/react-boilerplate), and [licensed as MIT](https://github.com/gunnarjohnson/reactjs-dallas/blob/master/LICENSE.txt).
