export default {
  url: "/api/testGet",
  method: "get",
  response: ({ query }) => {
    console.log("/api/testGet, getRoleById: id>>>>>>>>", query.id)
    return {
      code: 0,
      message: "ok",
      data: {
        roleName: "admin",
        roleValue: "admin",
      },
    }
  },
}
