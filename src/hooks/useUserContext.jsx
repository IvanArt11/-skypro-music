import React from 'react'

export const UserContext = React.createContext(null)

export const useUserContext = () => {
  const user = React.useContext(UserContext)

  if (!user) {
    return console.log('Пользователь не найден')
  }
  return user
}

// import { createContext, useContext } from 'react'

// export const UserContext = createContext()

// export function useUserContext() {
//   return useContext(UserContext)
// }
