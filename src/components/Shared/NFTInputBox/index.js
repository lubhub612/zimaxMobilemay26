import React from 'react';
import { NFTInputBoxContainer, FormLabel, FormDescription } from './styles';

const NFTInputBox = (props) => {

  const {
    title,
    description,
    name,
    type,
    value,
    placeholder,
    required,
    onChange
  } = props

  return (
    <NFTInputBoxContainer title={title}>
      {title && <FormLabel htmlFor={title}>{title}{required && '*'}</FormLabel>}
      {type === 'text-area' ? (
        <textarea 
          name={name}
          id={title}
          type={type}
          value={value} 
          placeholder={placeholder} 
          required={required}
          autoComplete={'off'}
          onChange={(e) => onChange(e.target.value)}
        >
          {value}
        </textarea>
      ) : (
        <input 
          name={name}
          id={title}
          type={type}
          value={value} 
          placeholder={placeholder} 
          required={required}
          autoComplete={'off'}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      {description && (
        <FormDescription>{description}</FormDescription>
      )}
    </NFTInputBoxContainer>
  )
}

export default NFTInputBox;
