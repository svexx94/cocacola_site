import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Search() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim() === '') return
    navigate(`/search?q=${query}`)
    setQuery('')
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Поиск..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Найти</button>
    </form>
  )
}

export default Search