import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// purposely using the word props now so i can distinguish between handleEdit and handleAdd
function SpinnerForm({
  spinnerDetails,
  handleEdit,
  handleAdd,
  toggleView,
  children,
}) {
  const { id } = useParams()

  const [newOrUpdatedSpinner, setNewOrUpdatedSpinner] = useState({
    performer: '',
    playlist: '',
    titles: '',
    DJ: '',
    content: '',
    tune_id: id,
  })

  const handleTextChange = (event) => {
    setNewOrUpdatedSpinner({
      ...newOrUpdatedSpinner,
      [event.target.id]: event.target.value,
    })
  }

  useEffect(() => {
    if (spinnerDetails) {
      setNewOrUpdatedSpinner(spinnerDetails)
    }
  }, [spinnerDetails])

  const handleSubmit = (event) => {
    event.preventDefault()
    //if there are spinnerDetails, it means that we are editing, otherwise we are creating a new spinner.
    // here we are now using the actual function names instead of handleSubmit for both functions
    if (spinnerDetails) {
      handleEdit(newOrUpdatedSpinner, id)
    } else {
      handleAdd(newOrUpdatedSpinner)
    }

    //after i submit, toggle this view back to displaying the spinner
    if (spinnerDetails) {
      toggleView()
    }
    setNewOrUpdatedSpinner({
        performer: '',
        playlist: '',
        titles: '',
        DJ: '',
        content: '',
        tune_id: id,
      })
  }
  return (
    <div className="Edit">
      {children}
      <form onSubmit={handleSubmit}>
        <label htmlFor="DJ">Name:</label>
        <input
          id="DJ"
          value={newOrUpdatedSpinner.DJ}
          type="text"
          onChange={handleTextChange}
          placeholder="Your name"
          required
        />
        <label htmlFor="titles">Titles:</label>
        <input
          id="titles"
          type="text"
          required
          value={newOrUpdatedSpinner.titles}
          onChange={handleTextChange}
        />
        <label htmlFor="playlist">Playlist:</label>
        <input
          id="playlist"
          type="text"
          name="playlist"
          value={newOrUpdatedSpinner.playlist}
          onChange={handleTextChange}
        />
        <label htmlFor="content">The Quote:</label>
        <textarea
          id="content"
          type="text"
          name="content"
          value={newOrUpdatedSpinner.content}
          placeholder="Who said..what?"
          onChange={handleTextChange}
        />

        <br />

        <input type="submit" />
      </form>
    </div>
  )
}

export default SpinnerForm