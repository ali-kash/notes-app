import { useState } from 'react'

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('')

	const handleChange = (event) => {
		setNoteText(event.target.value)
	}

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText)
			setNoteText('')
		}
	}

	return (
		<div className='note new'>
			<textarea
				cols='100'
				rows='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note__footer'>
				<small>200 Remaining</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	)
}

export default AddNote