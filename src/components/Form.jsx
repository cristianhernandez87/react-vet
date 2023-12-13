import { useState, useEffect } from 'react';

import { getId } from '../helpers';
import Error from './Error';

function Form({pacients, setPacientes, pacient}) {
    
    const [ namePuppet, setNamePuppet ] = useState('');
    const [ nameOwner, setNameOwner ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ alta, setAlta ] = useState('');
    const [ symtomps, setSymtomps ] = useState('');
    const [ error, setError ] = useState(false)

    useEffect(() => {
      if(Object.keys(pacient).length > 0) {
        setNamePuppet(pacient.namePuppet)
        setNameOwner(pacient.nameOwner)
        setEmail(pacient.email)
        setAlta(pacient.alta)
        setSymtomps(pacient.symtomps)
      }
    }, [pacient])

    const handleSubmit = (e) => {
      e.preventDefault();
      
      // validate form
      if([namePuppet, nameOwner, email, alta, symtomps].includes('')) {
        setError(true)
        return
      }
      setError(false)

      // puppet obj
      const objectPuppet = {
        namePuppet,
        nameOwner,
        email,
        alta,
        symtomps,
      }

      if(pacient.id) {
        // edit register
        objectPuppet.id = pacient.id
        const pacientUpdate = pacients.map( pacientState => pacientState.id === pacient.id ? objectPuppet : pacientState )
        setPacientes(pacientUpdate)
      } else {
        // new regsiter
        objectPuppet.id = getId()
        setPacientes([...pacients, objectPuppet])
      }

      // reset form
      setNamePuppet('')
      setNameOwner('')
      setEmail('')
      setAlta('')
      setSymtomps('')
    }

  return (
    <div className="md:w-1/2 lg:w-2/5 mb-10 px-3">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{' '}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      {error && <Error message='Todos los campos son obligatorios'/>}
      <form
        className="bg-white shadow-md px-5 py-10 rounded-lg"
        onSubmit={handleSubmit}
        >
        <div className="mb-5">
          <label
            htmlFor="nombreMascota"
            className="block mb-2 text-gray-700 font-bold uppercase"
          >
            Nombre Mascota
          </label>
          <input
            id="nombreMascota"
            className="border-2 p-2 w-full placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre Mascota"
            value={namePuppet}
            onChange={ (e) => setNamePuppet(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="nombrePropietario"
            className="block mb-2 text-gray-700 font-bold uppercase"
          >
            Nombre Propietario
          </label>
          <input
            id="nombrePropietario"
            className="border-2 p-2 w-full placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre Propietario"
            value={nameOwner}
            onChange={ (e) => setNameOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-gray-700 font-bold uppercase"
          >
            Email
          </label>
          <input
            id="email"
            className="border-2 p-2 w-full placeholder-gray-400 rounded-md"
            type="email"
            placeholder="Email contacto Propietario"
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block mb-2 text-gray-700 font-bold uppercase"
          >
            Alta
          </label>
          <input
            id="alta"
            className="border-2 p-2 w-full placeholder-gray-400 rounded-md"
            type="date"
            value={alta}
            onChange={ (e) => setAlta(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block mb-2 text-gray-700 font-bold uppercase"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 p-2 w-full placeholder-gray-400 rounded-md"
            placeholder="Describe los Sintomas"
            value={symtomps}
            onChange={ (e) => setSymtomps(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <input
            id="send"
            className="bg-indigo-600 w-full text-white uppercase font-bold rounded-lg p-3 hover:bg-indigo-900 cursor-pointer transition-all"
            type="submit"
            value={ pacient.id ? 'Editar' : 'Guardar'}
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
