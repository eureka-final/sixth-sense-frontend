import AppScreen from './routes/AppScreen';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={FallbackUI}>
          <BrowserRouter>
            <AppScreen />
          </BrowserRouter>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}

export default App;
