import React, {useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import axios from 'axios';

function App(props) {
  const [image, addImages] = useState([]);

  const onSearchTerm = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term},
      headers: {
        Authorization: 'Client-ID de669458b5837bacb9765a660efcbd8e02609e1e7d1edd6ba88fd37cabe04b77'
      }
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
