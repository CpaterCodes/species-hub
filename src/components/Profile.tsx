
type Props = {
	commonName: string;
	taxonomy: string[];
	endangerment: string;
}

export default function Profile(
	{ commonName, taxonomy, endangerment }: Props
){
	return <section>
		<hgroup>
			<h2>{commonName}</h2>
			<h3>{taxonomy.join("::")}; Status: {endangerment}</h3>
		</hgroup>
	</section>
}
