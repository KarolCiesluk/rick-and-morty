import { useGoToPage } from "./useGoToPage";
import { ReactComponent as Arrow } from "./arrow.svg";
import {
  LeftArrow,
  PageNumber,
  PaginationButton,
  StyledPagination
} from "./styled";

interface PaginationProps {
  lastPage: number;
  currentPage: number;
}

const Pagination = ({ lastPage, currentPage }: PaginationProps) => {
  const goToPage = useGoToPage();

  const goToFirstPage = () => {
    goToPage(1);
  };

  const goToPreviousPage = () => {
    goToPage(currentPage - 1);
  };

  const goToNextPage = () => {
    goToPage(currentPage + 1);
  };

  const goToLastPage = () => {
    goToPage(lastPage);
  };

  return (
    <StyledPagination>

      <PaginationButton
        disabled={currentPage === 1}
        onClick={goToFirstPage}
      >
        <LeftArrow /><LeftArrow />
      </PaginationButton>

      <PaginationButton
        disabled={currentPage === 1}
        onClick={goToPreviousPage}
      >
        <LeftArrow />
      </PaginationButton>

      <PageNumber>{currentPage} of {lastPage}</PageNumber>

      <PaginationButton
        disabled={currentPage === lastPage}
        onClick={goToNextPage}
      >
        <Arrow />
      </PaginationButton>

      <PaginationButton
        disabled={currentPage === lastPage}
        onClick={goToLastPage}
      >
        <Arrow /><Arrow />
      </PaginationButton>

    </StyledPagination>
  );
};

export default Pagination;