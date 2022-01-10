import PropTypes from 'prop-types';
import AppExstension from "./AppExstension";
import Options from "../Options";

const cars = [
  { name: 'Jac', type: 'mvs', id: 1},
  { name: 'Jac', type: 'mvs', id: 2},
  { name: 'Jac', type: 'mvs', id: 3}
]


function App({title}) {
  return (
    <div className="App">
      <h1>HELLO</h1>
      {title && <AppExstension title={title} />}
      {cars.length> 0 && <Options options={cars} />}
    </div>
  );
}

App.propTypes = {
  title: PropTypes.string,
}

export default App;
