import { Link, useParams } from 'react-router-dom'

import { CATEGORIES } from '../../constants'

export function Category() {
  const params = useParams()

  const selectedCategory = CATEGORIES.find(
    (category) => category.id === Number(params.id),
  )

  return (
    <div>
      <h1>Вы выбрали категорию: {selectedCategory.title}</h1>
      <p>{selectedCategory.description}</p>
      <h2>Страница на доработке</h2>
      <Link to="/">Назад на главную</Link>
    </div>
  )
}

export default Category
