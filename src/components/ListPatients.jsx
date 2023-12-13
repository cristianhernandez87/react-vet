import Patient from "./Patient"


function ListPatients({pacients, setPaciente, deletePacient}) {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        {pacients && pacients.length ? (
          <>
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y <span className="text-indigo-600 font-bold">Administra Pacientes</span></p>
            { pacients.map( pacient => (
              <Patient
                key={pacient.id}
                pacient={pacient}
                setPaciente={setPaciente}
                deletePacient={deletePacient}
              />
            ))}
          </>

        ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">Comienza agregango<span className="text-indigo-600 font-bold"> Pacientes</span></p>
          </>
        )}
    </div>
  )
}

export default ListPatients