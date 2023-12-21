import {useEffect, useState} from "react";

type Props = {
	getSuggestions: (str: string) => string[];
}

export default function Search(
	{getSuggestions}: Props
) {
	const [term, setTerm] = useState("");
	const suggestions = term === "" ? [] : getSuggestions(term);

	return <section>
		<input 
			role="search-bar" 
			onChange={event => setTerm(event.target.value)}
		/>
		{suggestions.map(s => <p key={s}>{s}</p>)}
	</section>;	
}

