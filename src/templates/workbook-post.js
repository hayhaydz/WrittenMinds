import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MdFileDownload } from 'react-icons/md'
import { SRLWrapper } from 'simple-react-lightbox'

import Layout from '../components/Layout/Layout'
import OtherWorkbooks from '../components/OtherWorkbooks/OtherWorkbooks'

const Workbook = ({ data }) => {
    const [downloading, setDownloading] = useState(false)
    const options = {
        buttons: {
            showAutoplayButton: false,
            showDownloadButton: false,
            showThumbnailsButton: false
        },
        thumbnails: {
            showThumbnails: false
        }
    }

    return (
        <Layout>
            <article className="Workbook">
                <Img fluid={data.markdownRemark.frontmatter.cover_image.childImageSharp.fluid} className="Workbook__img" placeholderStyle={{filter: `blur(16px)`, transform: `scale(1.04)`}}/>
                <div className="Workbook__right">
                    <span className="Workbook__right--detail-title">TITLE</span>
                    <h1 className="Workbook__right--title">{data.markdownRemark.frontmatter.title}</h1>
                    <span className="Workbook__right--detail-title">DESCRIPTION</span>
                    <p className="Workbook__right--desc">{data.markdownRemark.frontmatter.description}</p>
                    <span className="Workbook__right--detail-title">PRICE</span>
                    <h3 className="Workbook__right--price">{data.markdownRemark.frontmatter.price}</h3>
                    <a href={data.markdownRemark.frontmatter.workbook_pdf.relativePath} className="Workbook__right--download" onClick={() => setDownloading(true)} download>
                        {!downloading ?
                            'Download'
                            : 'Downloading...'
                        }
                    <MdFileDownload className="Workbook__right--download--icon"/></a>
                    <span className="Workbook__right--detail-title">PAGE EXAMPLES</span>
                    <SRLWrapper options={options}>
                        <div className="Workbook__right--preview">
                            {data.markdownRemark.frontmatter.galleryImages.map((data, index) =>(
                                <Img fluid={data.childImageSharp.fluid} key={index} className="Workbook__right--preview--img" placeholderStyle={{filter: `blur(16px)`, transform: `scale(1.04)`}}/>
                            ))}
                        </div>
                    </SRLWrapper>
                </div>
            </article>
            <OtherWorkbooks currentWorkbook={data}/>
        </Layout>
    )
}
export default Workbook

export const pageQuery = graphql`
    query WorkbookPostBySlug($slug: String) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                description
                price
                workbook_pdf {
                    relativePath
                }
                cover_image {
                    childImageSharp {
                        fluid(maxWidth: 1920, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                galleryImages {
                    childImageSharp {
                        fluid(maxWidth: 1920, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`