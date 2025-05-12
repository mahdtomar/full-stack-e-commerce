import { useMemo } from "react";
import { useDateRange } from "./../context/DateRangeContext";

const useFilteredDateQuery = () => {
  const { fromMonth, fromYear, toMonth, toYear, showToDate } = useDateRange();

  const query = useMemo(() => {
    return {
      fromMonth,
      fromYear,
      ...(showToDate && { toMonth, toYear }),
    };
  }, [fromMonth, fromYear, toMonth, toYear, showToDate]);
  return query;
};

export default useFilteredDateQuery;
