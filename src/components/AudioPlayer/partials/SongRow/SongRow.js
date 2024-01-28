import { useEffect, useRef, useState } from 'react';
import './SongRow.css';

const SongRow = ({ currentSong, audioItem }) => {
	const [seconds, setSeconds] = useState('00:00');
	const [duration, setDuration] = useState('00:00');
	const [rangeVal, setRangeVal] = useState(0);

	useEffect(() => {

		setInterval(() => {
			const updateDuration = () => {
				if (audioItem.current && !isNaN(audioItem.current.duration)) {
					let currentMins = Math.floor(audioItem.current.currentTime / 60);
					let currentSec = Math.floor(audioItem.current.currentTime - currentMins * 60);
					let durationMins = Math.floor(audioItem.current.duration / 60);
					let durationSec = Math.floor(audioItem.current.duration - durationMins * 60);
					currentMins = currentMins.toString().padStart(2, '0');
					currentSec = currentSec.toString().padStart(2, '0');
					durationMins = durationMins.toString().padStart(2, '0');
					durationSec = durationSec.toString().padStart(2, '0');

					setSeconds(currentMins + ':' + currentSec);
					setDuration(durationMins + ':' + durationSec);
					setRangeVal((audioItem.current.currentTime * 100) / audioItem.current.duration);
				}
			};
			updateDuration();
		}, 1000);

	}, [audioItem.current]);


	const handleRangeChange = (e) => {
		const newTime = (e.target.value * audioItem.current.duration) / 100;
		audioItem.current.currentTime = newTime;
	};

	return (
		<div className='song-row'>
			{currentSong && (
				<div className='current-song-info'>
					<img src={currentSong.picture} alt='' />
					<div className='for-time'>
						<p className='song-time'>{seconds}</p>
						<input type='range' className='song-range' value={rangeVal} max='100' onChange={handleRangeChange} />
						<p className='song-duration'>{duration}</p>
					</div>
					<h2>{currentSong.name}</h2>
					<h3>{currentSong.singer}</h3>
				</div>
			)}
		</div>
	);
};

export default SongRow;
