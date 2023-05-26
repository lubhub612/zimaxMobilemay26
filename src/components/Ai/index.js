import * as React from 'react';
import { MainArea, Texttab, ParamArea, Button, ButtonText, ButtonLoader, GeneratedImageContainer, Image, SkeletonImage } from './styles';
import { useAiStylesContext } from "../../contexts/AIStyleContext";
import Skeleton from 'react-loading-skeleton';
const FilterTab = React.lazy(() => import("./FilterTab"));
const ParamsTab = React.lazy(() => import("./ParamsTab"));
const ImagesTab = React.lazy(() => import("./ImagesTab"));
const TextTab = React.lazy(() => import("./TextTab/FormBuilder"));
const Tab = ({ title, active, onClick }) => {
  const handleClick = () => {
    onClick(title);
  };

  return (
    <button className={`tab${active ? ' active' : ''}`} onClick={handleClick}>
      {title}
    </button>
  );
};






export default function AiArea() {
  const [text, setText] = React.useState([]);
  const [params, setParams] = React.useState([]);
  const [imageUrls, setImageUrls] = React.useState([]);
  const [promptUrl, setPromptUrl] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState('Text');
  const [fields, setFields] = React.useState([{ id: 0, value: '', action: "included", prompt: "single-prompt", weight: "" }]);
  const [textUrls, setTextUrls] = React.useState([]);
  const [showConfirm, setShowConfirm] = React.useState(false);
  const { generateImage, generatedImageUrl, setSelectedStyles, selectedParams, setSelectedParams } = useAiStylesContext();
  const [isLoading, setIsLoading] = React.useState(false);

  //construct text url
  React.useEffect(() => {
    const urls = fields.map(field => {
      if (field.value) {
        if (field.weight && field.action === "included") {
          return field.value + "::" + field.weight;
        } else if (field.action === "excluded") {
          return "--no " + field.value
        } else {
          return field.value;
        }
      }
    });
    setTextUrls(urls);
  }, [fields])


  // construct the prompt text
  React.useEffect(() => {
    console.log("text", text);
    const prompt = textUrls.join(", ") + " " + text?.join(", ") + " " + imageUrls?.join(" ") + " " + params?.join(" ");
    if (prompt) {

      setPromptUrl(prompt);
    }
  }, [text, params, imageUrls, textUrls, selectedParams])

  React.useEffect(() => {
    const newParams = selectedParams.map(param => `${param.tag} ${param.value}`)
    setParams([...newParams]);
  }, [selectedParams])

  const handleReset = () => {
    setShowConfirm(true);
  };

  const handleConfirmReset = () => {
    setPromptUrl('');
    setImageUrls([]);
    setParams([]);
    setTextUrls([]);
    setFields([{ id: 0, value: '', action: "included", prompt: "single-prompt", weight: "" }]);
    setSelectedStyles([]);
    setSelectedParams([]);
    setShowConfirm(false);
  };

  const handleCancelReset = () => {
    setShowConfirm(false);
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleTabClick = (title) => {
    setActiveTab(title);
  };

  const handleImageClick = (styles) => {
    setText([...styles]);
  };

  const handleRemoveImageText = (styleName) => {
    setText([...text.filter(item => item !== styleName)]);
  }

  const handleParams = (param) => {

  }

  const handleImageUrl = (url) => {
    const indexFound = imageUrls.findIndex(item => item === url);

    if (indexFound === -1) {
      setImageUrls([
        ...imageUrls,
        url
      ])
    }
  }

  const handleRemoveImageUrl = (url) => {
    const indexFound = imageUrls.findIndex(item => item === url);
    if (indexFound !== -1) {
      const filteredUrls = imageUrls.filter(item => item !== url);
      setImageUrls(filteredUrls);
    }
  }

  const handleGenerateImage = () => {
    if (promptUrl.length > 3) {
      console.log("prompt", promptUrl.length)
      setIsLoading(true);
      generateImage(promptUrl);
    }

  };
  React.useEffect(() => {
    setIsLoading(false);
  }, [generatedImageUrl])


  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      {

        generatedImageUrl.length > 0 &&
        <Image
          src={generatedImageUrl[0]}
          alt={generatedImageUrl[0]}
        />

      }
      <MainArea>
        <div className="left-side">
          <h2 id="prompt" >Imagine {promptUrl}</h2>
          <div className="left-button">
            {showConfirm ? (
              <>
                <button className="red-color" onClick={handleConfirmReset}>
                  Confirm Reset
                </button>
                <button onClick={handleCancelReset}>Cancel</button>
              </>
            ) : (
              <button onClick={handleReset}>Reset</button>
            )}
            <Button isLoading={isLoading} className="red-color" onClick={() => handleGenerateImage()}>
              <ButtonText isLoading={isLoading}>Generate</ButtonText>
              <ButtonLoader
                isLoading={isLoading}

              >Generating...</ButtonLoader>
            </Button>

          </div>
        </div>
        <div className="right-side">
          <div className="tabs">
            <Tab
              title="Text"
              active={activeTab === 'Text'}
              onClick={handleTabClick}
            />
            <Tab
              title="Filters"
              active={activeTab === 'Filters'}
              onClick={handleTabClick}
            />
            <Tab
              title="Images"
              active={activeTab === 'Images'}
              onClick={handleTabClick}
            />
            <Tab
              title="Params"
              active={activeTab === 'Params'}
              onClick={handleTabClick}
            />
          </div>
          <div className="tab-content">
            {activeTab === 'Text' && (
              <TextTab setFields={setFields} fields={fields} handleInputChange={handleInputChange} />
            )}
            {activeTab === 'Filters' && (
              <FilterTab handleImageClick={handleImageClick} handleRemove={handleRemoveImageText} />
            )}
            {activeTab === 'Images' && (
              <ImagesTab imageUrls={imageUrls} handleImageUrl={handleImageUrl} handleRemoveImageUrl={handleRemoveImageUrl} />
            )}
            {activeTab === 'Params' && <ParamsTab handleParams={handleParams} />}
          </div>
        </div>
      </MainArea>
    </React.Suspense>
  );
}
