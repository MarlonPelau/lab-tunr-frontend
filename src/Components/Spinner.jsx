// Components/Review.jsx
import { useState } from 'react'
import SpinnerForm from './SpinnerForm'
function Spinner({ spinner, handleDelete, handleEdit }) {
  const [viewEditForm, setViewEditForm] = useState(false)
  const toggleView = () => {
    setViewEditForm(!viewEditForm)
  }
  return (
    <div className="Spinner">
      {viewEditForm ? (
        <SpinnerForm
          spinnerDetails={spinner}
          toggleView={toggleView}
          handleEdit={handleEdit}
        />
      ) : (
        <div>
          <h4>
            {spinner.titles} <span>{"🍣".repeat(spinner.playlist)}</span>
          </h4>
          <h5>{spinner.DJ}</h5>
          <p>{spinner.content}</p>
        </div>
      )}
      <div className="spinner-actions">
        <button onClick={toggleView}>
          {viewEditForm ? 'Cancel' : 'Edit this spinner'}
        </button>
        <button onClick={() => handleDelete(spinner.id)}>delete</button>
      </div>
    </div>
  )
}

export default Spinner