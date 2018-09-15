import React from 'react';
import UserDropdown from './menu_user_dropdown';
import { Link } from 'react-router-dom'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayDropdown: false,
    };
    this.displayDropdown = this.displayDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }
  displayDropdown() {
    this.setState({
      displayDropdown: !this.state.displayDropdown,
    });
  }
  closeDropdown() {
    this.setState({
      displayDropdown: false
    });
  }
  render() {
    const defaultNote = {
      author_id: this.props.currentUser.id,
      notebook_id: 1, //BUG Hard Coded for now
    }
    return (
      <aside className="menu-container">
        <div className="user-account">
          <div onClick={() => this.displayDropdown()} className="username-container">
              <span className="initial-container">
                <span className="initial">{this.props.currentUser.username[0].toUpperCase()}</span>
              </span>
              <span className="user">{this.props.currentUser.username}</span>
            <img src={window.dropArrow}/>
          </div>
        </div>
        {
          this.state.displayDropdown ?
            <UserDropdown
              currentUser={this.props.currentUser}
              logout={this.props.logout} /> : null
        }
        <div className="create-note" onClick={() => createNote(defaultNote)}>

          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" id="qa-CREATE_NOTE">
            <g fill="none" fillRule="evenodd">
              <path d="M0 0h30v30H0z"></path>
              <circle cx="15" cy="15" r="14" fill="#00A82D"></circle>
              <rect width="14" height="2" x="8" y="14" fill="#FFF" rx="1"></rect>
              <rect width="2" height="14" x="14" y="8" fill="#FFF" rx="1"></rect>
            </g>
          </svg>

          <span>New Note</span>
        </div>
        <div className="nav-links">
          <Link to="/client/notes">
            <i className="fas fa-file-alt"></i>&nbsp;&nbsp;&nbsp;All Notes
          </Link>
          <Link to="/client/notebooks">
            <i className="fas fa-book"></i>&nbsp;&nbsp;&nbsp;Notebooks
          </Link>
        </div>
      </aside>
    )
  }
}
export default Menu;
