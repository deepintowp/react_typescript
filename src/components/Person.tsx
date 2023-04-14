type personProps = {
    name:{
        firstName:string,
        lastName:string
    }
}

const Person = (props:personProps) => {
  return (
    <div>{`Hello ${props.name.firstName}  ${props.name.lastName}`}</div>
  )
}

export default Person