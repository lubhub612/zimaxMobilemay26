import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { useGlobal } from '../../../contexts/GlobalContext';
import { useNFTItem } from '../../../contexts/NFTContext';
import { useCustomWallet } from '../../../contexts/WalletContext';
import useToast from '../../../hooks/useToast';
import CommentTabItem from '../CommentTabItem';
import DetailOffers from '../DetailOffers';
import DetailsTabItem from '../DetailsTabItem';
import GradientButton from '../GradientButton';
import PropertyTabItem from '../PropertyTabItem';
import SaleTabItem from '../SaleTabItem';
import BidTabItem from '../BidTabItem';
import StatsTabItem from '../StatsTabItem';
import { CommentIcon } from '../SvgIcons';
import {
  CommentTabContainer,
  TabList,
  Tab,
  TabContent,
  TabPanel,
  CommentSubmit,
  PropertyList,
  TabListWrapper
} from './styles';

const CommentTab = (props) => {

  const { category, types, active, setActive, sales, saleInfo, nftItem, comments, refresh, offers } = props;
  const { invokeServer } = useGlobal();
  const { auth } = useAuth();
  const { wallet } = useCustomWallet();
  const { toastSuccess, toastError, showLoading, hideLoading } = useToast();
  const commentInputRef = useRef();

  const [commentText, setCommentText] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const [properties, setProperties] = useState();

  useEffect(() => {
    nftItem?.attributes && setProperties(t => {
      return {
        items: JSON.parse(nftItem.attributes),
        creator: nftItem.creator.toLowerCase()
      }
    });
  }, [nftItem])

  const handleSubmitComment = () => {
    // Add commnet submit function
    if (nftItem.collectionAddress === undefined)
      return;

    showLoading('Adding a comment...');
    invokeServer('post', '/api/comment', {
      collectionAddress: nftItem.collectionAddress,
      tokenId: nftItem.tokenId,
      content: commentText,
      user: auth.loggedUserName,
      address: wallet.address,
      role: auth.loggedUserRole,
    })
      .then(r => {
        if (r.data.result === 1) {
          hideLoading();
          toastSuccess(auth.loggedUserName, 'Comment added');
          setCommentText('');
          commentInputRef.current.focus();
          refresh && refresh();
        }
      })
      .catch(err => {
        hideLoading();
        toastError(auth.loggedUserName, 'Failed to add a comment');
      })
  }

  return (
    <CommentTabContainer>
      <TabListWrapper>
        <TabList>
          {types.map(type => (
            <Tab
              key={type}
              active={active === type}
              onClick={() => setActive(type)}
            >
              {type}
            </Tab>
          ))}
        </TabList>
      </TabListWrapper>
      <TabContent>
        {
          sales && (<>
            <TabPanel active={active === "Bid"}>
              {sales.bids && sales.bids.map((item) => <BidTabItem key={item._id} data={item} saleInfo={saleInfo} />)}
            </TabPanel>
            <TabPanel active={active === "Auction"}>
              {sales.auctionSales.map((item) => <SaleTabItem key={item._id} data={item} type='bid' refresh={refresh} />)}
            </TabPanel>
          </>)
        }
        <TabPanel active={active === "Comments"}>
          {comments && comments.map((item) => <CommentTabItem key={item._id} data={item} />)}
        </TabPanel>
        {
          sales && (<>
            <TabPanel active={active === "Listing"}>
              {sales.allSales.map((item) => <SaleTabItem key={item._id} data={item} type='listing' />)}
            </TabPanel>
            <TabPanel active={active === "Buy"}>
              {sales.fixedSales.map((item) => <SaleTabItem key={item._id} data={item} type='buy' refresh={refresh} />)}
            </TabPanel>
          </>)
        }
        <TabPanel active={active === "Offer"}>
          <DetailOffers offers={offers} />
        </TabPanel>
        <TabPanel active={active === "Stats"}>
          <StatsTabItem />
        </TabPanel>
        <TabPanel active={active === "Properties"}>
          <PropertyList>
            {properties?.items.map((item) => <PropertyTabItem key={item.id} data={item} creator={properties?.creator} />)}
          </PropertyList>
        </TabPanel>
        <TabPanel active={active === "Details"}>
          <DetailsTabItem />
        </TabPanel>
      </TabContent>
      {active === "Comments" && (
        <CommentSubmit>
          <CommentIcon />
          <input
            type='text'
            className='comment-input'
            value={commentText}
            ref={commentInputRef}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={isFocused ? '' : 'Place a comment'}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <div>
            <GradientButton
              label={'Send'}
              height={'36px'}
              width={'106px'}
              fontSize={'14px'}
              isNoPadding
              isDarkMode={commentText === ''}
              handleClick={handleSubmitComment}
            />
          </div>
        </CommentSubmit>
      )}
    </CommentTabContainer>
  )
}

export default CommentTab;
