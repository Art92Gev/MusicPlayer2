import React, { useRef, useState } from 'react';
import './MusicUploadForm.css'
import { ImSpinner10 } from "react-icons/im";

const MusicUploadForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);
	const fileInput = useRef();

	
	const uploadFile = () => {
		setError(null);
		setData(null);
		setIsLoading(true);
		const upload = new Promise((resolve, reject) => {
			setTimeout(() => {
				const request = (file) => {
					return file.current?.files.length === 0
					? reject({type: 'error'})
					: resolve({type: 'success'}) 
				}
				request(fileInput)
			}, 5000);
		})
		.then((response) => {
			setIsLoading(false);
			setData('Success');
		})
		.catch((response) => {
			setIsLoading(false);
			setError('Connection error!!!');
		})
	}

	return (
		<div className='upload-container'>
			<h2>Music Upload Form</h2>
			<input ref={fileInput} type="file" accept=".wav, .mp3" />
			<button className='upload-btn' onClick={() => uploadFile()}>Upload</button>
			<div>
			{isLoading && <div className='spinner'>
			<p>Loading...</p> {fileInput.current?.files[0]?.name} <ImSpinner10 /> 
				</div>}
				<div className='error'>
			{error ? error:''}
				</div>
			</div>
			<div className='success'>
			{data ? data : ''}
			</div>
		</div>
	);
};

export default MusicUploadForm;
