const form = document.querySelector('#form')
const input = document.querySelector('#title')
const textarea = document.querySelector('#text')
const yourNotes = document.querySelector('.your-notes')

const allNotes = []

form.addEventListener('submit', event => {
  event.preventDefault()

  addNote()
})

function addNote() {
  yourNotes.innerHTML += `
  <div class="note">
  <p>Note</p>
  <h2>${input.value}</h2>
  <p>${textarea.value}</p>
  <button class="delete-note-btn" onclick="deleteNote()" >Delete Note</button>
  <button class="edit-note-btn" onclick="showModalEdit(this)">Edit note</button>
  </div>  
  `
  let id = Date.now()
  let note = {
    id: id,
    title: input.value,
    text: textarea.value
  }

  allNotes.push(note)

  input.focus()
  form.reset()
  // console.log(allNotes)
}

function deleteNote(event) {
  let noteToRemove = event.parentElement
  yourNotes.removeChild(noteToRemove)
  console.log('success on remove the note')
}

function showModalEdit(element) {
  const modalToEdit = document.querySelector('.modal')
  const editionForm = document.querySelector('.edition-form')
  const editInput = document.querySelector('#edit-input')
  const editTextarea = document.querySelector('#edit-textarea')

  modalToEdit.style.display = 'block'

  editionForm.addEventListener('submit', event => {
    event.preventDefault()

    element.parentElement.innerHTML = `
    
    <p>Note</p>
    <h2>${editInput.value}</h2>
    <p>${editTextarea.value}</p>
    <button class="delete-note-btn" onclick="deleteNote()" >Delete Note</button>
    <button class="edit-note-btn" onclick="showModalEdit(this)">Edit note</button>  
  `

    modalToEdit.style.display = 'none'

    editionForm.reset()
  })
}

// [x] add note. A simple += after innerHTML code made this function easier to read and manipulate.
// [] delete note
// [] edit note: innerHTML is not working, so i'll try with this modal. Modal is with a bug, maybe if I create a New modal when editButton is triggered, perhaps I can solve this bug removing the modal when it is finished.
// in the future: note counter, created date. Last modified. local storage. Modal to delete note. Modal to edit note.
