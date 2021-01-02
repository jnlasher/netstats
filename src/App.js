import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import ResultsProvider from './context/WatchResultsContext';
import AppRouter from './containers/Routes';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: red
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <main className="App-main">
          <ResultsProvider>
            <AppRouter />
          </ResultsProvider>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
