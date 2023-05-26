import React, { useState, useEffect } from 'react'
import { Input } from '../../Shared/InputBox'
import GradientButton from '../../Shared/GradientButton'
import AiOutlinePlus from '@meronex/icons/ai/AiOutlinePlus'
import MainModal from '../../Shared/MainModal'
import FiEdit from '@meronex/icons/fi/FiEdit'
import { AddTagForm } from './AddTagForm'
import FaRegWindowClose from '@meronex/icons/fa/FaRegWindowClose'
import { AddTagIcon } from '../../Shared/SvgIcons'

import {
  ProjectTagsContainer,
  InputWrapper,
  ButtonGroup,
  AddTagButtonContainer,
  AddTagButton,
  TagListContainer,
  TagWrapper
} from './styles'
import { useTranslation } from 'react-i18next'

export const ProjectTags = (props) => {
  const {
    creatorInfo,
    setCreatorInfo,
    handleSubmit,
    handleBack
  } = props

  const [openAddTagModal, setOpenAddTagModal] = useState(false)
  const [tagList, setTagList] = useState(creatorInfo.tags === ''? []: JSON.parse(creatorInfo.tags))
  const { t }= useTranslation();
  const handleAddTag =  (newTag) => {
    setTagList([
      ...tagList,
      {
        id: tagList.length > 0 ? tagList[tagList.length - 1].id + 1 : 1,
        ...newTag
      }
    ])
  }

  const handleRemoveTag = (tagId) => {
    const _taglist = tagList.filter(tag => tag.id !== tagId)
    setTagList(_taglist)
  }

  useEffect(() => {
    setCreatorInfo(t => { return {
      ...t,
      tags: JSON.stringify(tagList)
    }})
  }, [tagList])

  return (
    <>
      <ProjectTagsContainer>
        {/* <InputWrapper>
          <label><span>*</span>Tag List Name</label>
          <Input
            name='list_name'
            placeholder='You can enter you full name, business name, or brand name'
          />
        </InputWrapper> */}
        <AddTagButtonContainer>
          <div>
            <AddTagIcon />
            <span>{t("Add Tag")}</span>
          </div>
          <AddTagButton
            onClick={() => setOpenAddTagModal(true)}
          >
            <AiOutlinePlus />
          </AddTagButton>
        </AddTagButtonContainer>
        <TagListContainer>
          {tagList.map(tag => (
            <TagWrapper key={tag.id}>
              <span>{tag?.name}</span>
              <FaRegWindowClose
                onClick={() => handleRemoveTag(tag.id)}
              />
            </TagWrapper>
          ))}
        </TagListContainer>
        <ButtonGroup>
          <GradientButton
            label='Back'
            isNoPadding
            isDarkMode
            height='41px'
            handleClick={() => handleBack()}
          />
          <GradientButton
            isNoPadding
            label='Submit'
            height='41px'
            handleClick={handleSubmit}
          />
        </ButtonGroup>
      </ProjectTagsContainer>

      {openAddTagModal && (
        <MainModal
          icon={<FiEdit />}
          title='Edit Tag'
          width='556px'
          height='418px'
          handleClose={() => setOpenAddTagModal(false)}
        >
          <AddTagForm
            handleClose={() => setOpenAddTagModal(false)}
            handleSave={handleAddTag}
          />
        </MainModal>
      )}
    </>
  )
}