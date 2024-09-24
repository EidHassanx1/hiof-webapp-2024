import { useState } from "react";

type AddStudentFormProps = {
    onAddStudent: ({ name }: { name: string }) => void;
};

export default function AddStudentForm(props: AddStudentFormProps) {
    const { onAddStudent } = props;
    const [name, setName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name) return;
        onAddStudent({ name });
        setName("");
    };

    return (
        <form onSubmit={handleSubmit} className="add-student-form">
            <label htmlFor="name">NAVN</label>
            <input
                type="text"
                id="name"
                placeholder="STUDENTENS NAVN"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">LEGG TIL STUDENTEN</button>
        </form>
    );
}