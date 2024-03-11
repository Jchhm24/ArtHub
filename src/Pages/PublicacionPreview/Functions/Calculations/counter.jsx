export const counter = (state, count, setCount) => {
  state ? setCount(count + 1) : count === 1 ? setCount(1) : setCount(count - 1)
}
