import "@testing-library/jest-dom/vitest";
import Profile from "../src/components/Profile";
import { render, screen, fireEvent } from "@testing-library/react";
import { expect, describe, test, beforeAll} from 'vitest';

describe("Profile", function(){
	beforeAll(
		async function(){ 
			const animalInfo = {
				taxonomy: [
					"Kingdom", "Phylum", "Order", 
					"Family", "Genus", "Species"
				],
				commonName: "Animal",
				endangerment: "least concern"
			};
			return await render(
			<Profile animalInfo={animalInfo}/>);
		}
	);

	test("It will list taxonomy", async function(){
		for (const taxon of [
			"Kingdom", "Phylum", "Order", "Family", "Genus", "Species"
		]){
			const taxonDisplay = await screen.queryByText(taxon);
			expect(taxonDisplay).toBeInTheDocument();
		}
	});

	test("It will present endangerment status", async function(){
		const endangerment = await screen.queryByText("least concern");
		expect(endangerment).toBeInTheDocument();
	});

	test("It will show the common name", async function(){
		const commonName = await screen.queryByText("Animal");
		expect(commonName).toBeInTheDocument();
	});
});

