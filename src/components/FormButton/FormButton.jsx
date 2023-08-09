export default function FormButton({ text, onClick }) {
    return (
        <button
            onClick={onClick}
            className="bg-pale-100 rounded-md px-8 py-4 font-montserrat uppercase text-center text-yellow-100 hover:text-orange-200 font-bold border-4 border-yellow-100 hover:border-orange-200 shadow-btn-shadow text-2xl"
        >
            {text}
        </button>
    );
};
