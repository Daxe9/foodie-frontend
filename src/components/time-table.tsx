import { useRef } from "react";
import "./time-table.css";
import { TimeTable } from "../types/entities.ts";

type TimeTableProps = {
	timeTable: TimeTable;
};

export default function TimeTableHTML(props: TimeTableProps) {
	const opening1 = useRef<HTMLInputElement>(null);
	const opening2 = useRef<HTMLInputElement>(null);
	const closing1 = useRef<HTMLInputElement>(null);
	const closing2 = useRef<HTMLInputElement>(null);
	let day: string = "monday";
	function setTimeTable() {
		// @ts-ignore
		const dayReference = props.timeTable[day];
		dayReference["opening1"] = opening1.current?.value;
		dayReference["opening2"] = opening2.current?.value;
		dayReference["closing1"] = closing1.current?.value;
		dayReference["closing2"] = closing2.current?.value;
	}

	function selectDay(event: any) {
		console.log(document.getElementById(day));
		document.getElementById(day)?.classList.remove("selected");
		day = event.target.id;
		console.log(document.getElementById(day));
		document.getElementById(day)?.classList.add("selected");
	}

	return (
		<div className="time-table">
			<p>Time table:</p>
			<button
				id="monday"
				title="Monday"
				onClick={selectDay}
				className="time-button selected"
			>
				M
			</button>
			<button
				id="tuesday"
				title="Tuesday"
				onClick={selectDay}
				className="time-button"
			>
				T
			</button>
			<button
				id="wednesday"
				title="Wednesday"
				onClick={selectDay}
				className="time-button"
			>
				W
			</button>
			<button
				id="thursday"
				title="Thursday"
				onClick={selectDay}
				className="time-button"
			>
				T
			</button>
			<button
				id="friday"
				title="Friday"
				onClick={selectDay}
				className="time-button"
			>
				F
			</button>
			<button
				id="saturday"
				title="Saturday"
				onClick={selectDay}
				className="time-button"
			>
				S
			</button>
			<button
				id="sunday"
				title="Sunday"
				onClick={selectDay}
				className="time-button"
			>
				S
			</button>
			<div className="time-inputs">
				<input
					id="opening1"
					ref={opening1}
					onChange={setTimeTable}
					type="time"
				/>
				<input
					id="closing1"
					ref={closing1}
					onChange={setTimeTable}
					type="time"
				/>
			</div>
			<div className="time-inputs">
				<input
					id="opening2"
					ref={opening2}
					onChange={setTimeTable}
					type="time"
				/>
				<input
					id="closing2"
					ref={closing2}
					onChange={setTimeTable}
					type="time"
				/>
			</div>
		</div>
	);
}
