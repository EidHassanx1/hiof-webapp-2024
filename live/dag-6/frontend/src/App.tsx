import Grid from "./components/Grid";
// import Student from "./components/Student";

const students = [
  {id: "1", name: "Jensen"},
  {id:"2", name: "Hassan"}
];

function App() {
  return (
  <>
    <main>
      {/* <Student name="Hassan" id="123" /> */}
      <Grid students={students}/>
      <h1>HAR IKKE BEGYNT ++2</h1>
    </main>
  </>
  );
}

export default App;