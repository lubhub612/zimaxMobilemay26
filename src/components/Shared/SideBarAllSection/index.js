import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../contexts/AuthContext';
import BarSection from '../BarSection';
import PlaneAccordion from '../PlaneAccordion';
import AiOutlineMenu from '@meronex/icons/ai/AiOutlineMenu';
import BsChevronRight from '@meronex/icons/bs/BsChevronRight';

import {
  SideBarAllContent,
  MysteryContainer,
  SideBarAllSectionContainer,
  UserDetailContainer,
  UserWelcome,
  GameTypeItem
} from './styles'
import { ArrowLeftIcon, ArrowRightIcon } from '../SvgIcons';
import UserAvatar from '../UserAvatar';
import { useNavigate } from 'react-router-dom';
import { useGlobal } from '../../../contexts/GlobalContext';
import { useTranslation } from 'react-i18next';

export const SideBarAllSection = (props) => {

  const navigate = useNavigate();
  const {
    position,
    setShowSignIn,
    closeSideMenu,
    handleCategoryClicked,
    depths,
    setDepths,
    address
  } = props

  const { invokeServer } = useGlobal();
  const [categories, setCategories] = useState();
  const {t}=useTranslation()
  const [category0, setCategory0] = useState();
  const [userName, setUserName] = useState();
  const [avatarURI, setAvatarURI] = useState();

  const handleOnClick = () => {
    navigate(`/profile/${address}`);
  }

  const handleCloseMenu = () => {
    closeSideMenu();
  }

  useEffect(() => {
    let ac = new AbortController();
    if (address !== null && address !== undefined && address !== '0x0') {
      invokeServer('get', '/api/nft_category?all=')
        .then(r => {
          if (ac.signal.aborted === false) {
            if (r.data.result === 1) {
              setCategories(t => r.data.categories);
            }
          }
        })
        .catch(err => {
          console.log(`${err.message}`)
        })
      invokeServer('get', `/api/user?address=${address.toLowerCase()}`)
        .then(r => {
          if (ac.signal.aborted === false) {
            if (r.data.result === 1) {
              setUserName(t => r.data.user.name);
              setAvatarURI(t => r.data.user.avatarURI);
            }
          }
        })
        .catch(err => {
          console.log(`${err.message}`);
        })
    }

    return () => ac.abort();
  }, [address])

  useEffect(() => {
    if (categories) {
      let depth0All = categories.map(t => t.depth0);
      let depth0 = depth0All.filter((t, i) => depth0All.indexOf(t) === i);
      setCategory0(t => depth0);
    }
  }, [categories])

  const handleCategoryFilter = (depth0, depth1, depth2, depth3, depth4) => {
    handleCategoryClicked && handleCategoryClicked(depth0, depth1, depth2, depth3, depth4);

    let tt = {};
    depth0 && (tt.depth0 = depth0);
    depth1 && (tt.depth1 = depth1);
    depth2 && (tt.depth2 = depth2);
    depth3 && (tt.depth3 = depth3);
    depth4 && (tt.depth4 = depth4);

    setDepths(t => {
      if (JSON.stringify(t) === JSON.stringify(tt))
        return {};
      else
        return tt;
    });
  }

  const countFilter = (depth0Label, depth1Label, depth2Label, depth3Label, depth4Label) => {
    let categoryFilter;

    if (depth0Label) {
      categoryFilter = categories.filter(t => t.depth0 === depth0Label);
      if (categoryFilter.length === 1 && categoryFilter[0].depth1 === '')
        return 0;
    }

    if (depth1Label) {
      categoryFilter = categoryFilter.filter(t => t.depth1 === depth1Label);
      if (categoryFilter.length === 1 && categoryFilter[0].depth2 === '')
        return 0;
    }

    if (depth2Label) {
      categoryFilter = categoryFilter.filter(t => t.depth2 === depth2Label);
      if (categoryFilter.length === 1 && categoryFilter[0].depth3 === '')
        return 0;
    }

    if (depth3Label) {
      categoryFilter = categoryFilter.filter(t => t.depth3 === depth3Label);
      if (categoryFilter.length === 1 && categoryFilter[0].depth4 === '')
        return 0;
    }

    if (depth4Label) {
      categoryFilter = categoryFilter.filter(t => t.depth4 === depth4Label);
      return 0;
    }

    return 1;
  }

  const returnDepth4Instances = (depth0Label, depth1Label, depth2Label, depth3Label) => {
    let categoryFilter4 = categories.filter(t => t.depth0 === depth0Label && t.depth1 === depth1Label && t.depth2 === depth2Label && t.depth3 === depth3Label);
    let depth4All = categoryFilter4.map(t => t.depth4);
    let depth4 = depth4All.filter((t, i) => depth4All.indexOf(t) === i);

    return depth4.map((t, idx) => t === '' ? <></> :
      <PlaneAccordion key={idx} depth={4} title={t} selected={depths.depth4 === t}
        count={countFilter(depth0Label, depth1Label, depth2Label, depth3Label, t)}
        handleClick={() => handleCategoryFilter(depth0Label, depth1Label, depth2Label, depth3Label, t)}>
      </PlaneAccordion>)
  }

  const returnDepth3Instances = (depth0Label, depth1Label, depth2Label) => {
    let categoryFilter3 = categories.filter(t => t.depth0 === depth0Label && t.depth1 === depth1Label && t.depth2 === depth2Label);
    let depth3All = categoryFilter3.map(t => t.depth3);
    let depth3 = depth3All.filter((t, i) => depth3All.indexOf(t) === i);

    return depth3.map((t, idx) => t === '' ? <></> :
      <PlaneAccordion key={idx} depth={3} title={t} selected={depths.depth3 === t}
        count={countFilter(depth0Label, depth1Label, depth2Label, t)}
        handleClick={() => handleCategoryFilter(depth0Label, depth1Label, depth2Label, t)}>
        {returnDepth4Instances(depth0Label, depth1Label, depth2Label, t)}
      </PlaneAccordion>)
  }

  const returnDepth2Instances = (depth0Label, depth1Label) => {
    let categoryFilter2 = categories.filter(t => t.depth0 === depth0Label && t.depth1 === depth1Label);
    let depth2All = categoryFilter2.map(t => t.depth2);
    let depth2 = depth2All.filter((t, i) => depth2All.indexOf(t) === i);

    return depth2.map((t, idx) => t === '' ? <></> :
      <PlaneAccordion key={idx} depth={2} title={t} selected={depths.depth2 === t}
        count={countFilter(depth0Label, depth1Label, t)}
        handleClick={() => handleCategoryFilter(depth0Label, depth1Label, t)}>
        {returnDepth3Instances(depth0Label, depth1Label, t)}
      </PlaneAccordion>)
  }

  const returnDepth1Instances = (depth0Label) => {
    let categoryFilter1 = categories.filter(t => t.depth0 === depth0Label);
    let depth1All = categoryFilter1.map(t => t.depth1);
    let depth1 = depth1All.filter((t, i) => depth1All.indexOf(t) === i);

    return depth1.map((t, idx) => t === '' ? <></> :
      <PlaneAccordion key={idx} depth={1} title={t} selected={depths.depth1 === t}
        count={countFilter(depth0Label, t)}
        handleClick={() => handleCategoryFilter(depth0Label, t)}>
        {returnDepth2Instances(depth0Label, t)}
      </PlaneAccordion>)
  }

  return (
    <SideBarAllSectionContainer>
      <div className="filter-modal-header" onClick={handleCloseMenu}>
        {position === 'right' ? (
          <ArrowRightIcon />
        ) : (
          <ArrowLeftIcon />
        )}
        <div className="filter-modal-header-user">
          <AiOutlineMenu />
          <div className="filter-modal-header-text">All</div>
        </div>
      </div>
      {
        (address !== null && address !== undefined && address !== '0x0') ?
          <SideBarAllContent>

            <UserDetailContainer onClick={() => handleOnClick()}>
              {
                avatarURI ? <img src={avatarURI} alt='' /> : <UserAvatar mr={'23px'} />
              }
              <UserWelcome>{t("Hello,")} {userName}</UserWelcome>
            </UserDetailContainer>

            {
              category0 && category0.map((t, idx) => {
                return (
                  <BarSection key={idx} title={t} handleClick={() => handleCategoryFilter(t)}>
                    {returnDepth1Instances(t)}
                  </BarSection>
                )
              })
            }
          </SideBarAllContent> : <div className='no-wallet-attached'>{t("No wallet attached")}</div>
      }
    </SideBarAllSectionContainer>
  )
}