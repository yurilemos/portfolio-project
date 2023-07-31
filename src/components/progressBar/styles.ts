import styled from "styled-components";

interface ProgressBarWrapperProps {
  progresswidth: string; // Valor em pixels representando a largura da cor de progresso
}

export const ProgressBarContent = styled.div`
  display: block;
  h4 {
    margin-bottom: 0.7rem;
  }
`;

export const ProgressBarComponet = styled.div`
  display: flex;
  gap: 2rem;
`;

export const ProgressBarWrapper = styled.div<ProgressBarWrapperProps>`
  width: ${(props) => props.progresswidth};
  height: 20px;
  border-radius: 10px;
  background-image: linear-gradient(
    -225deg,
    #ac32e4 0%,
    #7918f2 48%,
    #4801ff 100%
  );
  box-shadow: 0 8px 16px rgba(72, 1, 255, 0.4),
    inset 0 8px 16px rgba(72, 1, 255, 0.4);
`;
