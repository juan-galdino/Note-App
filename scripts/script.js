const form = document.querySelector('.form')
const yourNotes = document.querySelector('.yourNotes')

form.addEventListener('submit', event => {
  event.preventDefault()

  addNote()
  form.reset()
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
  deleteNoteBtn.classList.add('delete-note-btn')
  editNoteBtn.classList.add('edit-note-btn')

  div.appendChild(noteCount)
  div.appendChild(noteTitle)
  div.appendChild(noteText)
  div.appendChild(deleteNoteBtn)
  div.appendChild(editNoteBtn)

  yourNotes.appendChild(div)

  deleteNoteBtn.addEventListener('click', deleteNote)
  editNoteBtn.addEventListener('click', editNote)
}

function deleteNote(event) {
  let noteToRemove = event.target.parentElement
  yourNotes.removeChild(noteToRemove)
  console.log('success on remove the note')
}

function editNote(event) {
  const modal = document.querySelector('.modal')
  modal.style.display = 'block'

  const closeBtn = document.querySelector('.close-btn')
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
  })

  const noteToEdit = event.target.parentElement

  let titleValue = noteToEdit.children[1]
  let textValue = noteToEdit.children[2]

  const editForm = modal.firstElementChild.lastElementChild
  editForm[0].value = titleValue.textContent
  editForm[1].value = textValue.textContent

  editForm.addEventListener('submit', event => {
    event.preventDefault()

    console.log(titleValue, editForm[0].value)
    modal.style.display = 'none'
  })
}

// [x] delete note
// [] edit note: innerHTML is not working, so i'll try with this modal. Modal is with a bug, maybe if I create a New modal when editButton is triggered, perhaps I can solve this bug removing the modal when it is finished.
// in the future: note counter, created date. Last modified. local storage. Modal to delete note. Modal to edit note.
