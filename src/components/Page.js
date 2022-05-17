// Packages
import React, { useContext } from "react"
import { Helmet, Wrapper, Main } from "tsx-library-julseb"
import PropTypes from "prop-types"

import { LangContext } from "../context/lang"

import Header from "./Header"

import siteData from "../data/siteData"

const Page = ({ title, description, keywords, cover, template, children }) => {
    const { translate } = useContext(LangContext)

    return (
        <>
            <Helmet
                title={`${title} | ${translate.general.siteName}`}
                description={description}
                keywords={[siteData.keywords, keywords]}
                siteName={siteData.name}
                favicon={siteData.favicon}
                author={siteData.author}
                type={siteData.type}
                cover={cover || siteData.cover}
                language={siteData.language}
            />

            <Header />

            <Wrapper template={template}>
                <Main template={template}>{children}</Main>
            </Wrapper>
        </>
    )
}

Page.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    keywords: PropTypes.array,
    cover: PropTypes.string,
    template: PropTypes.string,
    children: PropTypes.node,
}

export default Page
