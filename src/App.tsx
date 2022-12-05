import React, { useEffect, useState } from "react";

import findBooks from "./Components/FetchHook/findBooks";

import SearchForm from "./Components/SearchForm/SearchForm";
import SelectSorting from "./Components/SortBooks/SelectSorting";
import BooksList from "./Components/BooksList/BooksList";

import { Wrapper } from "./Components/Modals/Wrapper.styled";
import { Title } from "./Components/UI/Title.styled";

// Expected structure of fetched Books object ;
export interface BooksProps {
  objectID: number;
  title: string;
  points: number;
  relevancy_score: number;
  [key: string]: any;
}

// Sort the shown BooksProps according to the sorting preference in descending order;
const sortBooksHandler = (
  type: string,
  arrayToBeSorted: BooksProps[]
): BooksProps[] => {
  let sortedArray = [];
  if (type === "relevance") {
    sortedArray = arrayToBeSorted.sort(
      (bookItem1: BooksProps, bookItem2: BooksProps) => {
        return bookItem2.relevancy_score - bookItem1.relevancy_score;
      }
    );
  } else {
    sortedArray = arrayToBeSorted.sort(
      (bookItem1: BooksProps, bookItem2: BooksProps) => {
        return bookItem2.points - bookItem1.points;
      }
    );
  }
  return sortedArray;
};

export default function App(): JSX.Element {
  // Store fetched books;
  const [books, setBooks] = useState<BooksProps[]>([]);

  // Store sorting Option from SortBooks Component;
  const [sortingOption, setSortingOption] = useState("relevance");

  // Handle submit event from SearchForm Component;
  const submitHandler = async (e: React.FormEvent, term: string) => {
    e.preventDefault();

    // Pass user input to fetch function and return results;
    const bookResponse: BooksProps[] = await findBooks(term);
    setBooks(bookResponse);
    setSortingOption("relevance");
  };

  // Re-render books mapping according to sorting option;
  useEffect(() => {
    setBooks(sortBooksHandler(sortingOption, books));
  }, [sortingOption, books]);

  return (
    <Wrapper>
      <Title>Library Search</Title>
      <SearchForm submitHandler={submitHandler} />
      <SelectSorting setSortingOption={setSortingOption} />
      <BooksList books={books} />
    </Wrapper>
  );
}
