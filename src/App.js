import { Provider } from 'react-redux';

import { store } from './Store';
import Routers from './routers/Routers';

const App = () => {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
};

export default App;
