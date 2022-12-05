import { Option, Select } from "./SelectSorting.styled";

interface SelectSortingProps {
  setSortingOption: React.Dispatch<React.SetStateAction<string>>;
}

const SelectSorting = ({
  setSortingOption,
}: SelectSortingProps): JSX.Element => {
  return (
    <Select
      onChange={(e) => {
        setSortingOption(e.target.value);
      }}
      defaultValue="relevance"
    >
      <Option value="relevance">Most relevant</Option>
      <Option value="mostPoints">Most points</Option>
    </Select>
  );
};

export default SelectSorting;
