import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,
    *::after,
    *::before{
        margin:0;
        padding:0;
        -webkit-font-smoothing: antiliased;
        -moz-osx-font-smoothing: grayscale;
        }

        html{
            font-size: 62.5%;
            box-sizing: border-box;
            --color-main: ${props => props.theme.colors.main};
            --color-secondary: ${props => props.theme.colors.secondary};
            --color-text: ${props => props.theme.colors.textColor};
            --color-white: ${props => props.theme.colors.whiteColor};
            --color-shadow: ${props => props.theme.colors.shadow};
            --color-blackMatte: ${props => props.theme.colors.blackMatte};
            --color-MoreBlack: ${props => props.theme.colors.MoreBlack};


            @media ${props => props.theme.MediaQueries.smallest} {
                font-size : 55%
            }

                @media ${props => props.theme.MediaQueries.small} {
                font-size : 60%
            }

        }

        body{
            font-family: 'Montserrat', sans-serif;
            line-height : 1.6;
            overflow-x:hidden;
         }

        button ,a , input, textarea{
            outline : none;
            text-decoration: none; 
            font-family : inherit;
        }   

`;
