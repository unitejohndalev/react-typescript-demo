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
import { Counter } from "./components/class/Counter";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/context/User";
import DomRef from "./components/ref/DomRef";
import MutableRef from "./components/ref/MutableRef";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import List from "./components/generics/List";
import { RandomNumber } from "./components/restrictions/RandomNumber";
import Toast from "./components/templateLiterals/Toast";
import ButtonComponent from "./components/html/Button";
import { CustomComponent } from "./components/html/CustomComponent";
import { TextPropsComponent } from "./components/polymorphic/Text";

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
      {/* <MutableRef/> */}
      {/* <Counter message='The count value is' count={10}/> */}
      {/* <Private isLoggedIn={false} component={Profile}/>
       */}
      {/* <List
        items={["Goku", "Luffy", "Naruto"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      {/* <List
        items={[
          {
            id: 1,
            first: "Potek",
            last: "Lagot",
          },
          {
            id: 2,
            first: "Potek",
            last: "Lagot",
          },
          {
            id: 3,
            first: "Potek",
            last: "Lagot",
          }
        ]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <RandomNumber value={10} isPositive /> */}
      {/* <Toast position="center"/> */}
      {/* <ButtonComponent variant="primary" onClick={() => console.log("clicked")}>
       This is a button
      </ButtonComponent> */}
      {/* <CustomComponent name="dale" isLoggedIn={true}/> */}
      <TextPropsComponent as='h1' size="lg">Heading</TextPropsComponent>
      <TextPropsComponent as='p' size="md" >Paragraph</TextPropsComponent>
      <TextPropsComponent as='label' htmlFor="someId" size="sm" color="primary">Label</TextPropsComponent>
    </div>
  );
}

export default App;
