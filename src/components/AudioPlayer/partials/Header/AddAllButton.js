import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa6";


export default function AddAllButton({setIsAll}) {
	return (
		<button className='btn'>
			<FaPlus onClick={() => {
				setIsAll((lastVal)=> !lastVal)
			}}/>
			<p>Add All</p>
			<div className='sortDown'>
			<FaSortDown />
			</div>
		</button>
	)
}
