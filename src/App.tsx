import React, { useEffect, useRef, useState } from "react";

import findBooks from "./Components/FetchHook/findBooks";

import { Wrapper } from "./Components/Modals/Wrapper.styled";
import { Title } from "./Components/UI/Title.styled";
import { Form, Input, InputButton } from "./Components/Form/Form.styled";
import { BookItem } from "./Components/UI/BookItem.styled";

//extracted Data object expected structure
interface extractedData {
  objectID: number;
  text: string;
  points: number;
  relevany_score: number;
  [key: string]: any;
}

export default function App(): JSX.Element {
  // store user input
  const searchedTermRef = useRef<HTMLInputElement>(null);

  // store fetched data
  const [extractedData, setextractedData] = useState<extractedData[]>([]);

  const submitHandler = (e: React.FormEvent) => {
    const inputText = searchedTermRef.current!.value;

    e.preventDefault();

    // Pass user input to fetch function and return results
    findBooks(inputText).then((res) => {
      setextractedData(res);
      console.log(res);
    });
  };

  return (
    <Wrapper>
      <Title>Library Search</Title>
      <Form onSubmit={submitHandler}>
        <Input
          type="text"
          placeholder="Search for your book:"
          ref={searchedTermRef}
        />
        <InputButton type="submit">Search</InputButton>
      </Form>
      {`Results: ${extractedData.length}`}
      {extractedData.map((item: extractedData) => {
        return <BookItem key={item.objectID}>{item.title}</BookItem>;
      })}
    </Wrapper>
  );
}
