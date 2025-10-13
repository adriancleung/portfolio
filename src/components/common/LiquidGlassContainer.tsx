import styled from "styled-components";

const NavContainer = styled.nav`
  --bg-color: rgba(255, 255, 255, 0.25);
  --highlight: rgba(255, 255, 255, 0.75);
  --text: #ffffff;

  position: fixed;
  max-width: 600px;
  left: 50%;
  bottom: 32px;
  transform: translateX(-50%);
  border-radius: 12px;
  overflow: hidden;
  background: transparent;

  @media (prefers-color-scheme: dark) {
    --bg-color: rgba(0, 0, 0, 0.25);
    --highlight: rgba(255, 255, 255, 0.15);
  }
`;

const BaseGlass = styled.div`
  position: absolute;
  inset: 0;
  border-radius: inherit;
`;

const GlassFilter = styled(BaseGlass)`
  z-index: 1;
  backdrop-filter: blur(4px);
  filter: url(#glass-distortion) saturate(120%) brightness(1.15);
`;

const GlassOverlay = styled(BaseGlass)`
  z-index: 2;
  background: var(--bg-color);
`;

const GlassSpecular = styled(BaseGlass)`
  z-index: 3;
  box-shadow: inset 1px 1px 1px var(--highlight);
`;

const GlassContent = styled.div`
  position: relative;
  z-index: 4;
  padding: 16px;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 24px;
`;

const NavItem = styled.a`
  color: var(--text);
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

interface LiquidGlassContainerProps {
  links: { href: string; title: string }[];
}

const LiquidGlassContainer = ({ links }: LiquidGlassContainerProps) => {
  return (
    <>
      <svg style={{ display: "none" }}>
        <filter id="glass-distortion">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.008"
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="77" />
        </filter>
      </svg>
      <NavContainer>
        <GlassFilter />
        <GlassOverlay />
        <GlassSpecular />
        <GlassContent>
          <NavList>
            {links.map((link) => (
              <li key={link.title}>
                <NavItem href={link.href}>{link.title}</NavItem>
              </li>
            ))}
          </NavList>
        </GlassContent>
      </NavContainer>
    </>
  );
};

export default LiquidGlassContainer;
