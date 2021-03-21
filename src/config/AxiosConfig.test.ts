import { NameAPI } from "../enum/NameApi"
import { AxiosConfig } from "./AxiosConfig"

test('config assignement', () => {
  AxiosConfig.push({
    name: 'test',
    config: {}
  })
  expect(AxiosConfig[0].name).toBe(NameAPI.Google_Book);
  expect(AxiosConfig.length).toBe(2);
  expect(AxiosConfig[0].name).toBe(NameAPI.Google_Book);
})