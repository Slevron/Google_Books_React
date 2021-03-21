enum BookParamDownload {
  Epub = 'epub',
}

enum BookParamFilter {
  Ebooks = 'ebooks',
  Free_Ebooks = 'free-ebooks',
  Full = 'full',
  Paid_Ebooks = 'paid-ebooks',
  Partial = 'partial',
}

enum BookParamLibraryRestrict {
  My_Library = 'my-library',
  No_Restrict = 'no-restrict',
}

enum BookParamOrderBy {
  Newest = 'newest',
  Relevance = 'relevance',
}

enum BookParamPrintType {
  All = 'all',
  Books = 'books',
  Magazines = 'magazines',
}

enum BookParamProjection {
  Full = 'full',
  Lite = 'lite'
}

export {
  BookParamDownload,
  BookParamFilter,
  BookParamLibraryRestrict,
  BookParamOrderBy,
  BookParamPrintType,
  BookParamProjection,
}