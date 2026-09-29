import { Link } from 'react-router-dom'

function Home() {
  const cards = [
    {
      title: 'Классическая',
      text: 'Оригинальный вкус с 1886 года',
      img: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600',
    },
    {
      title: 'Zero Sugar',
      text: 'Тот же вкус без сахара',
      img: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=600',
    },
    {
      title: 'Cherry',
      text: 'Вишнёвая классика',
      img: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=600',
    },
  ]

  return (
    <div>
      <section className="hero">
        <h1>Taste the Feeling</h1>
        <p>Легендарный вкус, который объединяет мир</p>
        <Link to="/flavors">
          <button>Смотреть вкусы</button>
        </Link>
      </section>

      <section className="section">
        <h2>Наши хиты</h2>
        <div className="cards">
          {cards.map((c) => (
            <div className="card" key={c.title}>
              <img src={c.img} alt={c.title} />
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Немного истории</h2>
        <div className="page">
          <p>
            8 мая 1886 года фармацевт Джон Пембертон сварил в Атланте первый
            сироп, который вскоре стал самым известным напитком в мире.
          </p>
          <p>
            Название придумал его бухгалтер Фрэнк Робинсон — именно он написал
            те самые курсивные буквы, которые мы видим на бутылке до сих пор.
          </p>
          <p>
            Сегодня Coca-Cola продаётся более чем в 200 странах и является
            одним из самых узнаваемых брендов в мире.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home