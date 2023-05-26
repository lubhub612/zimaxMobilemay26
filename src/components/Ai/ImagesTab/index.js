import * as React from "react";
import { MainArea, Texttab, ParamArea } from "../styles";
import {
  StyledInputField,
  Button,
  Input,
  AddImageButton,
  ImageContainer,
  ImageUrl,
  Image,
  Overlay,
  Icon,
} from "./InputTab";
const ImagesTab = ({ imageUrls, handleImageUrl, handleRemoveImageUrl }) => {
  const [url, setUrl] = React.useState("");

  // HANDLES
  const handleInput = (e) => {
    setUrl(e.target.value);
  };

  return (
    <Texttab>
      <StyledInputField>
        <Button disabled>Image URL</Button>
        <Input
          placeholder="Enter image URL"
          value={url}
          onChange={(e) => handleInput(e)}
        />
        <AddImageButton onClick={() => handleImageUrl(url)}>
          Add Image
        </AddImageButton>
      </StyledInputField>

      <div className="image-area">
        {imageUrls.map((url) => (
          <div>
            <div>
              <ImageContainer onClick={() => handleRemoveImageUrl(url)}>
                <Image
                  src={url}
                  alt={url}
                  tabletMaxWidth="200px"
                  pcMaxWidth="400px"
                  largeScreenMaxWidth="600px"
                />
                <ImageUrl>{url}</ImageUrl>
              </ImageContainer>
            </div>
          </div>
        ))}
      </div>
    </Texttab>
  );
};

export default ImagesTab;
