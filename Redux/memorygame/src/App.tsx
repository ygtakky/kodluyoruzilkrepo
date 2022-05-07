import "./reset.css";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MemoryCard from "./components/MemoryCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useEffect } from "react";
import { duplicateFrameworks, matchCards, randomizeFrameworks } from "./redux/cardSlice";
import { CardType } from "./redux/initialState";
import Header from "./components/Header";

function App() {
  const randomizedFrameworks: CardType[] = useSelector((state: RootState) => state.card.randomizedFrameworks);
  const flippedCounter = useSelector((state: RootState) => state.card.flippedCounter);
  const loaded = useSelector((state: RootState) => state.card.loaded);
  const dispatch = useDispatch();

  useEffect(() => {
    if (flippedCounter === 2) {
      setTimeout(() => {
        dispatch(matchCards())
      }, 1000)
    }
  },[flippedCounter])

  useEffect(() => {
    if (!loaded)  {
      dispatch(duplicateFrameworks())
      dispatch(randomizeFrameworks())
    }
  }, [loaded]);

  return (
    <div className="App d-flex min-vh-100">
      <Container className="p-5 py-4 w-50">
        <Header />
        <Row className="py-4 gap-4 g-0" >
          {randomizedFrameworks.map((framework) => (
            <MemoryCard framework={framework} flippedCounter={flippedCounter} key={framework.id} />
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default App
