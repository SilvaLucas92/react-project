import '../App.css';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';

function App() {
  return (
    <div id="wrapper">
        <SideBar titulos={['Pages', 'Charts', 'Tables']}/>
        <ContentWrapper />
    </div>
  );
}

export default App;
