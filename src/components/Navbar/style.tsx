import { styled } from "../../styles/stitches.config";
import { Flex, Container } from "../../styles/Global";
import { Button } from "../../styles/Buttons";
import { colors} from "../../styles/Global";
import { FaRegIdBadge } from "react-icons/fa";

export const Navbar = styled("nav", {
  backdropFilter: "blur(10px)",
  background: "rgba(255, 255, 255,0)",
  //background: "$mode",
  
  position: "fixed",
  inset: 0,
  bottom: "auto",
  padding: "1rem 0",
  width: "100%",
  zIndex: "99999",

  [`& ${Container}`]: {
    display: "flex",
    justifyContent: "space-between",
    "@mobile": {
        flexDirection: "column"
    },
  },
});

export const LogoTipo = styled(Flex, {
  alignItems: "center",
});

export const LogoTipoImage = styled("img", {

  width: "3rem",
  height: "3rem",
  borderRadius: "50%",
  "@mobile": {
    width: "2.25rem",
    height: "2.25rem",
  }
});

export const LogoTipoText = styled("span", {
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "$brand2",
  fontFamily: '"Play"',
  "@mobile": {
    fontSize: "1rem",
  }
});

export const NavbarLinks = styled(Flex, {
  
  "@mobile": {
    
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: "$3",
    [`& ${Button}:nth-child(1)`]: {
      width: "100%",
      order: "3",
    },
    [`& ${Button}`]: {
      width: "48%",
      order: "1",
    },
  },
  
});

export const NavbarMobileArea = styled("div", {
    border: "none",
   display: "flex",
   justifyContent: "space-between"
});

