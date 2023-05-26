import React, { useEffect, useState } from "react";
import {
  Main,
  ProfileArea,
  Profile,
  ProfileContent,
  MyLink,
  ItemInner,
  ListArea,
  Item,
  ItemContent,
  ExtraInfo,
  FaceId,
  FaceIdInner,
  FaceIdItem,
  MainArea,
  FaceRefItem,
} from "./styles";
// import { useAuth } from '../../../contexts/AuthContext';
import AVATAR from "../../assets/images/avatar.jpg";
import { useAuth } from "../../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useGlobal } from "../../contexts/GlobalContext";
import CopyToClipboard from "react-copy-to-clipboard";
import { useTranslation } from "react-i18next";

export default function LevelsArea() {
  const { auth, wallet } = useAuth();
  const { invokeServer } = useGlobal();
  const{t}=useTranslation();
  const [ownerInfo, setOwnerInfo] = useState({
    items: 0,
    holders: 0,
    floorPrice: 0.0,
    volumeTrade: 0.0,
  });

  const location = useLocation();
  let navigate = useNavigate();

  // useEffect(() => {
  //   if (auth.isLoggedIn !== true) {
  //     if (location.pathname.includes("/teams")) {
  //       navigate("/");
  //     }
  //   }
  // }, [auth.isLoggedIn]);
  useEffect(() => {
    let ac = new AbortController();
    invokeServer("get", `/api/user?address=${wallet.address}`)
      .then((res) => {
        if (ac.signal.aborted === false) {
          if (res.data.result === 1) {
            let j;
            let rr = res.data.user;
            setOwnerInfo((t) => {
              return { ...t, ...rr };
            });
          }
        }
      })
      .catch((err) => {
        console.log(`${err.message}`);
      });

    return () => ac.abort();
  }, [wallet.address]);

  return (
    <>
      <MainArea>
        <Main>
          <ProfileArea>
            <Profile>
              <img src={AVATAR} alt="avatar" />
              <ProfileContent>
                <span>{t("My ZiMax ID")}</span>
                <strong>{ownerInfo._id?.substr(0, 5) + "..."}</strong>
                <p>
                  {ownerInfo.address?.substr(0, 4) +
                    "..." +
                    ownerInfo.address?.slice(-4)}
                  <CopyToClipboard text={ownerInfo.address}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 20 20"
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                    >
                      <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                      ></path>
                    </svg>
                  </CopyToClipboard>
                </p>
              </ProfileContent>
            </Profile>
            <MyLink>
              <h3>
                {t("My referral link")}
                <CopyToClipboard text={`zimax.io?RefID=${ownerInfo._id}`}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                    ></path>
                  </svg>
                </CopyToClipboard>
              </h3>
              <a href="#">
                zimax.io?RefID={ownerInfo._id?.substr(0, 5) + "..."}
              </a>
              <p>
                {t("Share your referral link and invite your friends to the ZiMax to build your team")}
              </p>
            </MyLink>
          </ProfileArea>
          <ListArea>
            <Item>
              <h3>
                <span>
                  {t("Upline")}
                  <strong>
                    <p>
                      {t("Upline is the superior partner who invited you into the ZiMax system")}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-question-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                    </svg>
                  </strong>
                </span>
                <strong>{t("Level: 12")}</strong>
              </h3>
              <ItemInner>
                <img src={AVATAR} alt="avatar" />
                <ItemContent>
                  <h4>
                    {t("ZiMax")}{" "}
                    <CopyToClipboard text={ownerInfo.address}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 20 20"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                      >
                        <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                        ></path>
                      </svg>
                    </CopyToClipboard>
                  </h4>
                  <h5>
                    {ownerInfo.address?.substr(0, 4) +
                      "..." +
                      ownerInfo.address?.slice(-4)}
                    <CopyToClipboard text={ownerInfo.address}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 20 20"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                      >
                        <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                        ></path>
                      </svg>
                    </CopyToClipboard>
                  </h5>
                </ItemContent>
              </ItemInner>
            </Item>
            <Item>
              <h3>
                <span>
                  {t("Your ZiMax Token Balance")}
                  <strong>
                    <p>
                   {t("ZiMax is the native BSC token of the ZiMax platform, which rewards its holders with automatic passive interest payments within 15 minutes")}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-question-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                    </svg>
                  </strong>
                </span>
              </h3>
              <ExtraInfo>
                <h5>{t("0.000")}</h5>
                <p>{t("APY ≈30%")}</p>
              </ExtraInfo>
            </Item>
          </ListArea>
          <FaceId>
            <FaceIdInner>
              <FaceIdItem>
                <span>{t("ZiMax ID")}</span>
                <strong>{ownerInfo._id}</strong>
              </FaceIdItem>
              <FaceIdItem>
                <span>{t("Partners")}</span>
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.875 12.5a4.062 4.062 0 1 0 0-8.125 4.062 4.062 0 0 0 0 8.125Z"
                      stroke="#fff"
                      stroke-miterlimit="10"
                    ></path>
                    <path
                      d="M12.14 4.523c.36-.097.73-.147 1.102-.148a4.063 4.063 0 0 1 0 8.125M1.25 15.422a6.875 6.875 0 0 1 11.25 0M13.242 12.5a6.868 6.868 0 0 1 5.625 2.922"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>{" "}
                  {ownerInfo?.refs?.length}
                </span>
              </FaceIdItem>
            </FaceIdInner>
            <FaceRefItem>
              {ownerInfo &&
                ownerInfo?.refs?.map((item, index) => {
                  return (
                    <div key={index}>
                      <a
                        href={`https://polygonscan.com/address/${item.address}`}
                        target="_blank"
                      >
                        <p>
                          <img src={AVATAR} alt="avatar" /> {item.name}{" "}ID{" "}
                          {item._id?.substr(0, 5) + "..."}
                        </p>
                      </a>
                    </div>
                  );
                })}
            </FaceRefItem>
          </FaceId>
        </Main>
      </MainArea>
    </>
  );
}
