type greetProps = {
    name:string,
    messageCount?:number,
    isLoggedIn:boolean
}

const Greet = (props:greetProps) => {
  const {messageCount = 0 } = props
  return (
    <div>{
      props.isLoggedIn ?
      `Hi ${props.name}, You have ${messageCount} messages` :
      "Welcome Guest"
      
      }</div>
  )
}

export default Greet