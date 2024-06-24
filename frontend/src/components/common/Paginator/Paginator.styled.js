import styled from "styled-components";

export const StyledPaginateContainer = styled.div`
  margin-top: ${(p) => p.theme.spacing(5)};

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${(p) => p.theme.spacing(2)};

    font-size: 8px;
  }

  .previous,
  .next,
  .break {
    display: none;
  }

  .page-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;

    @media screen and (min-width: 768px) {
      width: 19px;
      height: 19px;
    }
  }

  .page-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 9.5px;
    height: 9.5px;

    text-align: center;
    color: transparent;
    cursor: pointer;

    border-radius: 50%;
    background-color: #e7f1ed;
  }

  .selected-page-link {
    width: 11.88px;
    height: 11.88px;

    line-height: 11.88px;

    background-color: ${(p) => p.theme.colors.green()};
  }
`;
