import "./App.css";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useEffect, useState } from "react";

function App() {
	const getLocalNotes = () => {
		let Notes = localStorage.getItem("Notes");
		if (Notes) {
			return JSON.parse(Notes);
		} else {
			return [];
		}
	};

	const [notes, setNotes] = useState(getLocalNotes());

	const addNote = (noteItem) => {
		setNotes([...notes, noteItem]);
	};

	const deleteNote = (id) => {
		setNotes(notes.filter((noteItem, index) => index !== id));
	};

	useEffect(() => {
		localStorage.setItem("Notes", JSON.stringify(notes));
	}, [notes]);

	return (
		<div className="App">
			<Header />
			<CreateArea addNote={addNote} notes={notes} />
			{notes.map((noteItem, index) => (
				<Note
					key={index}
					id={index}
					title={noteItem.title}
					content={noteItem.content}
					deleteNote={deleteNote}
				/>
			))}
		</div>
	);
}

export default App;
