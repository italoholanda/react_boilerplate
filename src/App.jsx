import React from "react";

export default function App() {
	let [counter, setCounter] = React.useState(0);
	return (
		<>
			<h1>Yeah! It's Working :P</h1>
			<button onClick={() => setCounter(counter + 1)}>
				Click me: {counter}
			</button>
		</>
	);
}
