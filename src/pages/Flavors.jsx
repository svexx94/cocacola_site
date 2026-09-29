function Flavors() {
  const flavors = [
    { name: 'Classic', desc: 'Оригинальный вкус' },
    { name: 'Zero Sugar', desc: 'Ноль сахара' },
    { name: 'Vanilla', desc: 'С ванилью' },
    { name: 'Cherry', desc: 'Вишнёвый вкус' },
    { name: 'Light', desc: 'Лёгкая версия' },
    { name: 'Cherry Zero', desc: 'Вишня без сахара' },
  ]

  return (
    <div className="page">
      <h1>Наши вкусы</h1>
      <ul>
        {flavors.map((f) => (
          <li key={f.name}>
            <strong>{f.name}</strong> — {f.desc}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Flavors