import './App.css';

import { BinarySearchTree, useTree } from 'react-tree-vis';
import { useRef, useEffect } from 'react';

export default function App() {
  const { ref, insert, remove } = useTree();
  const containerRef = useRef(null);

  const removeNumber = (node) => {
    if (typeof remove == 'function') remove(node);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const value = Number(e.originalTarget.textContent);
    if (!Number.isNaN(value)) removeNumber(value);
  };

  const getRandomNumber = () => {
    const min = -100;
    const max = 100;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleKeyPress = (e) => {
    e.stopPropagation();
    if (e.keyCode === 32) {
      if (typeof insert == 'function') insert(getRandomNumber());
    }
  };

  useEffect(() => {
    let container = null;
    if (containerRef.current) {
      container = containerRef.current;
      container.addEventListener('click', handleClick);
    }
    window.addEventListener('keypress', handleKeyPress);
    return () => {
      container.removeEventListener('click', handleClick);
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  return (
    <div className="App">
      <div>
        <h3> Press the space bar to insert a number between -100 to 100</h3>
      </div>
      <div id="container" ref={containerRef}>
        <BinarySearchTree data={[]} ref={ref} />
      </div>
    </div>
  );
}
