import logo from './logo.svg';
import './App.css';
import Link from './Components/Link';


function App() {
  return (
    <div className="App">
      <Link linkUrl="www.google.com" linkText="Google" myClass="link" linkFace="Google Ki Website"  />
      <Link linkUrl="www.youtube.com" linkText="YouTube"  />
      <Link linkUrl="www.facebook.com" linkText="Facebook"  />
      <Link linkUrl="www.microsoft.com" linkText="Microsoft"  />
      <Link linkUrl="www.google.com" linkText="Google"  />
    </div>
  );
}

export default App;
