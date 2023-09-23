type InputProps = React.ComponentProps<'input'>

const InputComponent = (props: InputProps) => {
  return (
    <div>
      <input {...props}/>
    </div>
  )
}

export default InputComponent
