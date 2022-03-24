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

  noteCount.textContent = 'Note'
  noteTitle.textContent = input.value
  noteText.textContent = textarea.value

  div.appendChild(noteCount)
  div.appendChild(noteTitle)
  div.appendChild(noteText)
  div.classList.add('note')

  // Need to add the last buttons

  console.log(div)
  // yourNotes.innerHTML = `
  // <div class="note">
  //   <p>Note</p>
  //   <h2>${noteTitle}</h2>
  //   <p>${noteDetails}></p>
  //   <button class="button delete-note">Delete Note</button>
  //   <button class="button edit-note">Edit note</button>
  // </div>`
}
