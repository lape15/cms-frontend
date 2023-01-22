import { PaginFooter } from "../../helper/styles";

type PaginProp = {
  page: number;
};
export const Pagination = (props: PaginProp) => {
  const { page } = props;
  const pageMinusOne = page - 1;
  const pageMinusTwo = page - 2;
  const oulinedPrev = [1, 2, 3];
  return (
    <PaginFooter className="pagin_foot">
      <button className="prv">Prev</button>
      <div className="btns">
        {page > 3 && (
          <>
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </>
        )}
        {!oulinedPrev.includes(pageMinusOne) &&
          Math.sign(pageMinusOne) === 1 && <button>{pageMinusOne}</button>}
        {!oulinedPrev.includes(pageMinusTwo) &&
          Math.sign(pageMinusOne) === 1 && <button>{pageMinusTwo}</button>}
        {page > 5 && <button>...</button>}

        <button className="active">{page}</button>
      </div>
      <button className="nxt">Next</button>
    </PaginFooter>
  );
};
