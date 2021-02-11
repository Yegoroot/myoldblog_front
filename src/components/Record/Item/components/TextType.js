/* eslint-disable react/prop-types */
import React from 'react'
import {
  Box,
} from '@material-ui/core'
import DOMPurify from 'dompurify'

const TextType = ({ content }) => {
  const { subtitle, data/* , _id */ } = content
  const clean = DOMPurify.sanitize(data)

  return (
    <Box>
      {subtitle ? (
        <h2 className="subtitle">{subtitle}</h2>
      ) : null}
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: clean }} />
    </Box>
  )
}

export default TextType
