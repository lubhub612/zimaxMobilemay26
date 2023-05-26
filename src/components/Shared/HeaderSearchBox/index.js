import React, { useState } from 'react';
import { HeaderSearchBoxContainer, Input } from './styles';
import AiOutlineSearch from '@meronex/icons/ai/AiOutlineSearch';
import { useData } from '../../../contexts/DataContext';

const HeaderSearchBox = (props) => {
  const {
    onChange
  } = props

  const { handleSearchNFTs } = useData();

  const [text, setText] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const handleChange = (event) => {
    setText(event.target.value)
    handleSearchNFTs(event.target.value)
  };
  
  return (
    <HeaderSearchBoxContainer>
      <Input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder={isFocus ? "" : "Search items, collections, and accounts"}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onSubmit={e => {
          e.preventDefault();
        }}
      />
      <div className="left-icon">
        <AiOutlineSearch />
      </div>
    </HeaderSearchBoxContainer>
  )
}

export default HeaderSearchBox;
