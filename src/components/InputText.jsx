export default function InputText({title}) {
    return <><label>{title}</label>
    <input type="text" onChange={(hitEvent)=>console.log(parseInt(hitEvent.target.value))}></input>
    </>;
}