import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import Default_Page from './pages/Default_Page';
import GetId_Page from './pages/GetId_Page';

type AppProps = {
  isStart?: boolean
}

function App(props: AppProps) {
  return (
    // <>
    //   {/* {props.isStart ? <Wellcome /> : true} */}
    //   <Wellcome />
    // </>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default_Page />} />
        <Route path="/IdPage" >
          <Route path=":component_id" element={<GetId_Page />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App;

