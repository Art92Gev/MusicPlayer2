import React, { forwardRef, useEffect, useState } from 'react';
import { RxDragHandleDots1 } from 'react-icons/rx';
import { TbPlayerPlayFilled, TbPlayerPauseFilled } from 'react-icons/tb';
import { CgPlayList } from "react-icons/cg";
import { FaHeart } from 'react-icons/fa';
import { MdOutlineDone } from 'react-icons/md';
import { FaShare } from 'react-icons/fa';
import { FaCaretDown } from 'react-icons/fa';
import { songList } from '../../constants/index';
import './SongList.css'


function SongList({ isAll, setIsAll, currentSong, setCurrentSong, audioItem }) {
	useEffect(() => {
		if (isAll) {
			setCurrentSong(songList[0])
		}
	}, [isAll])


	const onPlay = (item) => {
		audioItem.current.src = item.song;   // audio.src = songList.song
		audioItem.current.play();
		setCurrentSong(item);   //for add to audio.src from map(item)
		isAll && setIsAll(false)
	};

	const onPause = (item) => {
		audioItem.current.src = item.song;
		audioItem.current.pause();
		setCurrentSong(null);
		isAll && setIsAll(false)
	};
	return (
		<div className="songlist">
			<audio className='audio' ref={audioItem} id='audio'></audio>
			<table className="title-table">
				<thead>
					<tr>
						<td className="iconsTd0"></td>
						<td>Song name</td>
						<td>Artist name</td>
						<td>Track</td>
						<td></td>
					</tr>
				</thead>
			</table>
			<table>
				<tbody>
					{songList.map((item, index) => {
						return (
							<tr key={index}>
								<td className="incons-td">
									<RxDragHandleDots1 />
									{currentSong?.id === item.id
										? <TbPlayerPauseFilled onClick={() => onPause(item)} />
										: isAll ? <CgPlayList onClick={() => onPlay(item)} /> : <TbPlayerPlayFilled onClick={() => onPlay(item)} />
									}
								</td>
								<td className="song-info">{item.name}</td>
								<td className="song-info">{item.singer}</td>
								<td className="song-info">{item.id}</td>
								<td className="icons-td2">
									<FaHeart />
									<MdOutlineDone />
									<FaShare />
									<FaCaretDown />
								</td>
							</tr>
						)
					})}

				</tbody>
			</table>
		</div>
	);
}

export default SongList;