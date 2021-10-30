import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  .component{
    background: ${({ theme }) => theme.componentBody};
    color: ${({ theme }) => theme.componentText};
  }
  .component:active{
    background: ${({ theme }) => theme.componentBody};
    color: ${({ theme }) => theme.componentText};
  }
  .component:focus{
    background: ${({ theme }) => theme.componentBody};
    color: ${({ theme }) => theme.componentText};
  }
  .sidebar{
    background: ${({ theme }) => theme.sidebar};
  }
  .navbar{
    background: ${({ theme }) => theme.navbar};
  }
  .border-left{
    border-left: ${({ theme }) => theme.border};
  }
  .border-low{
    border-bottom: ${({ theme }) => theme.border};
  }
  .text-grey{
    color: ${({ theme }) => theme.grey};
  }
  `;
