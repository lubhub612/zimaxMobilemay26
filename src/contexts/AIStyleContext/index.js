import * as React from "react";
import axios from "axios";
import { useGlobal } from "../GlobalContext";

// context
export const AiStylesContext = React.createContext();

// provider
export const AiStylesProvider = (props) => {
  const { invokeServer } = useGlobal();

  const [categories, setCategories] = React.useState([]);
  const [styles, setStyles] = React.useState([]);
  const [generatedImageUrl, setGeneratedImageUrl] = React.useState("");
  const [selectedStyles, setSelectedStyles] = React.useState([]);
  const [selectedParams, setSelectedParams] = React.useState([]);
  // get all categories
  React.useEffect(() => {
    let ac = new AbortController();

    invokeServer("get", "/api/ai_styles/categories")
      .then((res) => {
        if (ac.signal.aborted === false && res.data.result === 1) {
          setCategories(res.data.categories);
        }
      })
      .catch((err) => {
        console.log("get-categories-err:", err);
      });

    return () => ac.abort();
  }, []);

  // handlers

  // get styles by category id
  const getStylesByCategory = async (category_id) => {
    invokeServer("get", `/api/ai_styles/styles?category_id=${category_id}`)
      .then(
        (res) => res.data.result === 1 && setStyles(res.data.category.styles)
      )
      .catch((err) => console.log("get-styles-err", err));
  };

  // search style
  const searchStyleByKeyword = async (keyword) => {
    invokeServer("get", `/api/ai_styles/search?keyword=${keyword}`)
      .then(
        (res) =>
          res.data.result === 1 && setStyles(res.data.styles[0].search_result)
      )
      .catch((err) => console.log("search-result-err:", err));
  };

  // generate image
  const generateImage = (prompt) => {
    invokeServer("get", `/api/ai_styles/generate-image?prompt=${prompt}`)
      .then((res) => setGeneratedImageUrl(res.data.image))
      .catch((err) => {
        console.log("err:", err);
        setGeneratedImageUrl(" ");
      });
  };

  return (
    <AiStylesContext.Provider
      value={{
        selectedParams,
        setSelectedParams,
        categories,
        styles,
        getStylesByCategory,
        searchStyleByKeyword,
        generateImage,
        generatedImageUrl,
        selectedStyles,
        setSelectedStyles,
      }}
    >
      {props.children}
    </AiStylesContext.Provider>
  );
};

/**
 * Hook to get and update configs state
 */
export const useAiStylesContext = () => {
  const dataManager = React.useContext(AiStylesContext);
  return dataManager || [{}, async () => {}];
};
