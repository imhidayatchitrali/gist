import React, { useCallback, useContext } from "react";
import styled from 'styled-components'
import Octicon from 'react-octicon'
import { getGistForUser } from "../services/gistService";
import { LoadinContext, MyContext } from "../MyContext";



const Search = () => {
  const { setData } = useContext(MyContext);
  const { load, setLoad } = useContext(LoadinContext);

  const handleChanges = (val) => {
    if (val === "") return;
    setLoad(!load)
    getGistForUser(val).then((gist) => {
      setData(gist.data)
      setLoad(!load)
    })
  };

  function debounce(cb, delay = 1000) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }

  const optimizedFn = useCallback(debounce(handleChanges), []);

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input placeholder="Search Gists for the username"
          onChange={(e) => optimizedFn(e.target.value)}
        />
      </InputBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus{
    outline: none;
  }
`;

export default Search
