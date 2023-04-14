type personListProps = {
    nameList: {
        firstName:string,
      lastName:string
    }[]
}

const PersonList = (props:personListProps) => {
  return (
    <div>
        <ul>
            {
                props.nameList.map(person=>{
                   return(
                    <li key={person.firstName}>{person.firstName} {person.lastName}</li>
                   ) 
                })
            }
        </ul>
    </div>
  )
}

export default PersonList