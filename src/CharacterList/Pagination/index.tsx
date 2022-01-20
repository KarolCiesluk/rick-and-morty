import { useGoToPage } from "./useGoToPage";

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
    <nav>
      <button disabled={currentPage === 1} onClick={goToFirstPage}>
        First Page
      </button>
      <button disabled={currentPage === 1} onClick={goToPreviousPage}>
        Previous Page
      </button>
      <span>{currentPage} of {lastPage}</span>
      <button disabled={currentPage === lastPage} onClick={goToNextPage}>
        Next Page
      </button>
      <button disabled={currentPage === lastPage} onClick={goToLastPage}>
        Last Page
      </button>
    </nav>
  );
};

export default Pagination;