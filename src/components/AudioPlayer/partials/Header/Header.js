import React from 'react'
import PlayAllButton from './PlayAllButton';
import AddAllButton from './AddAllButton';
import { BiSortAlt2 } from "react-icons/bi";
import { FaSortDown } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import './Header.css'


export default function Header({setIsAll}) {
	
	return (
			<header>
				<div className='header-left'>
					<PlayAllButton setIsAll={setIsAll} />
					<AddAllButton setIsAll={setIsAll}/>
				</div>
				<div className='header-right'>
					<button className='sort-button'>
						<BiSortAlt2 />
						<p>Track Nu...</p>
						<FaSortDown />
					</button>
					<div className='search-container'>
						<IoSearchSharp />
						<input className='search-input' type="search" placeholder=' Filter' />
					</div>
				</div>
			</header>
	)
}
