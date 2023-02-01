import { ChangeEvent } from "react";
import { PaginFooter } from "../../helper/styles";

type PaginProp = {
  page: number;
  changePage: (pg: string) => void;
  lastPage: number;
  postsPerPage: number;
  handlepostCountChange: (ct: number) => void;
};

const postOptions = [20, 50, 100];
export const Pagination = (props: PaginProp) => {
  const { page, changePage, lastPage, postsPerPage, handlepostCountChange } =
    props;
  const pageMinusOne = page - 1;
  const pageMinusTwo = page - 2;
  const oulinedPrev = [0, 1, 2, 3];
  const truncLastPage = Math.trunc(lastPage);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handlepostCountChange(Number(e.target.value));
  };

  return (
    <PaginFooter className="pagin_foot">
      <button className="prv" onClick={() => changePage("prev")}>
        Prev
      </button>
      <div className="btns">
        {page > 3 && (
          <div className="side_btn">
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
        )}
        {!oulinedPrev.includes(pageMinusOne) &&
          Math.sign(pageMinusOne) === 1 && <button>{pageMinusOne}</button>}
        {!oulinedPrev.includes(pageMinusTwo) &&
          Math.sign(pageMinusOne) === 1 && <button>{pageMinusTwo}</button>}
        {page > 5 && <button>...</button>}

        <button className="active">{page}</button>
      </div>
      {!oulinedPrev.includes(truncLastPage) && truncLastPage !== page && (
        <button>{truncLastPage}</button>
      )}

      <div>
        <select value={postsPerPage} onChange={handleChange}>
          {postOptions.map((pt) => (
            <option key={pt}>{pt}</option>
          ))}
        </select>
      </div>
      <button className="nxt" onClick={() => changePage("next")}>
        Next
      </button>
    </PaginFooter>
  );
};
