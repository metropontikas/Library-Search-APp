import { useEffect, useState } from "react";

import findBooks from "./Components/FetchHook/findBooks";

import { Wrapper } from "./Components/Modals/Wrapper.styled";
import { Title } from "./Components/UI/Title.styled";
import { Form, Input, InputButton } from "./Components/Form/Form.styled";
import { BookItem } from "./Components/UI/BookItem.styled";

export default function App(): JSX.Element {
  const [extractedData, setextractedData] = useState([{}]);

  useEffect(() => {
    findBooks("web development").then((res) => {
      setextractedData(res);
    });
  }, []);
  console.log(extractedData);

  return (
    <Wrapper>
      <Title>Library Search</Title>
      <Form>
        <Input placeholder="Search for your book:" />
        <InputButton type="submit" value="Search" />
      </Form>
      {`Results: ${extractedData.length}`}
      {extractedData.map((item) => {
        return <BookItem>{item.title}</BookItem>;
      })}
    </Wrapper>
  );
}
