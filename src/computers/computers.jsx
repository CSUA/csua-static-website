'use strict';

var moment = require('moment');
var React = require('react');
var ReactDOM = require('react-dom');

// https://reactjs.org/docs/faq-ajax.html

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
    fetch("/api/computers/json")
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
      return <div>Error fetching data.</div>
      } else if (!isLoaded) {
        return <div>Loading...</div>
        } else {
          return <div>
            <Computers computers={this.state.computers}/>
            <Users users={this.state.users}/>
          </div>
          }
  }
}

class Computers extends React.Component {
  render() {
    const computers = this.props.computers;
    return <table>
      {computers.map(computer =>
      <tr>
        <td>{computer.hostname}</td>
        <td>{computer.user_id}</td>
        <td>{moment(computer.local_timestamp).fromNow()}</td>
      </tr>
      )}
    </table>
    }
}

class Users extends React.Component {
  render() {
    const users = this.props.users;
    return <table>
      {users.map(user =>
      <tr>
        <td>{user.username}</td>
        <td>{moment(user.last_ping).fromNow()}</td>
        <td>{moment().startOf('day').add(user.time_spent, 'seconds').format('HH:mm:ss')}</td>
      </tr>
      )}
    </table>
    }
}

ReactDOM.render(<ComputersList />, document.getElementById('computers-list'));

// vim:et:sw=2:
