
import ReactPaginate from "react-paginate";
export const Pagination = ({ getPageMovies, Count }) => {
  const handlePageClick = (page) => {
    getPageMovies(page.selected + 1);
  };
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" > "
        previousLabel=" < "
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={Count}
        renderOnZeroPageCount={null}
        containerClassName={"pagination  justify-content-center "}
        pageClassName={"page-item "}
        previousClassName={"page-item "}
        pageLinkClassName={"page-link  "}
        nextClassName={"page-item"}
        previousLinkClassName={" page-link"}
        nextLinkClassName={" page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active "}
      />
    </>
  );
};
