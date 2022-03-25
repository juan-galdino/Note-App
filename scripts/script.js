const form = document.querySelector('.form')
const yourNotes = document.querySelector('.yourNotes')

form.addEventListener('submit', e => {
  e.preventDefault()

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
}

// delete note
// edit note
