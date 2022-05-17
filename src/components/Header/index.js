// Packages
import React, { useState, useContext } from "react"
import { Link, NavLink } from "react-router-dom"

import { LangContext } from "../../context/lang"

import LangSwitcher from "../LangSwitcher"

import { Container, NavItem, MenuButton, Nav } from "./styles"

const Header = () => {
    const { translate } = useContext(LangContext)

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Container>
            <NavItem as={Link} to="/" logo>
                {translate.general.siteName}
            </NavItem>

            <MenuButton
                width={28}
                height={20}
                onClick={() => setIsOpen(!isOpen)}
                color="currentColor"
                open={isOpen}
            />

            <Nav open={isOpen}>
                <NavItem to="/" as={NavLink}>
                    {translate.nav.home}
                </NavItem>

                <LangSwitcher />
            </Nav>
        </Container>
    )
}

export default Header
