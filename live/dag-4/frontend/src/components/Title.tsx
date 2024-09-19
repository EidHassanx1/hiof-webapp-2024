<<<<<<< HEAD
// import { useState } from "react";

type TitleProps = {
    title?: String;
    username?: string;
};

export default function Title(props: TitleProps) {
//import Title from ------
//export  function Title(){
//import {Title} from ------

//     const [userName, setUsername] = useState("EN NY TITTEL")

//     const changeUserName = () => {
//     setUsername("ENDRET TITTEL")
//   }
    const { title = "Default title", username } = props;
    return (
        <>
            <h2>{title}</h2>
            <p>{username}</p>
        </>
    );
}
=======
type TitleProps = {
  title?: string;
};

export default function Title(props: TitleProps) {
  const { title = "Default title" } = props;
  return <h2>{title}</h2>;
}
>>>>>>> d76f377290cd23b6d12c1da4609012ad39f0c40e
