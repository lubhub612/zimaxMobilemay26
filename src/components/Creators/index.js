import React, { useEffect, useState } from "react";
import { Creator } from "./Creator";
import GradientButton from "../Shared/GradientButton";
import {
  CreatorsContainer,
  Header,
  MenuListWrapper,
  MenuItem,
  CreatorListWrapper,
  CreateButtonWrapper,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../../contexts/GlobalContext";
import { useCustomWallet } from "../../contexts/WalletContext";
import { useAuth } from "../../contexts/AuthContext";
import useToast from "../../hooks/useToast";
import { useTranslation } from "react-i18next";

export const Creators = (props) => {
  const [selectedMenu, setSelectedMenu] = useState("all");
  const [creatorList, setCreatorList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const { invokeServer } = useGlobal();
  const { auth } = useAuth();
  const { wallet } = useCustomWallet();
  const { toastError, toastInfo } = useToast();
  const [collectionLoaded, setLoadCreator] = useState([]);

  const navigate = useNavigate();
  const { t } = useTranslation();
  const menuList = [
    { key: "all", name: "All" },
    { key: "popular", name: "Popular" },
  ];

  useEffect(() => {
    let ac = new AbortController();

    invokeServer("get", "/api/creator?info=all").then((r) => {
      if (ac.signal.aborted === false) {
        if (r.data.result === 1) {
          setCreatorList((t) => r.data.creators);
        }
      }
    });

    return () => ac.abort();
  }, [invokeServer]);

  useEffect(() => {
    if (selectedMenu === "all") {
      setFilteredList((t) => [...creatorList]);
    } else if (selectedMenu === "popular") {
      let tt = JSON.parse(JSON.stringify(creatorList));
      tt.sort((first, second) => {
        return second.volumeTrade - first.volumeTrade;
      });
      setFilteredList((t) => [...tt]);
    }
  }, [creatorList, selectedMenu]);

  return (
    <CreatorsContainer>
      <Header>
        <h1>{t("Creators Explorer")}</h1>
        <MenuListWrapper>
          {menuList.map((menu) => (
            <MenuItem
              key={menu.key}
              active={selectedMenu === menu.key}
              onClick={() => setSelectedMenu(menu.key)}
            >
              {menu.name}
            </MenuItem>
          ))}
        </MenuListWrapper>
      </Header>
      <CreatorListWrapper>
        {filteredList.length > 0 &&
          filteredList
            .filter((item) => item.coverURI && item.avatarURI || item.name !=="anonymous")
            .map((creator, i) => <Creator key={i} creator={creator} />)}
      </CreatorListWrapper>
    </CreatorsContainer>
  );
};
