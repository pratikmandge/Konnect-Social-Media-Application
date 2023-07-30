import React from 'react'
import { Modal, useMantineTheme } from '@mantine/core'
import PostShare from '../PostShare/PostShare'

const ShareModel = ({modelOpen, setModelOpen}) => {
    const theme = useMantineTheme()
  return (
    <Modal
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayblur={3}
        size='55%'
        opened={modelOpen}
        onClose={() => setModelOpen(false)}
    >
        <PostShare />
    </Modal>
  )
}

export default ShareModel
