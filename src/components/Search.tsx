import {ReactElement, useEffect, useState} from "react";

type Props = {
	getSuggestions: (str: string) => string[];
}

export default function Search(
	{getSuggestions}: Props
): ReactElement<Props> {
	const [term, setTerm] = useState<string>('');
	const [suggestions, setSuggestions] = useState<string[]>([]);
	useEffect(
		function(){
			if (term === "") return;
			setSuggestions(getSuggestions(term));
		},
		[term]
	);

	return <section>
		<input 
			role="search-bar" 
			onChange={event => setTerm(event.target.value)}
		/>
		{suggestions.map(s => <p key={s}>{s}</p>)}
	</section>;	
}

