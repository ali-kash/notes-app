import { VscTrash } from 'react-icons/vsc'

const Note = ({ id, text, date }) => {
	return (
		<div className='note' id={id}>
			<span>{text}</span>
			<div className='note__footer'>
				<small>{date}</small>
				<VscTrash className='delete-icon' size='1.2em' />
			</div>
		</div>
	)
}

export default Note
