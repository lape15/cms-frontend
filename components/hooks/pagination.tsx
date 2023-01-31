import { PaginFooter } from "../../helper/styles";

type PaginProp = {
  page: number;
  changePage: (pg: string) => void;
  lastPage: number;
};
export const Pagination = (props: PaginProp) => {
  const { page, changePage, lastPage } = props;
  const pageMinusOne = page - 1;
  const pageMinusTwo = page - 2;
  const oulinedPrev = [0, 1, 2, 3];
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
      {!oulinedPrev.includes(lastPage) && lastPage > page && (
        <button>{lastPage}</button>
      )}
      <button className="nxt" onClick={() => changePage("next")}>
        Next
      </button>
    </PaginFooter>
  );
};
