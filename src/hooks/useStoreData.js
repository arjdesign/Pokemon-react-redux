import { useSelector } from "react-redux";

function useStoreData() {
  const initialPokiData = useSelector((state) => state.inititalFetchPoki.data);
  const randomPokiData = useSelector((state) => state.randomFetchPoki.data);
  const initialPokiDataIsLoading = useSelector(
    (state) => state.inititalFetchPoki.loading
  );
  const randomPokiDataIsLoading = useSelector(
    (state) => state.randomFetchPoki.loading
  );
  return {
    initialPokiData,
    randomPokiData,
    initialPokiDataIsLoading,
    randomPokiDataIsLoading,
  };
}

export default useStoreData;
