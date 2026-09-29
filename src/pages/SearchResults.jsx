import { useSearchParams } from 'react-router-dom'

const data = [
  { title: 'Классическая Coca-Cola', text: 'Оригинальный вкус с 1886 года' },
  { title: 'Coca-Cola Zero', text: 'Без сахара, но с тем же вкусом' },
  { title: 'История бренда', text: 'Как напиток покорил мир' },
  { title: 'Джон Пембертон', text: 'Создатель Coca-Cola' },
]

function SearchResults() {
  const [params] = useSearchParams()
  const q = params.get('q') || ''

  const results = data.filter(
    (item) =>
      item.title.toLowerCase().includes(q.toLowerCase()) ||
      item.text.toLowerCase().includes(q.toLowerCase())
  )

  return (
    <div className="page">
      <h1>Результаты поиска</h1>
      <p>Запрос: "{q}"</p>
      {results.length === 0 ? (
        <p>Ничего не найдено</p>
      ) : (
        <ul>
          {results.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <br />
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchResults