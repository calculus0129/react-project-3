export default function InputText({ title, index, handleValue, type = 'float' }) {
    return <><label>{title}</label>
        <input type="text" onChange={(hitEvent) =>
            handleValue(
                index,
                type == 'float'
                    ? parseFloat(hitEvent.target.value.replace(',','.'))
                    : parseInt(hitEvent.target.value)
            )
        }></input>
    </>;
}