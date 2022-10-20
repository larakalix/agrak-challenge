import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { changeMessage, selectMessage } from "../redux/slices/basicSlice";
import { RoutesNav } from "../routes/Routes";

import "./App.css";

function App() {
    const message = useAppSelector(selectMessage);
    const dispatch = useAppDispatch();

    return (
        <main>
            <RoutesNav />

            {/* <div>
                <h1>{message}</h1>
            </div> */}
        </main>
    );
}

export default App;
