// Imports
import React, { useContext } from "react"
import { Font } from "tsx-library-julseb"

import { LangContext } from "../context/lang"

import Page from "../components/Page"

const Homepage = () => {
    const { translate } = useContext(LangContext)

    return (
        <Page title={translate.homepage.title}>
            <Font.H1>{translate.homepage.greetings}</Font.H1>

            <Font.P>{translate.homepage.message}</Font.P>
        </Page>
    )
}

export default Homepage
