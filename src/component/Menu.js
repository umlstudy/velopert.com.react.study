import React from 'react';
import { Link , NavLink} from 'react-router-dom';
import './Menu.css'

const Menu = () => {
  const activeStyle = {
    color: 'green',
    fontSize: '2rem',
    ":hover": { color: "#8062ba" }
  };

    return (
        <div>
            <ul>
                {/* 
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/about/foo">About Foo</Link></li>
                */}
                {/* 
                <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
                <li><NavLink to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink></li>
                */}
                <li><NavLink className='subnav_link' to="/">Home</NavLink></li>
                <li><Link  className='subnav_link' to="/about">About</Link></li>
                <li><Link  className='subnav_link' to="/about/foo">About Foo</Link></li>
                <li><NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;