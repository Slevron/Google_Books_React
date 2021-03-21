import { AxiosConfig } from "../config/AxiosConfig";
import { AxiosInstances } from "./AxiosInstances"
test('init axios instance with config', () => {
  AxiosInstances.initInstances();
  expect(AxiosInstances.find(AxiosConfig[0].name)).not.toBeUndefined();
  expect(AxiosInstances.instances.size).toBe(1);
})

test('create axios instance', () => {
  const instance = AxiosInstances.create(
    'Fake_Data', 
    {
      baseURL: "FakeUrl",
    }
  );
  expect(instance).not.toBeNull();
  expect(AxiosInstances.instances.size).toBe(2);
})

test('if duplicate axios instance return null', () => {
  const instance = AxiosInstances.create(
    'Fake_Data', 
    {
      baseURL: "FakeUrl",
    }
  );
  expect(instance).toBeNull();
  expect(AxiosInstances.instances.size).toBe(2);
})

test('find axios instance if exist', () => {
  AxiosInstances.create(
    'Fake_Data_2', 
    {
      baseURL: "FakeUrl",
    }
  );

  expect(AxiosInstances.instances.size).toBe(3);
  expect(AxiosInstances.find('Fake_Data')).not.toBeUndefined();
  expect(AxiosInstances.find('Fake_Data_2')).not.toBeUndefined();
})

test('dont find axios instance if not exist', () => {
  expect(AxiosInstances.find('Fake_Data_4')).toBeUndefined();
})