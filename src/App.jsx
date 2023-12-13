import { useEffect, useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import ListPatients from './components/ListPatients'

function App() {

  const [ pacients, setPacientes ] = useState([])
  const [ pacient, setPaciente ] = useState({})

  // delete register
  const deletePacient = id => {
    const pacientUpdate = pacients.filter( pacient => pacient.id !== id)
    setPacientes(pacientUpdate)
  }

  useEffect(() => {
    const getLS = () => {
      const pacientLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientLS)
    }
    getLS()
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacients))
  }, [pacients])

  return (
    <div className="container mx-auto mt-12">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          pacients={pacients}
          setPacientes={setPacientes}
          pacient={pacient}
        />
        <ListPatients
          pacients={pacients}
          setPaciente={setPaciente}
          deletePacient={deletePacient}
        />
      </div>
    </div>
  )
}

export default App
