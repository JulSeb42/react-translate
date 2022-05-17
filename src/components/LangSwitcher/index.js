// Packages
import React, { useContext, useState } from "react"
import { Button, Dropdown, DropdownContainer } from "tsx-library-julseb"

import { LangContext } from "../../context/lang"

// Styles
import { LinkStyled } from "./styles"

const LangSwitcher = () => {
    const { lang, setLanguage, translate } = useContext(LangContext)

    const [isOpen, setIsOpen] = useState(false)

    const handleChange = language => {
        setLanguage(language)
        setIsOpen(false)
    }

    return (
        <DropdownContainer>
            <Button
                btnStyle="text"
                noPadding
                iconRight="chevron-down"
                onClick={() => setIsOpen(!isOpen)}
            >
                {translate.general.switchLang}
            </Button>

            <Dropdown isOpen={isOpen}>
                <LinkStyled
                    active={lang === "en" ? true : false}
                    onClick={() => handleChange("en")}
                >
                    English
                </LinkStyled>

                <LinkStyled
                    active={lang === "fr" && true}
                    onClick={() => handleChange("fr")}
                >
                    Français
                </LinkStyled>
            </Dropdown>
        </DropdownContainer>
    )
}

export default LangSwitcher
