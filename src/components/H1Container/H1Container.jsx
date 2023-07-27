export default function H1Container({ text }) {
    return (
        <div className="flex flex-col items-center bg-orange-200 font-montserrat text-jade-100 font-extrabold text-base leading-150">
            <h1 className="text-center uppercase">{text}</h1>
        </div>
    )
}