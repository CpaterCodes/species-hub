import {ReactElement, useEffect, useState} from "react";

type Props = {
	suggestor: (term: string) => string[];
}

export default function Search(
	{suggestor}: Props
): ReactElement<Props> {
	const [term, setTerm] = useState<string>('');
	const [suggestions, setSuggestions] = useState<string[]>([]);
	useEffect(
		() => setSuggestions(suggestor(term)),
		[term]
	);

	return <section>
		<input 
			role="search-bar" 
			onChange={event => setTerm(event.target.value)}
		/>
		{suggestions.map(s => <p>{s}</p>)}
	</section>;	
}

