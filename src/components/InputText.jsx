export default function InputText({ title, name, handleValue, type = 'float' }) {
    return <><label type="number" required>{title}</label>
        <input type="text" onChange={(hitEvent) =>
            handleValue(
                name,
                type === 'float'
                    ? parseFloat(hitEvent.target.value.replace(',','.'))
                    : parseInt(hitEvent.target.value)
            )
        }></input>
    </>;
}