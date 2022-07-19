import {
  GreetingSection,
  Title,
  WelcomeTxt,
  SubTitle,
} from "./WelcomeSection.styled";

export const WelcomeSection = () => {
  return (
    <GreetingSection>
      <Title>Hi intern!</Title>
      <WelcomeTxt>Welcome to MI 2022 Front-end test</WelcomeTxt>
      <SubTitle>Lets start using The Cat API</SubTitle>
    </GreetingSection>
  );
};
