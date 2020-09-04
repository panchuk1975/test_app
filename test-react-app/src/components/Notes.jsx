import React, { useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  const [form, setForm] = useState({ ...newNote });
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.currentTarget.value });
  };
  //-------------------------Count number---------------------------//
  let number = moment(new Date()).format("DD-MM-YY HH:mm");
  notesArray.sort((a, b) => a.id - b.id);
  return (
    <div>
      <h1>{t("Notes.1")}</h1>
      <fieldset>
        <legend>{t("Current_note.1")}</legend>
        <h2>{note.text}</h2>
      </fieldset>
      <form>
        <fieldset>
          <legend>{t("New_note.1")}</legend>
          <label htmlFor="firstName">{t("First_name.1")} </label>
          <input
            id="firstName"
            type="text"
            placeholder="Ім'я"
            value={form.firstName}
            name="firstName"
            onChange={changeHandler}
            required
          />
          <label>
            {t("Second_name.1")}
            <input
              type="text"
              className="formInput"
              placeholder="Призвіще"
              value={form.secondName}
              name="secondName"
              onChange={changeHandler}
            />
          </label>
          <label>
            {t("Enter_note_text.1")}
            <textarea
              type="text"
              className="form-control"
              placeholder="Enter text"
              value={form.text}
              name="text"
              onChange={changeHandler}
            />
          </label>
          <label>
            {t("Set_status.1")}
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
          <button onClick={() => addNoteThunkCreator(form, number)}>
            {t("Enter.1")}
          </button>
        </fieldset>
      </form>
      {notesArray.map((note) => {
        //-----------------------Simply Index of Array----------------------//
        //var index = profilesArray.findIndex((el) => el.id === profile.id);
        //console.log(index);
        return (
          <div key={note.id}>
            <p onClick={() => fetchNoteThunkCreator(note.id)}>
              {note.number} {note.firstName} {note.secondName} {note.status}
            </p>
            <button onClick={() => deleteNoteThunkCreator(note.id)}>
              Delete
            </button>
            <button
              onClick={() =>
                changeNoteThunkCreator(
                  { ...form, number: note.number },
                  note.id
                )
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
