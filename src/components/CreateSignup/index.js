import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { TabList } from '../Shared/CommentTab/styles'
import { UserInfo } from './UserInfo'
import { ProjectInfo } from './ProjectInfo'
import { ProjectTags } from './ProjectTags'

import {
  CreateSignupContainer,
  FormContainer,
  HeroContainer,
  Tabs,
  Tab
} from './styles'
import { useAuth } from '../../contexts/AuthContext'

export const CreateSignup = (props) => {
  const theme = useTheme()
  const [showOption, setShowOption] = useState('userInfo')
  const { creatorSignupInfo, setCreatorSignupInfo, handleSubmitCreatorInfo } = useAuth();

  const tabItems = [
    { key: 'userInfo', content: 'User Info' },
    { key: 'projectInfo', content: 'Project Info' },
    { key: 'projectTags', content: 'Project Tags' }
  ]
  return (
    <CreateSignupContainer>
      <FormContainer>
        <Tabs>
          {tabItems.map(tab => (
            <Tab
              key={tab.key}
              active={tab.key === showOption}
              onClick={() => setShowOption(tab.key)}
            >
              {tab.content}
            </Tab>
          ))}
        </Tabs>
        {showOption === 'userInfo' && (
          <UserInfo
            creatorInfo={creatorSignupInfo}
            setCreatorInfo={setCreatorSignupInfo}
            handleNext={() => setShowOption('projectInfo')}
          />
        )}
        {showOption === 'projectInfo' && (
          <ProjectInfo
            creatorInfo={creatorSignupInfo}
            setCreatorInfo={setCreatorSignupInfo}
            handleBack={() => setShowOption('userInfo')}
            handleNext={() => setShowOption('projectTags')}
          />
        )}
        {showOption === 'projectTags' && (
          <ProjectTags
            creatorInfo={creatorSignupInfo}
            setCreatorInfo={setCreatorSignupInfo}
            handleSubmit={handleSubmitCreatorInfo}
            handleBack={() => setShowOption('projectInfo')}
          />
        )}
      </FormContainer>
      <HeroContainer bgimage={theme.images.signupHero} />
    </CreateSignupContainer>
  )
}