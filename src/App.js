// routes
// import Router from './routes';
import Routers from './route/Routers';

// theme
import ThemeProvider from './theme/ThemeProvider';
// components
import ScrollToTop from './component/ScrollToTop';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Routers/>
      {/* <Router /> */}
    </ThemeProvider>
  );
}
