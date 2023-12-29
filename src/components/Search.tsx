import {useState} from "react";
import "../styles/Search.css"; 

type Props = {
	getSuggestions: (str: string) => string[];
}

export default function Search(
	{getSuggestions}: Props
) {
	const [term, setTerm] = useState("");
	const suggestions = term === "" ? [] : getSuggestions(term);

	return <search id="Search">
		<input 
			role="search" 
			onChange={event => setTerm(event.target.value)}
		/>
		<section id="suggestions">
		{suggestions.map(
			s => <div className="suggestion" key={s}>{s}</div>
		)}
		</section>
	</search>;	
}

