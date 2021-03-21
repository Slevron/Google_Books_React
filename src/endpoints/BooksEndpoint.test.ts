import axios, { AxiosResponse } from "axios";
import { BooksEndpoint } from "./BooksEndpoint";
import data from "../mock/data.json";

const mockedResponse: AxiosResponse = {
  data: {
    items: data
  } ,
  status: 200,
  statusText: "OK",
  headers: {},
  config: {},
};
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('BooksEndpoint', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('check getList receive data', async () => {
    mockedAxios.get.mockResolvedValue(mockedResponse);
  
    expect(axios.get).not.toHaveBeenCalled();
    const actual = await BooksEndpoint(mockedAxios).getList({q: 'Harry'});
    
    expect(axios.get).toHaveBeenCalled();
    expect(actual.items).toBe(data);
  })
})
