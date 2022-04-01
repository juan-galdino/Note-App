const form = document.querySelector('.form')
const input = document.querySelector('.note-title')
const textarea = document.querySelector('.note-text')
const yourNotes = document.querySelector('.yourNotes')
const modal = document.querySelector('.modal')
const allNotes = []
let id = 0

form.addEventListener('submit', event => {
  event.preventDefault()

  addNote()
  form.reset()
})

function addNote() {
  yourNotes.innerHTML += `
  <div class="note">
    <p>Note</p>
    <h2>${input.value}</h2>
    <p>${textarea.value}</p>
    <button class="button delete-note-btn" onclick="deleteNote(this)" >Delete Note</button>
    <button class="button edit-note-btn" onclick="editNote(this)" >Edit note</button>
  </div>  
  `

  input.focus()
}

function deleteNote(event) {
  let noteToRemove = event.target.parentElement
  yourNotes.removeChild(noteToRemove)
  console.log('success on remove the note')
}

function editNote(event) {
  modal.style.display = 'block'

  let closeBtn = document.querySelector('.close-btn')
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
  })

  let noteToEdit = event.target.parentElement
  console.log(allNotes.find(noteToEdit === note.id.value))

  let editForm = modal.firstElementChild.lastElementChild

  // console.log(noteToEdit.children[1].textContent)

  // let titleValue = noteToEdit.childNodes[1]
  // // let textValue = noteToEdit.childNodes[2]

  // editForm[0].value = titleValue.textContent

  // editForm[0].addEventListener('change', event => {
  //   titleValue.textContent = event.target.value

  //   console.log(event.target.value)
  // })

  // editForm.addEventListener('submit', event => {
  //   event.preventDefault()
  //   // editForm.reset()

  //   modal.style.display = 'none'
  // })
}

// [x] add note. A simple += after innerHTML code made this function easier to read and manipulate.
// [] delete note
// [] edit note: innerHTML is not working, so i'll try with this modal. Modal is with a bug, maybe if I create a New modal when editButton is triggered, perhaps I can solve this bug removing the modal when it is finished.
// in the future: note counter, created date. Last modified. local storage. Modal to delete note. Modal to edit note.
