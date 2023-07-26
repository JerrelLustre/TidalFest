import { Link } from "react-router-dom";

export default function Button({text}) {
    return (
        <Link to="/tickets"
            className="bg-pale-100 rounded-md px-8 py-4 font-montserrat text-2xl text-yellow-100 hover:text-orange-200 font-bold border-4 border-yellow-100 hover:border-orange-200 shadow-btn-shadow"
        >
            {text}
        </Link>
    );
};
