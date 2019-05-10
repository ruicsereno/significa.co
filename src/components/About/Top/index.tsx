import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

import * as S from './styled'

interface ITop {
  aboutYaml: {
    hero: {
      title: string
      photos: Array<{
        alt: string
        image: {
          childImageSharp: {
            fluid: FluidObject
          }
        }
      }>
    }
  }
}

const Top = () => {
  const {
    aboutYaml: { hero: data },
  }: ITop = useStaticQuery(query)

  return (
    <>
      <S.TopWrapper>
        <S.Huge>{data.title}</S.Huge>
      </S.TopWrapper>
      <S.Gallery>
        {data.photos.map(({ image, alt }) => (
          <div key={alt}>
            <Img alt={alt} fluid={image.childImageSharp.fluid} />
          </div>
        ))}
      </S.Gallery>
    </>
  )
}

export default Top

export const query = graphql`
  query AboutHeroQuery {
    aboutYaml {
      hero {
        title
        photos {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`
