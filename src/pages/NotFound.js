// Packages
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Font } from "tsx-library-julseb"

import { LangContext } from "../context/lang"

import Page from "../components/Page"

const NotFound = () => {
    const { translate } = useContext(LangContext)

    return (
        <Page title={translate.notFound.title}>
            <Font.H1>{translate.notFound.title}</Font.H1>

            <Font.P>
                <Link to="/">{translate.notFound.link}</Link>
            </Font.P>
        </Page>
    )
}

export default NotFound
