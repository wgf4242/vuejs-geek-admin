export default {
  url: "/api/testPost",
  method: "post",
  response: config => {
    const body = config.body
    console.log("/api/testPost body", body)
    return {
      message: "ok",
    }
  },
}
