import { useState } from 'react'
import { nanoid } from 'nanoid'
import NotesList from './components/NotesList'
import Search from './components/Search'

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

	const [searchText, setSearchText] = useState('')

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

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id)
		setNotes(newNotes)
	}

	return (
		<div className='app'>
			<div className='container'>
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLocaleLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	)
}

export default App
