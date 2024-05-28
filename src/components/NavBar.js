import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBook, faUser, faRightToBracket } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
    const [current, setCurrent] = useState('home');
    const onClick = (e) => {
        console.log('click ', e)
        setCurrent(e.key)
    }
    return (
        <nav>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" style={{ display: 'block', backgroundColor: 'azure' }}>
                <Menu.Item key='home'><Link to="/home"><FontAwesomeIcon icon={faHouse} /> Home</Link></Menu.Item>
                <Menu.Item key='posts'><Link to="/posts"><FontAwesomeIcon icon={faBook} /> Posts</Link></Menu.Item>
                <Menu.Item key='profile'><Link to="/profile"><FontAwesomeIcon icon={faUser} /> Profile</Link></Menu.Item>
                <Menu.Item key='login' style={{ float: 'right' }}><Link to="/login"><FontAwesomeIcon icon={faRightToBracket} /> Login</Link></Menu.Item>
            </Menu>
        </nav>
    )
}