import "./App.css";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";

import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

function App() {
  return (
    <div className="container mx-auto px-4 App">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/show" exact component={StreamShow} />
          <Route path="/streams/create" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
