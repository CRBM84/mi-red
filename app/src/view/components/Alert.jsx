export default function Alert({ message, level = 'error', onAccepted }) {
    const borderColor = level === 'error'
        ? 'border-[red]' : level === 'warn'
            ? 'border-[yellow]'
            : 'border-[green]'

    const handleAcceptClick = () => onAccepted()

    return <div className={`min-w-[20rem] max-w-160 min-h-40 bg-white ${borderColor} border-[1rem] flex flex-col items-center justify-center p-2 gap-2`}>
        <p>{message}</p>

        <button onClick={handleAcceptClick}
            className='border-2 border-black pt-1'

        >Confirmar</button>
    </div>

}