import React from 'react'
import { TbPlayerPlayFilled } from "react-icons/tb";
import { FaSortDown } from "react-icons/fa6";



export default function PlayAllButton({setIsAll}) {
	return (
		<button className='btn'>
			<TbPlayerPlayFilled  onClick={() => {
				setIsAll((lastVal)=> !lastVal)
			}} />
			<p>Play All</p>
			<FaSortDown />
		</button>
	)
}
