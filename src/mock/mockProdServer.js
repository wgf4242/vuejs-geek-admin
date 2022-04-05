import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer"
import testMockGet from "./testMock.get"
import testMockPost from "./testMock.post"
import userInfo from "./userInfo"
// import userMock1 from "./userInfo.1"

export function setupProdMockServer() {
  // createProdMockServer([...userMock, testMockGet, testMockPost])
  createProdMockServer([userInfo, testMockGet, testMockPost])
}
