function Patient({pacient, setPaciente, deletePacient}) {

  const { namePuppet,
          nameOwner,
          email,
          alta,
          symtomps,
          id } = pacient

  const handleDelete = () => {
    const result = confirm('Deseas eliminar este registro')
    if(result) {
      deletePacient(id)
    }
  }

  return (
    <div className="m-3 bg-white shadow-md rounded-md px-5 pt-10 pb-6">
        <p className="font-bold mb-2 text-gray-700 uppercase">Nombre Mascota <span className="font-normal normal-case">{namePuppet}</span></p>
        <p className="font-bold mb-2 text-gray-700 uppercase">Nombre Propietario <span className="font-normal normal-case">{nameOwner}</span></p>
        <p className="font-bold mb-2 text-gray-700 uppercase">Email <span className="font-normal normal-case">{email}</span></p>
        <p className="font-bold mb-2 text-gray-700 uppercase">Fecha alta <span className="font-normal normal-case">{alta}</span></p>
        <p className="font-bold mb-2 text-gray-700 uppercase">Sintomas <span className="font-normal normal-case">{symtomps}</span></p>
        <hr className="mt-4" />
        <div className="pt-5 text-right">
            <button
              type="button"
              className="py-2 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-950 text-white uppercase font-bold"
              onClick={() => setPaciente(pacient)}
            >Editar</button>
            <button
              type="button"
              className="py-2 px-4 rounded-lg bg-red-600 hover:bg-red-950 text-white ml-4 uppercase font-bold"
              onClick={handleDelete}
            >Borrar</button>
        </div>
    </div>
  )
}

export default Patient