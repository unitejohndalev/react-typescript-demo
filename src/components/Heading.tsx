type PlaceholderProps = {
    children: string
}

const Heading = (props:PlaceholderProps) => {
  return (
    <div>{props.children}</div>
  )
}

export default Heading