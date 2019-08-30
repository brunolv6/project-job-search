import React from 'react';

import SearchBar from './components/search-bar/search-bar.components';
import  Container from './components/container/container.components';
import JobItem from './components/job-item/job-item.component'

import './App.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        search: '',
        vagas: null
    }
}

  handleChange = event => {
      this.setState({search: event.target.value});
  }

  handleSubmit = event => {
      //previne o browser de reload/refresh!!!
      event.preventDefault();
      fetch('https://api-search-jobs.herokuapp.com/', {
          method: 'post', 
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
              find: this.state.search
          })
      })
          .then(res => res.json())
          .then(value => {
              this.setState({vagas: value})
          });

      this.setState({search: ''});
  }

  render(){
    return (
      <div className="App">
        <SearchBar 
          vagas={this.state.vagas} 
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {
          this.state.vagas?
          <div className='job-container'>
          <div className='visto'><div className='green-box'></div>Você já visitou!</div>
              {
                  
                  this.state.vagas.map(emp => (
                      <JobItem key={emp.id} id={emp.id} vagas={emp.vaga} url={emp.url}/>
                  ))
              }
          </div>
          : <Container/>
        }
      </div>
    );
  }
}

export default App;
