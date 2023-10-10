import CardOne from "./components/cards";

function App() {
  let myObject = {
    username: "Abhishek Pandit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
  };
  return (
    <>
      <CardOne
        // channelCode="Chai Aur Code"
        myObjects={myObject}
        // array={[1, 2, 3, 4, 5, 6, 7]}
      ></CardOne>
      <CardOne></CardOne>
    </>
  );
}

export default App;
