import styled from '@emotion/styled';

function getWidthString(span) {
  if (!span) return;

  let width = span / 12 * 100;
  return `width ${width}%;`;
}

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 2rem;
`;

export const ResponsiveImage = styled.img`
  width: 100%;
  height: auto;
`;

export const Row = styled.div`
  &::after {
      content: "";
      clear: both;
      display: table;
  }
`;

export const Col = styled.div`
  float: left;
  ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};

  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthString(sm)};
  }

  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidthString(md)};
  }

  @media only screen and (min-width: 992px) {
    ${({ lg }) => lg && getWidthString(lg)};
  }
`;

export const GlobalStyle = styled.div`
  box-sizing: inherit;
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
  }
`