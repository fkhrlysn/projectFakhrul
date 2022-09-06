import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import routes from './component/route';
import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(

 

  <BrowserRouter>

        {routes}

  </BrowserRouter>,

  document.getElementById('root'),

 

);