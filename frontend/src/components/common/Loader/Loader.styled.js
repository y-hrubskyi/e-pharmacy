import styled from "styled-components";

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
`;

export const Loader = styled.div`
  width: 50px;
  aspect-ratio: 1;
  display: grid;

  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    --c: no-repeat
      radial-gradient(
        farthest-side,
        ${(p) => p.theme.colors.green()} 92%,
        #0000
      );
    background:
      var(--c) 50% 0,
      var(--c) 50% 100%,
      var(--c) 100% 50%,
      var(--c) 0 50%;
    background-size: 12px 12px;
    animation: l12 1s infinite;
  }

  &::before {
    margin: 4px;
    filter: hue-rotate(45deg);
    background-size: 8px 8px;
    animation-timing-function: linear;
  }

  @keyframes l12 {
    100% {
      transform: rotate(0.5turn);
    }
  }
`;
