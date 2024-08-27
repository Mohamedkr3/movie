import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
export const PagTv = ({ getPageTv, CounTv }) => {
  const handlePageClick = (page) => {
    getPageTv(page.selected + 1);
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
        pageCount={CounTv}
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
