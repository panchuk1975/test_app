import React, { useState } from "react";
var moment = require("moment");

const Notes = ({
  notesArray,
  newNote,
  note,
  addNoteThunkCreator,
  changeNoteThunkCreator,
  deleteNoteThunkCreator,
  fetchNoteThunkCreator,
}) => {
  const [form, setForm] = useState({ ...newNote });
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.currentTarget.value });
  };
  //-------------------------Count number---------------------------//
  let number =  moment(new Date()).format("DD-MM-YY HH:mm");
  notesArray.sort((a, b) => a.number - b.number);
  console.log(note)
  return (
    <div>
      <h1 >Notes</h1>
      <fieldset>
      <legend>Current note</legend>
      <h2>{note.firstName}</h2>
      </fieldset>
      <form>
        <fieldset>
          <legend>Create new note</legend>
          <label htmlFor="firstName" >
            First name{" "}
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="Ім'я"
            value={form.firstName}
            name="firstName"
            onChange={changeHandler}
            required
          />
          <label >
            Second name
            <input
              type="text"
              className="formInput"
              placeholder="Призвіще"
              value={form.secondName}
              name="secondName"
              onChange={changeHandler}
              required
            />
          </label>
          <label>
            Status
            <select
              type="text"
              value={form.status}
              name="status"
              onChange={changeHandler}
            >
              <option value="Busy">Busy</option>
              <option value="No busy">No busy</option>
            </select>
          </label>
        </fieldset>
      </form>
      <button onClick={() => addNoteThunkCreator(form, number)}>
        Submit
      </button>
      {notesArray.map((note) => {
        //-----------------------Simply Index of Array----------------------//
        //var index = profilesArray.findIndex((el) => el.id === profile.id);
        //console.log(index);
        return (
          <div key={note.id} >
            <p onClick={()=>fetchNoteThunkCreator(note.id)}>
              {note.number}
              {" "} {note.firstName} {note.secondName} {note.status} 
            </p>
            <button onClick={() => deleteNoteThunkCreator(note.id)}>
              Delete
            </button>
            <button
              onClick={() =>
                changeNoteThunkCreator({ ...form, number: note.number }, note.id)
              }
            >
              Change
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;