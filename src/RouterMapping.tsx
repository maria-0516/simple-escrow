import { useParams } from "react-router-dom";
import Home 				from "./Pages/Home";
import { validateAddress } from "./useStore";

const mapping = {
	"/":								Home,
}

export const authMapping = {
	"/reset-password":					Home,
	"/confirmemail":					Home,
}

export default mapping;