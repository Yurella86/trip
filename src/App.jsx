import HomePage from "./components/HomePage";
import "./style/app.scss";
import TripProvider from "./store/TripProvider";

function App() {
    return (
        <TripProvider>
            <div className="app">
                <HomePage />
            </div>
        </TripProvider>
    );
}

export default App;
