import Title from "./Title";

type CardProps = {
    title: string;
    description: string;
    username: string;
    setUsername: any;
  };
  
  export default function Card(props: CardProps){
    const { title = "Title", description = "Description", username, setUsername} = props;

    const changeUsername = () => {
        setUsername("Endret tittel")
    }

    return (
      <article>
        <Title title={title} username={username}/>
        <p>{description}</p>
        <button onClick={changeUsername}>LOGG UT</button>
      </article>
    );
  }