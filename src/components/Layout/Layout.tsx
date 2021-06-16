import Header from "components/Header"
import {FC} from "react"
import styled, {ThemeProvider} from "styled-components"
import theme from "styles/theme"

const LayoutWrapper = styled.div`
    height: 100vh;
    display: grid;
    justify-content: center;
    justify-items: center;
    grid-template-rows: auto 1fr;
`

const Layout: FC = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <LayoutWrapper>
                <Header />
                {children}
            </LayoutWrapper>
        </ThemeProvider>
    )
}

export default Layout
