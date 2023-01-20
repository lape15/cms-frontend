import { useState } from "react";

export const usePagination = () => {
  const [active, setActive] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(2);

  const handlePostPerPageChange = (count: number) => {
    setPostPerPage(count);
  };
  const handlePageChange = (n: number) => {
    console.log(n);
  };
};
