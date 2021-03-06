import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Profile from './components/Profile/Profile.jsx'
import Assesments from './components/Assesments/Assesments.jsx';
import ReadingTest from './components/Assesments/Reading/ReadingQList.jsx';
import MindQuestions from './components/Assesments/Mind/MindQuestions.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      assesments:[],
      reading: []
    }
    this.getMindAssesment = this.getMindAssesment.bind(this);
    this.getReadingAssesment = this.getReadingAssesment.bind(this);
  }
  getMindAssesment(){
    $.ajax({
      url:'/assesments',
      method: 'GET',
      success: (results)=>{
        this.setState({
          assesments: results
        })
        console.log(results);
      },
      error: (err)=>{
        console.log('this is err', err)
      }
    });
  }
  getReadingAssesment(){
    $.ajax({
      url:'/rAssesments',
      method: 'GET',
      success: (results)=>{
        this.setState({
          reading: results
        })
        console.log(results);
      },
      error: (err)=>{
        console.log('this is err', err)
      }
    });
  }

  componentDidMount(){
    this.getMindAssesment();
    this.getReadingAssesment();
  }
  render(){
    return(<div>
      <h1>Start your Assesments</h1>
    <div>
    <Assesments assesments={this.state.assesments}/>
    </div>
    <div>
    <Profile />
    </div>
    <div>
    <MindQuestions assesments={this.state.assesments}/>
    </div>
    <div>
    <ReadingTest assesments={this.state.reading}/>
    </div>
    </div>
  )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));;
