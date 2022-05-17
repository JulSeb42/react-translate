// Packages
import styled from "styled-components"

// Components
import { Variables } from "tsx-library-julseb"

// Styles
const LinkStyled = styled.button`
    background-color: ${({ active }) =>
        active ? Variables.Colors.Primary500 : "transparent"} !important;
    color: ${({ active }) =>
        active
            ? Variables.Colors.White
            : Variables.Colors.Primary500} !important;
    text-align: left;
    transition: ${Variables.Transitions.Short};

    &:hover {
        background-color: ${Variables.Colors.Primary300} !important;
        color: ${Variables.Colors.White} !important;
    }

    &:active {
        background-color: ${Variables.Colors.Primary600} !important;
    }
`

export { LinkStyled }
