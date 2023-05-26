import * as React from "react";
import { MainArea, Texttab, ParamArea } from "../styles";
import {
  CrossIcon,
  StyledAnchor,
  StyleImageContainer,
  StyleImage,
  ActionOverlay,
  ActionIcon,
} from "./styles";
import StyleImageHolder from "./StyleImage";
import { useAiStylesContext } from "../../../contexts/AIStyleContext";
import useDebounce from "../../../hooks/useDebounce";
import AiOutlineLayout from "@meronex/icons/ai/AiOutlineLayout";
import MdcTextureBox from "@meronex/icons/mdc/MdcTextureBox";
import AiOutlineBgColors from "@meronex/icons/ai/AiOutlineBgColors";
import BsPersonBoundingBox from "@meronex/icons/bs/BsPersonBoundingBox";
import AiFillCamera from "@meronex/icons/ai/AiFillCamera";
import AiOutlineFieldTime from "@meronex/icons/ai/AiOutlineFieldTime";
import FaShoppingBag from "@meronex/icons/fa/FaShoppingBag";
import BiBrushAlt from "@meronex/icons/bi/BiBrushAlt";
import MdcHammerWrench from "@meronex/icons/mdc/MdcHammerWrench";
import AiOutlineBulb from "@meronex/icons/ai/AiOutlineBulb";
import MdcMovieSearchOutline from "@meronex/icons/mdc/MdcMovieSearchOutline";
import BisBuildings from "@meronex/icons/bi/BisBuildings";
import GiLargeDress from "@meronex/icons/gi/GiLargeDress";
import FaPersonBooth from "@meronex/icons/fa/FaPersonBooth";
import GiMountainCave from "@meronex/icons/gi/GiMountainCave";
import SuCrossCircle from "@meronex/icons/su/SuCrossCircle";

const categoryIcons = [
  {
    name: "layouts",
    Icon: AiOutlineLayout,
  },
  {
    name: "texture",
    Icon: MdcTextureBox,
  },
  {
    name: "colors",
    Icon: AiOutlineBgColors,
  },
  {
    name: "artists",
    Icon: BsPersonBoundingBox,
  },
  { name: "camera", Icon: AiFillCamera },
  { name: "era", Icon: AiOutlineFieldTime },
  { name: "themes", Icon: BiBrushAlt },
  { name: "styles", Icon: FaShoppingBag },
  { name: "techniques", Icon: MdcHammerWrench },
  { name: "lighting", Icon: AiOutlineBulb },
  { name: "movies-games", Icon: MdcMovieSearchOutline },
  { name: "architecture", Icon: BisBuildings },
  { name: "fashion", Icon: GiLargeDress },
  { name: "character", Icon: FaPersonBooth },
  { name: "background", Icon: GiMountainCave },
];
const FiltersTab = ({ handleImageClick, handleRemove }) => {
  const {
    categories,
    styles,
    getStylesByCategory,
    searchStyleByKeyword,
    selectedStyles,
    setSelectedStyles,
  } = useAiStylesContext();
  const [selectedStyle, setSelectedStyle] = React.useState(0);
  const [searchKeyword, setSearchKeyword] = React.useState([]);
  const [hideCategorySection, setHideCategorySection] = React.useState(false);

  // default load  styles
  React.useEffect(() => {
    getStylesByCategory(categories[0]?._id);
  }, []);

  // add selected image style into prompt
  React.useEffect(() => {
    // construct the image text and weight url
    const ImageTexts = selectedStyles.map((item) => {
      if (item.weight) {
        return item.style_name + "::" + item.weight;
      } else {
        return item.style_name;
      }
    });

    handleImageClick(ImageTexts);
  }, [selectedStyles]);

  // handle image text weight submission
  const handleImageTextWeightSubmission = (weight) => {
    const index = selectedStyles.findIndex(
      (style) => style._id === weight.styleId
    );
    if (index !== -1) {
      selectedStyles[index].weight = weight.value;
      setSelectedStyles([...selectedStyles]);
    }
  };
  //handle selection
  const handleSelect = async ({ index, item }) => {
    setSelectedStyle(index);
    if (item) return getStylesByCategory(item._id);
  };

  // handle style select
  const handleStyleSelect = (style) => {
    const index = selectedStyles.findIndex(
      (item) => item.style_name === style.style_name
    );
    if (index === -1) {
      setSelectedStyles([...selectedStyles, style]);
    } else {
      selectedStyles.splice(index, 1);
      setSelectedStyles([...selectedStyles]);
    }
  };

  // handle remove image
  const handleRemoveImage = (style) => {
    setSelectedStyles(
      selectedStyles.filter((item) => item.style_name !== style.style_name)
    );
    handleRemove(style.style_name);
  };

  // handle category icons
  const handleCategoryIcon = (categoryName) => {
    const category = categoryIcons.find((item) => item.name === categoryName);
    const Icon = category.Icon;
    return <Icon className="bi bi-file-earmark-image" width="16" height="16" />;
  };

  // handle search input field
  const handleSearchInputField = (e) => {
    setSearchKeyword(e.target.value);
  };

  // handle search input focus in
  const handleInputOnFocus = () => {
    // setSelectedStyle(0);
    setHideCategorySection(true);
  };

  // handle search input focus out
  const handleSearchInputFocusOut = () => {
    setHideCategorySection(false);
    setSelectedStyle(0);
  };

  //debouncing the search input field
  const debouncedValue = useDebounce(searchKeyword, 500);
  const handleSearch = React.useCallback(() => {
    searchStyleByKeyword(debouncedValue);
  }, [debouncedValue]);

  React.useEffect(() => handleSearch(), [handleSearch]);

  return (
    <Texttab>
      <input
        id="search-input"
        type="text"
        placeholder="Search Keyword..."
        onFocus={() => handleInputOnFocus()}
        value={searchKeyword}
        onChange={handleSearchInputField}
      />
      <ul>
        <li
          key="selected"
          className={-1 === selectedStyle && "active"}
          onClick={() => handleSelect({ index: -1 })}
        >
          <StyledAnchor>{`selected (${selectedStyles.length})`} </StyledAnchor>
        </li>
        {hideCategorySection && (
          <li
            key="selected"
            className={-2 === selectedStyle && "active"}
            onClick={() => handleSelect({ index: -2 })}
          >
            <StyledAnchor>
              <CrossIcon onClick={() => handleSearchInputFocusOut()} />
              {`search results (${styles.length})`}{" "}
            </StyledAnchor>
          </li>
        )}

        {!hideCategorySection &&
          categories &&
          categories.map((item, index) => (
            <li
              key={item._id}
              className={index === selectedStyle && "active"}
              onClick={() => handleSelect({ index, item })}
            >
              <StyledAnchor>
                {handleCategoryIcon(item.category)} {item.category}
              </StyledAnchor>
            </li>
          ))}
      </ul>
      <div className="image-area">
        {selectedStyle === -1
          ? selectedStyles &&
            selectedStyles.map((style) => (
              <StyleImageHolder
                style={style}
                key={style._id}
                origin="selected"
                handleStyleSelect={handleStyleSelect}
                deleteAction={true}
                handleImageTextWeightSubmission={
                  handleImageTextWeightSubmission
                }
              />
            ))
          : styles &&
            styles.map((style) => (
              <StyleImageHolder
                key={style._id}
                style={style}
                origin="selection"
                selectedStyles={selectedStyles}
                handleStyleSelect={handleStyleSelect}
                handleImageTextWeightSubmission={
                  handleImageTextWeightSubmission
                }
              />
            ))}
      </div>
    </Texttab>
  );
};

export default FiltersTab;
