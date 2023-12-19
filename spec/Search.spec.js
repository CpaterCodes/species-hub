import Search from "../src/components/Search";
import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test} from 'vitest';


test("It will present a set of suggestions when new input is typed in", 
		function(){
			render(<Search suggestor={() => ['camel']} />);
			expect(screen.queryByText(/camel/i)).not.toBeInTheDocument();
			const searchBar = screen.getByRole("search-bar");
			fireEvent.change(searchBar, {target: {value: "ca"}});
			expect(screen.queryByText(/camel/i)).toBeInTheDocument();
		}
	);

