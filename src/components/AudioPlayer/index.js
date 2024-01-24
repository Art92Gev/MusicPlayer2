import Header from './partials/Header/Header'
import SongList from "./partials/SongList/SongList";
import { useState, useRef } from 'react';
import './styles/index.css'
import SongRow from './partials/SongRow/SongRow';
import MusicUploadForm from './partials/MusicUploadForm/MusicUploadForm';

function AudioPlayer() {
	const [currentSong, setCurrentSong] = useState(null); //state for currentsong adding to audio.src
	const [isAll, setIsAll] = useState(false); //state for buttons Play All,Add All
	const audioItem = useRef() // ref for <audio> tag

	return (
		<div className="container">
			<div className='audio-player'>
				<Header setIsAll={setIsAll}/>
				<SongList   audioItem={audioItem} isAll={isAll} setIsAll={setIsAll} currentSong={currentSong} setCurrentSong={setCurrentSong}  />  
				<SongRow  currentSong={currentSong} audioItem={audioItem}/>
				<MusicUploadForm />
			</div>
		</div>
	);
}

export default AudioPlayer;
