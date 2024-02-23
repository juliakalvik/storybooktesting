import { useState } from "react";
import "./styling.css";



export default function Input({inputName, isSuccess, isError, validationMessage}) {
    const [value, setValue] = useState("hei");

    return(
    <div className="inputfieldparent">
        <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        name={inputName}
        className={`${isSuccess ? "success" : ""} ${
            isError ? "error" : ""
        } ${validationMessage ? "valmess" : "Can't be empty"}`} />
    </div>
    )
};

