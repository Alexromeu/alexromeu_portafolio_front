import "../../styles/responsive_styles/responsive_book_table.css"

export default function BooksTableMobile({ books }) {
  return (
    <div className="books-table-mobile">
      {books.map((book) => (
        <div className="book-card-mobile" key={book.title}>
          
          <img
            src={book.cover}
            alt={book.title}
            className="book-cover-mobile"
          />

          <div className="book-info-mobile">
            <h3 className="book-title-mobile">{book.title}</h3>
            <p className="book-author-mobile">{book.author}</p>
            <p className="book-description-mobile">{book.description}</p>
          </div>

        </div>
      ))}
    </div>
  );
}
