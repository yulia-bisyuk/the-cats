import { WelcomeSection } from "./WelcomeSection/WelcomeSection";
import { MenuSection } from "./MenuSection/MenuSection";
import { Logo } from "./Logo/Logo";
import { SectionWrapper } from "./StableSection.styled";

export const StableSection = () => {
  return (
    <SectionWrapper>
      <Logo />
      <div style={{ width: "446px", height: "450px" }}>
        <WelcomeSection />
        <MenuSection />
      </div>
    </SectionWrapper>
  );
};
