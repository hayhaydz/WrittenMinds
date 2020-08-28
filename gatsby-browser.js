import React from 'react'
import SimpleReactLightbox from 'simple-react-lightbox'

require('typeface-lora')
require('typeface-montserrat')

// Simple React Lightbox
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
  <SimpleReactLightbox>{element}</SimpleReactLightbox>
)