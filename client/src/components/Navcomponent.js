import {NavLink} from 'react-router-dom';
import React, { Component } from 'react';
import './Navcomponent.css'

const Navcomponent =()=>{
	return (
		<div>
			<ul className='menue'>
			<li><NavLink to='/'>Home</NavLink></li>
			<li><NavLink to='/bookmarked'> Bookmark Repos </NavLink></li>
			<li><NavLink to='/login'>Login</NavLink></li>
			</ul>
		</div>
		)
}

export default Navcomponent;
