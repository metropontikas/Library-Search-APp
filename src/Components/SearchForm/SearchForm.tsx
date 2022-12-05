import { useState } from "react";

import { Button, Form, Input } from "./SearchForm.styled";

interface SearchFormProps {
  submitHandler: (e: React.FormEvent, term: string) => Promise<void>;
}

const SearchForm = ({ submitHandler }: SearchFormProps): JSX.Element => {
  // Store user input;
  const [searchedTerm, setSearchedTerm] = useState("");

  return (
    <Form
      // On submit pass searchTerm and Form-Event to parent Component;
      // Form event is passed to execute preventDefault();
      onSubmit={(e) => {
        submitHandler(e, searchedTerm);
      }}
    >
      <Input
        type="text"
        placeholder="Search for your book:"
        // On user-input store input;
        onChange={(e) => {
          setSearchedTerm(e.target.value);
        }}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};
export default SearchForm;
