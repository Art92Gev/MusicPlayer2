import './SongRow.css'

const SongRow = ({ currentSong}) => {

	return (
		<div className='song-row'>
			{currentSong && <div className='current-song-info'>
				<img src={currentSong.picture} alt="" />
				<h2>{currentSong.name}</h2>
				<h3>{currentSong.singer}</h3>
			</div>}
		</div>
	)
}


export default SongRow;

