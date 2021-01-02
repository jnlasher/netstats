import { createContext, useReducer, useContext } from 'react';

const initialState = {
  totalTime: '',
  topShows: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'LOAD_RESULTS':
      return {
        totalTime: action.data.totalTime,
        topShows: action.data.topShows
      };
    case 'LOAD_FAILED':
      // TODO -- handle error response
      break;
  }
}

const ResultsContext = createContext();

function ResultsProvider({ children }) {
  const [watched, watchedDispatch] = useReducer(reducer, initialState);

  return (
    <ResultsContext.Provider value={{ watched, watchedDispatch }}>
      {children}
    </ResultsContext.Provider>
  );
}

function useResults() {
  return useContext(ResultsContext);
}

export { useResults, ResultsProvider };
export default ResultsProvider;
