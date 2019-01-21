import React from 'react'

import { Link, Arrow } from './styled'

export interface IArrowLink {
  to: string
  children: React.ReactNode
  highlight?: boolean
  reverse?: boolean
}

const ArrowLink: React.FC<IArrowLink> = props => (
  <Link {...props}>
    {props.children}
    <Arrow />
  </Link>
)

export { ArrowLink }