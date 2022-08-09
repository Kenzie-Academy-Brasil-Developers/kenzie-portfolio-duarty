import { styled } from '@/styles/stitches.config';
import { colors } from '@/styles/Global'

export const Button = styled('button', {
    border: "none",
    height: "2.75rem",
    appearance: "none",
    color: "#ffaa01",
    fontWeight: "600",
    padding: "0 2rem",
    borderRadius: "$1",
    cursor: "pointer",
    fontSize: "1rem",
    fontFamily: "$texts",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "max-content",

    variants: {
        type: {
            btLink: {
                background: "transparent",
                borderColor: "transparent",
            },
            primary: {
                background: "transparent",
               
                color: "$whiteFixed",
                "&:hover": {
                    backgroundColor:"transparent",
                   
                }
            },
            icon: {
                borderColor: "#ffaa01",
                backgroundColor: "transparent",
                "&:hover": {
                    backgroundColor: "transparent",
                    borderBottom: '1px solid #ffaa01',
                    borderRadius: "0px"
                }
            },
            circle: {
                background: "none",
                padding: "0",
                width: "2.75rem",
                height: "2.75rem",
                
            }
        },
        ...colors
    }
})