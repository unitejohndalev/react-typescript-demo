import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Box from "./components/context/Box";
import ThemeContextProvider from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import Counter from "./components/state/Counter";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/context/User";
import DomRef from "./components/ref/DomRef";
import MutableRef from "./components/ref/MutableRef";

function App() {
  //object
  const personName = {
    first: "Dale",
    last: "Unite",
  };

  //array
  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      {/* <Greet name='Dale' messageCount={20} isLoggedIn={false}/> */}
      {/* <Person name = {personName}/> */}
      {/* <PersonList names={nameList}/> */}
      {/* <Status status = 'success'/> */}
      {/* <Heading>Placeholder text</Heading> */}
      {/* <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar> */}
      {/* <Greet name="Dale" isLoggedIn={true} /> */}
      {/* <Input value='' handleChange={event => console.log(event)}/>
      <Button handleClick={(event, id) => {
        console.log("Button Clicked", event, id)
      }}/> */}
      {/* <Container style={{ border: "1px solid black", padding: "rem" }} /> */}
      {/* <LoggedIn/> */}
      {/* <User/> */}
      {/* <Counter/> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User/>
      </UserContextProvider> */}
      {/* <DomRef/> */}
      <MutableRef/>
    </div>
  );
}

export default App;
