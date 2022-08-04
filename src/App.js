
import './App.css';
import Content from "./components/Contents/Content";
import {Routes, Route, Link, BrowserRouter,} from "react-router-dom";
import Nav from "./components/Navigation/Nav";
import People from "./components/Contents/PeopleOnly/People";
import Chat from "./components/AloneChat/Chat";
import {data} from './components/Data'
import TaskBar from "./components/TaskBar";


const App=()=> {
    const name=data.map((el)=>el.name)
    console.log(`/person/`+name.map((el)=>el));
  return (
      <BrowserRouter>
    <div className="App">
      <div className="container">
        <div className="App__row">
                <Routes>
                    <Route path={'/*'} element={<Content/>}/>
                    <Route path={`/person/`+name.map((el)=>el)} element={<Chat/>}/>
                </Routes>

        </div>
      </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
