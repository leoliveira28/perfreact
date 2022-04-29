
import { FormEvent, useState } from 'react'
import { SearchResults } from '../components/SearchResults';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [results, setResults] = useState([])
  const [search, setSearch] = useState('');
  async function handleSearch(event: FormEvent) {

    event.preventDefault();
    if(!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q${search}`)
    const data = await response.json(); 
    setResults(data)
    setSearch('')
  }
  
  return (
    <div>
      <h1>
        Search
      </h1>
      <form onSubmit={handleSearch}>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)}></input>
        <button>Buscar</button>
      </form>
      <SearchResults results={results} />
    </div>
  )
}
