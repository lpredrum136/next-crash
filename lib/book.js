import fs from 'fs'
import path from 'path'

const booksDirectory = path.join(process.cwd(), 'books')

export const getBooks = () => {
  const bookFileNames = fs.readdirSync(booksDirectory)
  const booksData = bookFileNames.map(bookFileName => {
    const fullBookPath = path.join(booksDirectory, bookFileName)
    const bookContent = fs.readFileSync(fullBookPath, 'utf8')

    return {
      bookName: bookFileName.replace(/\.txt$/, ''),
      bookContent
    }
  })

  return booksData
}
