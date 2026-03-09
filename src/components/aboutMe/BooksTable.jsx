import "./bookstable.css"

export default function BooksTable({ books }) {
  return (
    <table className="books-table">
      <thead>
        <tr>
          <th className="table-header-cover">Cover</th>
          <th>Title</th>
          <th>Author</th>
          <th className="table-description-cover">Description</th>
        </tr>
      </thead>

      <tbody>
        {books.map((book) => (
          <tr key={book.title}>
            <td>
              <img src={book.cover} alt={book.title} />
            </td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
