import "./App.css";
import Rectangle from "./components/Rectangle.js";
import Triangle from "./components/Triangle.js";
import Geometry from "./components/Geometry.js";

function App() {
  return (
    <div className="App">
      {/* use render props */}
      {/* <Geometry
        render={(data, handleChange, handleSubmit) => (
          <Rectangle
            data={data}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
        input={{ length: 0, width: 0 }}
        calculate={({ length, width }) => 2 * (Number(length) + Number(width))}
      /> */}
      {/* use HOC */}
      <Triangle />
    </div>
  );
}

export default App;
