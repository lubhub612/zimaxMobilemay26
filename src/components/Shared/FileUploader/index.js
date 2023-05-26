import React from 'react';
import { 
  FileUploaderContainer, 
  UploadButton,
  UploadIcon
} from './styles';

const FileUploader = (props) => {

  const { label, handleFile, isOnlyIcon, icon } = props;
  
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);
    
  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };

  return (
    <FileUploaderContainer>
      {isOnlyIcon ? (
        <UploadIcon onClick={handleClick}>
          {icon}
        </UploadIcon>
      ): (
        <UploadButton onClick={handleClick}>
          {label}
        </UploadButton>
      )}
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}}
      />
    </FileUploaderContainer>
  )
}

export default FileUploader;