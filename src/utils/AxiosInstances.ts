import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { AxiosConfig } from "../config/AxiosConfig";

interface IAxiosInstances {
  create(
    name:string, 
    config?: AxiosRequestConfig
  ): Map<string, AxiosInstance> | null;
  find(name:string): AxiosInstance | undefined;
}

class Instances implements IAxiosInstances {
  readonly instances: Map<string, AxiosInstance> = new Map();
  public initInstances() {
    AxiosConfig.forEach(({ name, config }) => this.create(name, config));
  }

  public create(
    name: string, 
    config?: AxiosRequestConfig
  ): Map<string, AxiosInstance> | null {
    const instance = axios.create(config)
    if(this.find(name)) {
      return null;
    }

    return this.instances.set(name, instance)
  }

  public find(name: string): AxiosInstance | undefined {
    const instance = this.instances.get(name);

    return instance;
  }
}

export const AxiosInstances = new Instances();

