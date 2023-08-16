import PropTypes from 'prop-types'
import { useId } from 'react'

export const CheckboxAll = (isChecked) => {
  const checkboxId = useId()
  return (
    <>
      <label htmlFor={checkboxId}>
        <input type="checkbox" id={checkboxId} className={isChecked === 'deSelect' ? 'checked' : 'unChecked'} />
        체크박스
      </label>
    </>
  )
}

CheckboxAll.propTypes = {
  isChecked: PropTypes.bool,
}

export function ButtonClick({ isChecked }) {
  console.log(isChecked)
  return (
    <>
      <span>버튼</span>
      <button type="button" className={isChecked === 'deSelect' ? 'checked' : 'unChecked'} />
    </>
  )
}
ButtonClick.propTypes = {
  isChecked: PropTypes.string,
}

export function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export function Checkbox({ isChecked, onChange }) {
  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      체크박스
    </label>
  )
}

Checkbox.propTypes = {
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
}

// export default ButtonClick
export function SubmitButton({ onClick }) {
  return (
    <button type="submit" onClick={onClick}>
      제출
    </button>
  )
}

SubmitButton.propTypes = {
  onClick: PropTypes.func,
}
