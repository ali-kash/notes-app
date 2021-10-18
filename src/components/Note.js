import { VscTrash } from 'react-icons/vsc'

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note' id={id}>
			<span>{text}</span>
			<div className='note__footer'>
				<small>{date}</small>
				<div className='delete-icon' onClick={() => handleDeleteNote(id)}>
					<VscTrash size='1.2em' />
				</div>
			</div>
		</div>
	)
}

export default Note
