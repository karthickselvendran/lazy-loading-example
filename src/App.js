import React, { Suspense, lazy } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
// import { lazyload } from "./lazyload";
import { Fallback } from "./errorBoundary";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";

const Home = lazy(() => import("./components/home"));
const About = lazy(() => import("./components/about"));
// const About = lazyload("./components/about", "About"); // for now not working - exclude this logic
const Store = lazy(() => import("./components/store"));

// create artificial  1s
const Contact = lazy(() =>
  wait(1000).then(() => import("./components/contact"))
);

// named exported component importing example
const Projects = lazy(() =>
  import("./components/projects").then((module) => {
    return { default: module.Projects };
  })
);

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1>Lazy Loading Example</h1>
      <ErrorBoundary
        FallbackComponent={Fallback}
        onReset={(details) => {
          console.log("onReset ", details);
          navigate("/");
        }}
      >
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

function Header() {
  return (
    <>
      <nav>
        <Link to="/">Home page</Link>
        <Link to="/about">About page</Link>
        <Link to="/contact">contact page</Link>
        <Link to="/projects">projects page</Link>
        <Link to="/store">Store page</Link>
      </nav>
    </>
  );
}

export function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export default App;
