import "./text-input.css";
interface TextInputProp {
	text: string;
	pattern?: RegExp;
	type?: string;
}

export default function TextInput(props: TextInputProp) {
	// const id = props.text.toLowerCase().replace(" ", "_");
	const temp = props.text.toLowerCase().replace("-", "").split(" ");
	for (let i = 1; i < temp.length; ++i) {
		temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].slice(1);
	}
	const id = temp.join("");

	const regexPattern: string = props.pattern ? props.pattern.toString() : "";
	const type: string = props.type ? props.type : "text";

	return (
		<div className={"text-input"}>
			<label htmlFor={id}>{props.text}:</label>
			<input id={id} type={type} pattern={regexPattern}></input>
		</div>
	);
}
