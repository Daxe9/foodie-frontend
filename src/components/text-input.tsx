import "./text-input.css";
type TextInputProp = {
	text: string;
};
export default function TextInput(props: TextInputProp) {
	return (
		<div className={"text-input"}>
			<label htmlFor={props.text}>{props.text}:</label>
			<input id={props.text} type={"text"}></input>
		</div>
	);
}
