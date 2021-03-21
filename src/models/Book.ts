import { BookVolumeInfo } from './BookVolumeInfo'

export interface IBook {
  kind: string,
  id: string,
  etag: string,
  selfLink: string,
  volumeInfo: BookVolumeInfo,
}