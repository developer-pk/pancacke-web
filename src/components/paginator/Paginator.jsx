import React from 'react';
import PropTypes from 'prop-types';
import './Paginator.scss';
import clsx from 'clsx';

const Paginator = ({ current, pageLimit, elements, setPage }) => {
  const handleChangePage = (page) => {
    setPage(page);
  };
  const pagesCount = Math.round(elements / pageLimit);

  const maxPage = pagesCount > 5 ? pagesCount - 5 : pagesCount;
  let pageFrom = current - 2 < 0 ? 0 : current - 2 <= maxPage ? current - 2 : maxPage;

  const pages = new Array(pagesCount)
    .fill('')
    .map((el, index) => index)
    .slice(pageFrom, pageFrom + 5);

  return (
    <div className="Paginator">
      <ul>
        {current > 0 && (
          <li className="icons">
            <button onClick={(e) => handleChangePage(0)}>
              <i className="icon-angle-double-left" />
            </button>
          </li>
        )}
        {current > 0 && (
          <li className="icons">
            <button onClick={(e) => handleChangePage(current - 1)}>
              <i className="icon-angle-left" />
            </button>
          </li>
        )}
        {pages.map((page) => (
          <li key={page} className={clsx({ active: page === current })}>
            <button onClick={(e) => handleChangePage(page)}>{page + 1}</button>
          </li>
        ))}
        {current < pagesCount - 1 && (
          <li className="icons">
            <button onClick={(e) => handleChangePage(current + 1)}>
              <i className="icon-angle-right" />
            </button>
          </li>
        )}
        {current < pagesCount - 1 && (
          <li className="icons">
            <button onClick={(e) => handleChangePage(pagesCount - 1)}>
              <i className="icon-angle-double-right" />
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

Paginator.propTypes = {
  current: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  elements: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

Paginator.defaultProps = {
  pageLimit: 7,
};

export default Paginator;
