import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StorePicker from '../component/StorePicker';
import App from '../App';
import NotFound from '../component/NotFound';

const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route exact path='/' element={<StorePicker />} />
			<Route path='/store/:storeId' element={<App />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	</BrowserRouter>
);

export default Router;
