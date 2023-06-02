import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea({ addNote, notes }) {
	const [flag, setFlag] = useState(false);
	const [note, setNote] = useState({
		title: "",
		content: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	};

	const submitNote = (e) => {
		e.preventDefault();
		addNote(note);
		setNote({ title: "", content: "" });
	};

	const handleClick = () => {
		setFlag(true);
	};

	return (
		<div>
			<form className="create-note">
				{flag && (
					<input
						name="title"
						placeholder="title"
						value={note.title}
						onChange={handleChange}
					/>
				)}

				<textarea
					name="content"
					placeholder="Take a note..."
					value={note.content}
					rows={flag ? 3 : 1}
					onChange={handleChange}
                    onClick={handleClick}
				></textarea>

				<Zoom in={flag}>
					<Fab onClick={submitNote}>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
