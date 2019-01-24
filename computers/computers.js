'use strict';

// https://reactjs.org/docs/react-without-jsx.html
// https://reactjs.org/docs/faq-ajax.html

const e = React.createElement;

class ComputersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      computers: [],
      users: [],
      isLoaded: false,
      error: null
    };
  }

  componentDidMount() {
    fetch("/api/computers.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            computers: result.computers,
            users: result.users
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { computers, users, isLoaded, error } = this.state;
    if (error) {
      console.log(error);
      return e('div', null, "Error fetching data.");
    } else if (!isLoaded) {
      return e('div', null, "Loading...");
    } else {
      return e('div', null, [
        e(Computers, { computers: this.state.computers }, null),
        e(Users, { users: this.state.users }, null)
      ])
    }
  }
}

class Computers extends React.Component {
  render() {
    const computers = this.props.computers;
    return (
      e('table', null, computers.map(computer => (
        e('tr', null, [
          e('td', null, computer.hostname),
          e('td', null, computer.user_id),
          e('td', null, moment(computer.local_timestamp).fromNow())
        ])
      )))
    )
  }
}

class Users extends React.Component {
  render() {
    const users = this.props.users;
    return (
      e('table', null, users.map(user => (
        e('tr', null, [
          e('td', null, user.username),
          e('td', null, moment(user.last_ping).fromNow()),
          // only works if user's time spent is less than 24 hours
          e('td', null, moment().startOf('day').add(user.time_spent, 'seconds').format('HH:mm:ss'))
        ])
      )))
    )
  }
}

const domContainer = document.querySelector('#computers-list');
ReactDOM.render(e(ComputersList), domContainer);
// vim: et sw=2
