import React from 'react'
import {
  CardPaginationContainer,
  RightArrow,
  LeftArrow
} from './styles'
import BiChevronLeft from '@meronex/icons/bi/BiChevronLeft'
import BiChevronRight from '@meronex/icons/bi/BiChevronRight'
import { useNavigate  } from "react-router-dom"

const CardPagination = (props) => {
  const {
    countPerPage,
    filteredNFTs,
    currentPage,
    mainRouter
  } = props
  const navigate = useNavigate()

  const prevVideos = () => {
    if (currentPage === 1) return
    navigate(`${mainRouter}page/${parseInt(currentPage)-1}`)
  }

  const nextVideos = () => {
    navigate(`${mainRouter}page/${1 + parseInt(currentPage)}`)
  }

  return (
    <CardPaginationContainer>
      <LeftArrow active={currentPage > 1}>
        <BiChevronLeft onClick={prevVideos} />
      </LeftArrow>
      <div className="pagination-text-preserve">
        {currentPage}
      </div>
      <RightArrow active={filteredNFTs.length / countPerPage > currentPage}>
        <BiChevronRight onClick={nextVideos} />
      </RightArrow>
    </CardPaginationContainer>
  )
}

export default CardPagination;