import { Menu } from "./MenuSection/Menu";
import { Logo } from "./Logo";
import {
  SectionWrapper,
  Title,
  WelcomeTxt,
  SubTitle,
} from "./StableSection.styled";

export const StableSection = () => {
  return (
    <SectionWrapper>
      <Logo />

      <Title>Hi student!</Title>
      <WelcomeTxt>Welcome to 2022 Front-end test</WelcomeTxt>
      <SubTitle>Lets start using The Cat API</SubTitle>

      <Menu />
    </SectionWrapper>
  );
};
