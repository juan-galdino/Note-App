const form = document.querySelector('#form')
const input = document.querySelector('#title')
const textarea = document.querySelector('#text')
const yourNotes = document.querySelector('.your-notes')

let allNotes = []

function loadData() {
  console.log('loaded')
  // localStorage.clear()

  allNotes = JSON.parse(localStorage.getItem('userNotes'))

  if (allNotes === null) {
    console.log('nothing in the local storage')
    allNotes = []
  } else {
    console.log(
      'We do have ' + allNotes.length + ' note(s) in the local storage'
    )
    console.log(allNotes)

    allNotes.forEach(note => {
      yourNotes.innerHTML += `
      <div class="note">
        <p>Note</p>
        <h2>${note.title}</h2>
        <p>${note.text}</p>
        <button class="delete-note-btn" onclick="deleteNote(this)" >Delete Note</button>
        <button class="edit-note-btn" onclick="editNote(this)">Edit note</button>
      </div>

      `
    })
  }
}

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
    <button class="delete-note-btn" onclick="deleteNote(this)" >Delete Note</button>
    <button class="edit-note-btn" onclick="editNote(this)">Edit note</button>
  </div>  
  `

  let note = {
    title: input.value,
    text: textarea.value
  }

  allNotes.push(note)

  localStorage.setItem('userNotes', JSON.stringify(allNotes))

  input.focus()
  form.reset()
}

function deleteNote(element) {
  yourNotes.removeChild(element.parentElement)
}

function editNote(element) {
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
    <button class="delete-note-btn" onclick="deleteNote(this)" >Delete Note</button>
    <button class="edit-note-btn" onclick="editNote(this)">Edit note</button>  
  `

    editionForm.reset()

    modalToEdit.style.display = 'none'
  })
}

// [x] add note. A simple += after innerHTML code made this function easier to read and manipulate.
// [] delete note
// [] edit note: Modal was created and can manipulate the Html elements.
// in the future: note counter, created date. Last modified. local storage. Modal to delete note. Modal to edit note.
