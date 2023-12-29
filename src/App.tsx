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
		<Search getSuggestions={str => str.split('')}/>
		. . .
    </>;

export default App;

