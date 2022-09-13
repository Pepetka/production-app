import { useState } from "react"
import classes from "./counter.module.scss"

export const Counter = () => {
	const [counter, setCounter] = useState(1)

	const onIncr = () => {
		setCounter((counter) => counter + 1)
	}

	const onDecr = () => {
		setCounter((counter) => counter - 1)
	}

	return (
		<div className={classes.counter}>
			<button onClick={onIncr}>+</button>
			<div>{counter}</div>
			<button onClick={onDecr}>-</button>
		</div>
	)
}
