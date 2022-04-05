function getToken() {
  const token = localStorage.getItem("token")
  if (!token) {
    return
  }

  const tokenObj = JSON.parse(token)
  return tokenObj
}

export { getToken }
