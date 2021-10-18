import { useState } from 'react'
import { nanoid } from 'nanoid'
import NotesList from './components/NotesList'

import './styles/global.scss'

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'First Note',
			date: '15/04/2021',
		},
		{
			id: nanoid(),
			text: 'Second Note',
			date: '17/05/2021',
		},
	])

	const addNote = (text) => {
		const date = new Date()
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		}
		const newNotes = [...notes, newNote]
		setNotes(newNotes)
	}

	return (
		<div className='app'>
			<div className='container'>
				<NotesList notes={notes} handleAddNote={addNote} />
			</div>
		</div>
	)
}

export default App
