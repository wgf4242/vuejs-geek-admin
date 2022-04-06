const tokens = {
  dasheng: "dashengToken",
  wang: "wangToken",
}

export default {
  url: "/geek-admin/user/login",
  method: "post",
  response: config => {
    const { username } = config.body
    const token = tokens[username]
    // mock error
    if (username !== "dasheng") {
      return {
        code: 60204,
        message: "Account and password are incorrect.",
      }
    }
    return {
      code: 20000,
      data: token,
    }
  },
}
