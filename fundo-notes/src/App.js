import RoutingModule from './RoutingModule'
import SearchQueryHoc from './components/searchQueryHoc/SearchQueryHoc';

function App() {
  return (
    <div className="App">
      <SearchQueryHoc>
        <RoutingModule />
      </SearchQueryHoc>

    </div>
  );
}

export default App;
