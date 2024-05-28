const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]


type TipPropos = {
    setTip: React.Dispatch<React.SetStateAction<number>>;
    tip:number
}

export default function Propinas({ setTip,tip }: TipPropos) {
    return (
        <div>
            <h3 className="font-black text-xl">Propina :</h3>
            <form>
                {tipOptions.map(tipOptions => (
                    <div className=" flex gap-2 items-center" key={tipOptions.id}>
                        <label htmlFor={tipOptions.id}> {tipOptions.label}</label>
                        <input
                            type="radio"
                            name="tip"
                            value={tipOptions.value}
                            id={tipOptions.id}
                            onChange={e => setTip(+e.target.value)}
                            checked={tipOptions.value===tip}

                        />
                    </div>
                ))}
            </form> 
        </div>
    )
}
