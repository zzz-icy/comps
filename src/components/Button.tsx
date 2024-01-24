import React from "react"
type ButtonType = "primary" | "secondary" | "success" | "warning" | "danger"
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: any
	variation: ButtonType
	shapeStyle?: "outline" | "rounded"
}

function Button({ children, variation, shapeStyle, ...rest }: ButtonProps) {
	const getColorForType = (buttonType: ButtonType) => {
		switch (buttonType) {
			case "primary":
				return "rgb(59 130 246)"
			case "secondary":
				return "rgb(17 24 39)"
			case "success":
				return "rgb(34 197 94)"
			case "warning":
				return " rgb(250 204 21)"
			case "danger":
				return "rgb(239 68 68)"
			default:
				break
		}
	}

	return (
		<button
			style={{
				margin: "5px",
				backgroundColor:
					shapeStyle === "outline"
						? "rgb(255 255 255)"
						: getColorForType(variation),
				color:
					shapeStyle === "outline"
						? getColorForType(variation)
						: "rgb(255 255 255)",
				borderColor: getColorForType(variation),
				borderWidth: "1px",
				padding: "6px 12px",
				borderRadius: shapeStyle === "rounded" ? "4px" : "0px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
			{...rest}
		>
			{children}
		</button>
	)
}
export default Button

// import type { FunctionComponent } from "react";
// import className from "classnames";

// type ExcludeFromTuple<T extends any[], U> = {
//   [K in keyof T]: T[K] extends U ? never : T[K];
// }[number];

// type Exclusive<T extends PropertyKey[], U = any> = T[number] extends infer E
//   ? E extends string
//     ? Record<E, U> & { [k in ExcludeFromTuple<T, E>]?: never }
//     : never
//   : never & {};

// type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
//   Partial<{
//     outline?: boolean;
//     rounded?: boolean;
//   }> &
//   Exclusive<["primary", "secondary", "success", "warning", "danger"], boolean>;

// const Button: FunctionComponent<ButtonProps> = ({
//   children,
//   primary,
//   secondary,
//   success,
//   warning,
//   danger,
//   outline,
//   rounded,
//   ...rest
// }) => {
//   const classes = className(
//     rest.className,
//     "flex items-center px-3 py-1.5 border",
//     {
//       "border-blue-500 bg-blue-500": primary,
//       "border-gray-900 bg-gray-900": secondary,
//       "border-green-500 bg-green-500": success,
//       "border-yellow-400 bg-yellow-400": warning,
//       "border-red-500 bg-red-500": danger,
//       "rounded-full": rounded,
//       "text-white":
//         !outline && (primary || secondary || success || warning || danger),
//       "bg-white": outline,
//       "text-blue-500": outline && primary,
//       "text-gray-500": outline && secondary,
//       "text-green-500": outline && success,
//       "text-yellow-500": outline && warning,
//       "text-red-500": outline && danger,
//     }
//   );

//   return (
//     <button {...rest} className={classes}>
//       {children}
//     </button>
//   );
// };

// export default Button;
