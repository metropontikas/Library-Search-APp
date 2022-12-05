import { BooksProps } from "../../App";

import { BookItem } from "./BooksList.styled";
import { Text } from "./BooksList.styled";

interface BooksListProps {
  books: BooksProps[];
}

const BooksList = ({ books }: BooksListProps): JSX.Element => {
  return (
    <>
      <Text>Results: {books.length}</Text>
      {books.map((item: BooksProps) => {
        return <BookItem key={item.objectID}>{item.title}</BookItem>;
      })}
    </>
  );
};

export default BooksList;
