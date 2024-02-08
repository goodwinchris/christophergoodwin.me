import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import BlogPosts from './components/BlogPosts';

function App() {
  return (
    <div className="page">
      <AboutMe />
      <BlogPosts />
    </div>
  );
}

export default App;
