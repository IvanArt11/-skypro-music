import * as S from './styles'

function SidebarPlaylist({ isLoading }) {
  return (
    <S.SidebarBlock>
      <S.SidebarList>
        <S.SidebarItem>
          <S.SidebarLink href="http://">
            {isLoading ? (
              <S.SidebarImg
                src="img/Skeleton Sidebar.png"
                alt="Skeleton Sidebar"
              />
            ) : (
              <S.SidebarImg src="img/playlist01.png" alt="day's playlist" />
            )}
          </S.SidebarLink>
        </S.SidebarItem>
        <S.SidebarItem>
          <S.SidebarLink href="http://">
            {isLoading ? (
              <S.SidebarImg
                src="img/Skeleton Sidebar.png"
                alt="Skeleton Sidebar"
              />
            ) : (
              <S.SidebarImg src="img/playlist02.png" alt="day's playlist" />
            )}
          </S.SidebarLink>
        </S.SidebarItem>
        <S.SidebarItem>
          <S.SidebarLink href="http://">
            {isLoading ? (
              <S.SidebarImg
                src="img/Skeleton Sidebar.png"
                alt="Skeleton Sidebar"
              />
            ) : (
              <S.SidebarImg src="img/playlist03.png" alt="day's playlist" />
            )}
          </S.SidebarLink>
        </S.SidebarItem>
      </S.SidebarList>
    </S.SidebarBlock>
  )
}

export default SidebarPlaylist
