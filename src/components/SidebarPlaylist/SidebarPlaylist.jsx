import { Link } from 'react-router-dom'
import * as S from './styles'

function SidebarPlaylist({ isLoading, categories }) {
  return (
    <S.SidebarBlock>
      <S.SidebarList>
        {categories.map((category) => (
          <S.SidebarItem key={category.id}>
            <Link to={`/category/${category.id}`}>
              <S.SidebarLink>
                {isLoading ? (
                  <S.SidebarImg
                    src="img/Skeleton Sidebar.png"
                    alt="Skeleton Sidebar"
                  />
                ) : (
                  <S.SidebarImg
                    src={`${category.image}`}
                    alt={`${category.title}`}
                    title={`${category.description}`}
                  />
                )}
              </S.SidebarLink>
            </Link>
          </S.SidebarItem>
        ))}
      </S.SidebarList>
    </S.SidebarBlock>
  )
}

export default SidebarPlaylist
