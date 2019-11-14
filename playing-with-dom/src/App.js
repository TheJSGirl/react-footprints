import React, {useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import axios from 'axios';
import unsplash from './api/unsplash';

function App(props) {
  const [image, addImages] = useState([]);

  const onSearchTerm = async (term) => {
    const response = await unsplash.get('', {
      params: { query: term}
    })
    addImages(response.data.results);
  }

  return (
    <div className="ui container" style={{marginTop:"10px"}}>
      <SearchBar onSearchTerm={onSearchTerm} />
      Found: {image.length} images
    </div>
  );
}

export default App;
