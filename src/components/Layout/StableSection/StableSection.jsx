import useMediaQuery from "hooks/useMediaQuery";
import { useLocation } from "react-router-dom";
import { Menu } from "./MenuSection/Menu";
import { Logo } from "./Logo";
import {
  SectionWrapper,
  Title,
  WelcomeTxt,
  SubTitle,
} from "./StableSection.styled";

export const StableSection = () => {
  const isDesktop = useMediaQuery("(min-width: 1440px)");
  const location = useLocation();

  return (
    <SectionWrapper
      style={
        location.pathname === "/" || isDesktop
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <Logo />

      <Title>Hi student!</Title>
      <WelcomeTxt>Welcome to 2022 Front-end test</WelcomeTxt>
      <SubTitle>Lets start using The Cat API</SubTitle>

      <Menu />
    </SectionWrapper>
  );
};
