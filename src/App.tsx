import Profile from './components/Profile';
import Search from './components/Search';
import './styles/App.css';

const App = () => 
    <>
		<hgroup>
    		<h1>Species Hub</h1>
       		<p>
         		Welcome to the Jungle!	
        	</p>
		</hgroup>
		<aside>
			<Search 
				getSuggestions={(str) => str.split('')}
			/>
			<Profile 
				commonName="Animal" 
				taxonomy={["Organism", "Creature"]}
				endangerment="Least Concern"
			/>
		</aside>
    </>;

export default App;

