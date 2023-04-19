import { Name } from "../Types/personTypes"
type personListProps = {
    nameList: Name[]
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