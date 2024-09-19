<<<<<<< HEAD
import { useState } from "react";
import Card from "./components/Card";
// import Title from "./components/Title";

function App() {

  const [username, setUsername] = useState("Hassan")

  // const changeUserName = () => {
  //   setUsername("LOGGET UT");
  // }

  const produkter = [
    {
      id: 1,
      title: 'CardTitle', 
      description: 'Card Description'
    },
    {
      id: 2,
      title: 'cardTitle', 
      description: 'Card Description Two'
    }
  ]

  return (
    <>
    <section>
      {/* <p>{userName}</p>
      <button onClick={changeUserName}>LOGG UT</button> */}
      {
        produkter?.map(produkt => <Card key={produkt.id} title={produkt.title} description={produkt.description}
           setUsername={setUsername} username={username}/>)
      }
      {/* <Title title={"Produkter"} />
      <Title title={"Medlemstilbud"} /> */}
      {/* <Card title={"Tittel"} description={"FORKLARINGEN"}/>
      <Card title={"Tittel Dos"} description={"Andre forklsringen som skjer da"} /> */}
    </section>
    </>
  );
}

export default App
=======
import Card from "./components/Card";
import Title from "./components/Title";

function App() {
  return (
    <section>
      <Title title="Produkter" />
      <Title title="Medlemstilbud" />
      <Card title="CardTitle" description="CardDescription" />
      <Card title="CardTitle Two" description="CardDescription Two" />
    </section>
  );
}

export default App;
>>>>>>> d76f377290cd23b6d12c1da4609012ad39f0c40e
