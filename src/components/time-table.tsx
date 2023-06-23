import "./time-table.css";
import { useRef, useImperativeHandle, forwardRef, memo } from "react";

const TimeTableHTML = forwardRef((_: any, _ref: any) => {
	const opening1 = useRef<HTMLInputElement>(null);
	const opening2 = useRef<HTMLInputElement>(null);
	const closing1 = useRef<HTMLInputElement>(null);
	const closing2 = useRef<HTMLInputElement>(null);
	let day: string = "monday";
	const timetable: Record<string, any> = {
		monday: {
			opening1: null,
			closing1: null,
			opening2: null,
			closing2: null
		},
		tuesday: {
			opening1: null,
			closing1: null,
			opening2: null,
			closing2: null
		},
		wednesday: {
			opening1: null,
			closing1: null,
			opening2: null,
			closing2: null
		},
		thursday: {
			opening1: null,
			closing1: null,
			opening2: null,
			closing2: null
		},
		friday: {
			opening1: null,
			closing1: null,
			opening2: null,
			closing2: null
		},
		saturday: {
			opening1: null,
			closing1: null,
			opening2: null,
			closing2: null
		},
		sunday: {
			opening1: null,
			closing1: null,
			opening2: null,
			closing2: null
		}
	};

	useImperativeHandle(_ref, () => ({
		getTimetable: () => {
			return timetable;
		}
	}));

	function selectDay(event: any) {
		document.getElementById(day)?.classList.remove("selected");
		day = event.target.id;
		document.getElementById(day)?.classList.add("selected");
	}

	function confirmDay() {
		const temp = {
			opening1:
				opening1.current?.value === "" ? null : opening1.current?.value,
			opening2:
				opening2.current?.value === "" ? null : opening2.current?.value,
			closing1:
				closing1.current?.value === "" ? null : closing1.current?.value,
			closing2:
				closing2.current?.value === "" ? null : closing2.current?.value
		};

		timetable[day] = temp;
	}
	return (
		<div className="time-table">
			<p>Time table:</p>
			<div>
				<button
					onClick={selectDay}
					id="monday"
					title="Monday"
					className="time-button selected"
				>
					M
				</button>
				<button
					onClick={selectDay}
					id="tuesday"
					title="Tuesday"
					className="time-button"
				>
					T
				</button>
				<button
					onClick={selectDay}
					id="wednesday"
					title="Wednesday"
					className="time-button"
				>
					W
				</button>
				<button
					onClick={selectDay}
					id="thursday"
					title="Thursday"
					className="time-button"
				>
					T
				</button>
				<button
					onClick={selectDay}
					id="friday"
					title="Friday"
					className="time-button"
				>
					F
				</button>
				<button
					onClick={selectDay}
					id="saturday"
					title="Saturday"
					className="time-button"
				>
					S
				</button>
				<button
					onClick={selectDay}
					id="sunday"
					title="Sunday"
					className="time-button"
				>
					S
				</button>
			</div>
			<div>
				<div className="time-inputs">
					<input id="opening1" type="time" ref={opening1} />
					<input id="closing1" type="time" ref={closing1} />
				</div>
				<div className="time-inputs">
					<input id="opening2" ref={opening2} type="time" />
					<input id="closing2" ref={closing2} type="time" />
				</div>
				<div className="confirm-container">
					<button className="confirm-button" onClick={confirmDay}>
						Confirm
					</button>
				</div>
			</div>
		</div>
	);
});

export default memo(TimeTableHTML);
