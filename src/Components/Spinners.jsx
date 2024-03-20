// src/Reviews.jsx
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'
import SpinnerForm from './SpinnerForm';

const API = import.meta.env.VITE_BASE_URL

function Spinners() {
  const [spinners, setSpinners] = useState([])
  let { id } = useParams()

  useEffect(() => {
    fetch(`${API}/tunes/${id}/spinners`)
      .then((response) => response.json())
      .then((data) => setSpinners(data.allSpinners))
  }, [id])

  // add this inside the Reviews() function
const handleAdd = (newSpinner) => {
    fetch(`${API}/tunes/${id}/spinners`, {
      method: 'POST',
      body: JSON.stringify(newSpinner),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setSpinners([data, ...spinners]))
      .catch((error) => console.error('catch', error))
  }

  // src/Reviews.jsx
const handleDelete = (id) => {
    fetch(`${API}/tunes/${id}/spinners/${id}`, {
      method: 'DELETE',
    })
      .then(
        (response) => {
          const copySpinnerArray = [...spinners]
          const indexDeletedSpinner = copySpinnerArray.findIndex((spinner) => {
            return spinner.id === id
          })
          copySpinnerArray.splice(indexDeletedSpinner, 1)
          setSpinners(copySpinnerArray)
        },
        (error) => console.error(error)
      )
      .catch((error) => console.warn('catch', error))
  }

  // src/Reviews.jsx
const handleEdit = (updatedSpinner) => {
    fetch(`${API}/tunes/${id}/spinners/${updatedSpinner.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedSpinner),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        const copySpinnerArray = [...spinners]
        const indexUpdatedSpinner = copySpinnerArray.findIndex((spinner) => {
          return spinner.id === updatedSpinner.id
        })
        copySpinnerArray[indexUpdatedSpinner] = responseJSON
        setSpinners(copySpinnerArray)
      })
      .catch((error) => console.error(error))
  }

  // replace the return statement with this code
return (
    <section className="Spinners">
      <h2>Spins</h2>
      <SpinnerForm handleAdd={handleAdd}>
        <h3>Add a New Spinner</h3>
      </SpinnerForm>
      {spinners.map((spinner) => (
        <Spinner key={spinner.id} spinner={spinner} handleDelete={handleDelete} handleEdit={handleEdit} />
      ))}
    </section>
  )}

export default Spinners