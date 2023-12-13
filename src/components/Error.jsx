function Error({message}) {
  return (
    <div className="text-center bg-red-800 mb-3 py-3 rounded-lg">
      <p className="text-white">{message}</p>
    </div>
  )
}

export default Error