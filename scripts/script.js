const form = document.querySelector('.form')
const yourNotes = document.querySelector('.yourNotes')

form.addEventListener('submit', event => {
  event.preventDefault()

  addNote()
})

// create and add new HTML elements on document.

function addNote() {
  let input = document.querySelector('.note-title')
  let textarea = document.querySelector('.note-text')

  let div = document.createElement('div')
  let noteCount = document.createElement('p')
  let noteTitle = document.createElement('h2')
  let noteText = document.createElement('p')
  let deleteNoteBtn = document.createElement('button')
  let editNoteBtn = document.createElement('button')

  noteCount.textContent = 'Note'
  noteTitle.textContent = input.value
  noteText.textContent = textarea.value
  deleteNoteBtn.textContent = 'Delete Note'
  editNoteBtn.textContent = 'Edit Note'

  div.classList.add('note')
  deleteNoteBtn.classList.add('delete-note')
  editNoteBtn.classList.add('edit-note')

  div.appendChild(noteCount)
  div.appendChild(noteTitle)
  div.appendChild(noteText)
  div.appendChild(deleteNoteBtn)
  div.appendChild(editNoteBtn)

  yourNotes.appendChild(div)
  console.log(div)

  deleteNoteBtn.addEventListener('click', deleteNote)
  editNoteBtn.addEventListener('click', editNote)
}

function deleteNote(event) {
  let noteToRemove = event.target.parentNode
  yourNotes.removeChild(noteToRemove)
  console.log('success on remove the note')
}

function editNote(event) {
  let noteToEdit = event.target.parentNode

  noteToEdit.innerHTML = `<p>Editing Note</p><br />
  <form class="form" action="" method="POST">
    <input
      class="note-title wd"
      type="text"
      name="note-title"
      placeholder="Type your new title"
    />
    <br />
    <textarea
      class="note-text wd"
      name="note-text"
      rows="10"
      placeholder="Change your text note"
    ></textarea>
    <br />
    <button class="cancel-edit">Cancel</button>
    <input class="edit-note" type="submit" value="Save Changes" />
  </form>`

  let editionForm = noteToEdit.childNodes[3]
  editionForm.addEventListener('submit', event => {
    event.preventDefault()
  })
}

// [x] delete note
// [] edit note: innerHTML is not working, so i'll try with modal
// in the future: note counter, created date. Last modified. local storage. Modal to delete note. Modal to edit note.
