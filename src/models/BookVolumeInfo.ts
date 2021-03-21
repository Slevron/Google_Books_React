export interface BookVolumeInfo {
  title: string,
  authors: string[],
  imageLinks: BookVolumeImageLinks,
  description: string,
  categories: string[],
}

interface BookVolumeImageLinks {
  thumbnail: string,
}
