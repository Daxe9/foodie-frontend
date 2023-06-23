import "./category-box.css";

type CategoryBoxProps = {
	options: string[];
};

export default function CategoryBox(props: CategoryBoxProps) {
	return (
		<div className="categoryBox">
			<p>Category:</p>
			<select id="category">
				{props.options.map((option, index) => {
					return (
						<option value={option} key={index}>
							{option}
						</option>
					);
				})}
			</select>
		</div>
	);
}
