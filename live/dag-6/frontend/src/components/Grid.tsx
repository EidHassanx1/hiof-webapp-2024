import { useState } from "react";
import Student from "./Student";
import type { Student as StudentProp } from "./types";
import AddStudentForm from "./AddStudentForm";

// const students = [
//     {id: "1", name: "Jensen"},
//     {id:"2", name: "Hassan"}
// ];
type GridProps = {
    students: StudentProp[];
};

export default function Grid(props: GridProps) {
    // props.students ?? []
    const [students, setStudents] = useState(props.students ?? []);

    const onAddStudent = (student: {name: string}) => {
        setStudents((prev) => [...prev, { id: crypto.randomUUID(), ...student}]);
    };

    return (
        <>
        <section>
        <article className="grid">
            {students.map((student) => (
                <Student key={student.id} name={student.name} id={student.id} />
            ))}
        </article>
        <AddStudentForm onAddStudent={onAddStudent}/>
        </section>
        </>
    );
}