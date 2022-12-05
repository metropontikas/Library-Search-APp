import axios from "axios";

interface bookItem {
  relevancy_score: number;
}

const findBooks = async (searchData: string): Promise<[]> => {
  const result = await axios(
    `https://hn.algolia.com/api/v1/search?query=${searchData}`
  );
  return result.data.hits.filter((i: bookItem) => i.relevancy_score > 8000);
};

export default findBooks;
