import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';


class Sidebar extends React.Component {
    render() {
        return (
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/add'>Will Read</Link>
                <Link to='/current'>Reading</Link>
                <Link to='/past'>Have Read</Link>
                <Link to='/search'>Search</Link>
            </nav>
        )
    }
}

export default Sidebar;