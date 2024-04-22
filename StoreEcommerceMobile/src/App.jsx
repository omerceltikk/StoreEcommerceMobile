import 'react-native-gesture-handler';
import Router from "./Router";
import FlashMessage from "react-native-flash-message";
import { Provider } from 'react-redux'
import store from "./Redux/Store";


function App() {
  return (
    <>
      <Provider store={store}>
          <Router />
        <FlashMessage position="top" />
      </Provider>
    </>
  );
}
export default App;
