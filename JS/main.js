import NotesAPI from "./NotesAPI.js";
import NotesView from "./NoteView.js";

const app = document.getElementById("app");
const view = new NotesView(app, {
    onNoteAdd() {
         console.log("Note has been added");
    },

    onNoteEdit(newTitle, newBody) {
        console.log(newTitle);
        console.log(newBody);
   },

   onNoteSelect(id) {
     console.log("note has been selected" + id);
   },

   onNoteDelete(id) {
     console.log("note has been deleted" + id);
   }
});

const notes = NotesAPI.getAllNotes();

view.updateNoteList(notes);
view.updateActiveNote(notes[0]);