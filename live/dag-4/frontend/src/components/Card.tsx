<<<<<<< HEAD
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
=======
type CardProps = {
  title: string;
  description: string;
};

export default function Card(props: CardProps) {
  const { title = "Title", description = "Description" } = props;
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}
>>>>>>> d76f377290cd23b6d12c1da4609012ad39f0c40e
