// Imports
import React, { useState, useEffect, createContext } from "react"

import fr from "../translations/fr"
import en from "../translations/en"

const LangContext = createContext()

const LangProviderWrapper = ({ children }) => {
    const [lang, setLang] = useState(null)

    const setLanguage = lang => {
        localStorage.setItem("language", lang)
        setLang(lang)
    }

    const detectLanguage = () => {
        if (localStorage.getItem("language") === null) {
            setLanguage(navigator.language)
        } else {
            setLanguage(localStorage.getItem("language"))
        }
    }

    const translate = lang === "fr" ? fr : en

    useEffect(() => {
        detectLanguage()
        // eslint-disable-next-line
    }, [])

    return (
        <LangContext.Provider
            value={{
                lang,
                setLanguage,
                translate,
            }}
        >
            {children}
        </LangContext.Provider>
    )
}

export { LangContext, LangProviderWrapper }
