import "@testing-library/jest-dom/vitest";
import Search from "../src/components/Search";
import { render, screen, fireEvent } from "@testing-library/react";
import { expect, beforeEach, describe, test} from 'vitest';

describe('Search', function(){
	test(
		"It will initialise with no values",
		async function(){
			await render(<Search getSuggestions={() => ['camel']} />);
			expect(
				await screen.queryByText(/camel/i)
			).not.toBeInTheDocument();
		}
	);

	test(
		"It will present suggestions with changing input",
		async function(){
			await render(<Search getSuggestions={() => ['camel']} />);
			const searchBar = screen.getByRole("search-bar");
			fireEvent.change(searchBar, {target: {value: "ca"}});
			expect(
				await screen.queryByText(/camel/i)
			).toBeInTheDocument();
		}
	);
});

