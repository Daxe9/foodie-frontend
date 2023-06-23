import "./category-box.css";
import { forwardRef, memo, useImperativeHandle } from "react";

type CategoryBoxProps = {
	options: string[];
};

const CategoryBox = forwardRef((props: CategoryBoxProps, _ref: any) => {
	useImperativeHandle(_ref, () => ({
		getValue: () => {
			// @ts-ignore
			return document.getElementById("category").value;
		}
	}));

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
});

export default memo(CategoryBox);
