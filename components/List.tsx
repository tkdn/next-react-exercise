import * as React from "react";
import styled from "styled-components";
import { useDataApi } from "../hooks/useDataApi";

export const List: React.FC = () => {
  const [{data, isLoading, isError}, doFetch] = useDataApi(
    "https://swapi.co/api/people/",
  );
  return (
    <>
      <h1>Fetch Custom Hook</h1>
      {isLoading && <p>is loading ...</p>}
      <ul>
        <li><pre>{JSON.stringify(data, null, 4)}</pre></li>
        {/* {(data as any).results.map(item => (
          <li key={item.name}>
            {item.name}
          </li>
        ))} */}
      </ul>
    </>
  );
};
