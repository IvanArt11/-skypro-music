const host = 'https://painassasin.online/'
let url = ''

export const getTracksAll = async () => {
  url = 'catalog/track/all/'
  return fetch(host + url, {
    method: 'GET',
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error()
    })
    .then((json) => json)
}

export const fetchLogin = async (email, password) => {
  url = 'user/login/'
  return fetch(host + url, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  }).then((response) => {
    if (response.status === 200) {
      return response.json()
    }
    if (response.status === 401) {
      throw new Error('Аккаунт не найден')
    }

    throw new Error('Ошибка сервера')
  })
}

export const fetchRegister = async (email, password) => {
  url = 'user/signup/'
  return fetch(host + url, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      username: email,
    }),
    headers: {
      'content-type': 'application/json',
    },
  }).then((response) => {
    if (response.status === 200) {
      return response.json()
    }
    if (response.status === 400) {
      throw new Error('Такой аккаунт уже существует')
    }

    throw new Error('Ошибка сервера')
  })
}

// export const getTracksAll = () =>
//   fetch('https://painassasin.online/catalog/track/all/', {
//     method: 'GET',
//   })
//     .then((response) => {
//       if (response.ok) {
//         return response.json()
//       }
//       throw Error('Ошибка сервера')
//     })
//     .then((json) => json)

// export default getTracksAll

// export const fetchRegister = async (email, password) =>
//   fetch('https://painassasin.online/user/signup/', {
//     method: 'POST',
//     body: JSON.stringify({
//       email,
//       password,
//       username: email,
//     }),
//     headers: {
//       'content-type': 'application/json',
//     },
//   }).then((response) => {
//     if (response.status === 200) {
//       return response.json()
//     }
//     if (response.status === 401) {
//       throw new Error('Такой аккаунт уже существует')
//     }
//     throw new Error('Ошибка сервера')
//   })

// export const fetchLogin = async (email, password) =>
//   fetch('https://painassasin.online/user/login/', {
//     method: 'POST',
//     body: JSON.stringify({
//       email,
//       password,
//     }),
//     headers: {
//       'content-type': 'application/json',
//     },
//   }).then((response) => {
//     if (response.status === 200) {
//       return response.json()
//     }
//     if (response.status === 401) {
//       throw new Error('Аккаунт не найден')
//     }
//     throw new Error('Ошибка сервера')
//   })
