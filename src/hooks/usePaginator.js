import { useCallback, useState } from 'react';
import PaginatorComponent from '../components/paginator/Paginator';

const usePaginator = (_limit = 15) => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(_limit);
  const [elements, setElements] = useState(0);

  const Paginator = useCallback(
    () => (
      <PaginatorComponent current={page} setPage={setPage} pageLimit={limit} elements={elements} />
    ),
    [elements, limit, page],
  );

  return {
    Paginator,
    page,
    setPage,
    limit,
    setLimit,
    setElements,
  };
};

export default usePaginator;
