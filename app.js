function filterBooks(books) {
    const booksWithU = []
    const otherBooks = []

    for (const book of books) {
        if (book.toLowerCase().includes("у")) {
            booksWithU.push(book)
        } else {
            otherBooks.push(book)
        }
    }

    console.log("Книги, содержащие букву 'у':")
    console.log(booksWithU)

    console.log("Все остальные книги:")
    console.log(otherBooks)
}
const books = ["Война и мир", "Преступление и наказание", "Герой нашего времени", "Мастер и Маргарита", "Унесенные ветром", "Убийство по алфавиту", "Продавец обуви Фил Найт"]
filterBooks(books)

function reverseString(str) {
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}
const str = 'Daniar'
const reversedStr = reverseString(str)
console.log(reversedStr)