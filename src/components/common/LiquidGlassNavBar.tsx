import LiquidGlassContainer from "./LiquidGlassContainer";

const LiquidGlassNavBar = () => {
  return (
    <LiquidGlassContainer
      links={[
        { href: "#work", title: "Work" },
        { href: "#projects", title: "Projects" },
      ]}
    />
  );
};

export default LiquidGlassNavBar;
