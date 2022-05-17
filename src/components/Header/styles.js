// Packages
import styled, { css } from "styled-components"
import { Burger, Variables } from "tsx-library-julseb"

const Container = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${Variables.Spacers.M} 5vw;
    position: relative;
`

const NavItem = styled.span`
    text-decoration: none;
    color: ${Variables.Colors.Primary500};
    transition: ${Variables.Transitions.Short};
    padding: 0;
    border: none;
    background: none;
    font-size: ${Variables.FontSizes.Body};

    &:hover {
        color: ${Variables.Colors.Primary300};
    }

    &:active {
        color: ${Variables.Colors.Primary600};
    }

    &.active {
        font-weight: ${Variables.FontWeights.Black};
    }

    ${props =>
        props.logo &&
        css`
            font-weight: ${Variables.FontWeights.Black};
        `}
`

const MenuButton = styled(Burger)`
    display: none;
    color: ${Variables.Colors.Primary500};

    @media ${Variables.Breakpoints.Mobile} {
        display: inline;
    }
`

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: ${Variables.Spacers.M};

    @media ${Variables.Breakpoints.Mobile} {
        position: absolute;
        flex-direction: column;
        align-items: flex-start;
        left: 0;
        width: 100%;
        top: ${props => (props.open ? "56px" : "-200px")};
        padding: ${Variables.Spacers.XS} 5vw;
        z-index: 999;
        background-color: ${Variables.Colors.White};
        transition: ${Variables.Transitions.Short};
        gap: ${Variables.Spacers.XS};
    }
`

export { Container, NavItem, MenuButton, Nav }
