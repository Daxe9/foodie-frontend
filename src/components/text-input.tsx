import "./text-input.css";
interface TextInputProp {
	text: string;
	pattern?: RegExp;
}

export default function TextInput(props: TextInputProp) {
	const id = props.text.toLowerCase().replace(" ", "_");
	const regexPattern: string = props.pattern ? props.pattern.toString() : "";

	return (
		<div className={"text-input"}>
			<label htmlFor={id}>{props.text}:</label>
			<input id={id} type={"text"} pattern={regexPattern}></input>
		</div>
	);
}
