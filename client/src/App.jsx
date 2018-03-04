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
      reading: [],
      data: [],
    }
    this.getProfile = this.getProfile.bind(this);
    this.addUser = this.addUser.bind(this);
    this.getMindAssesment = this.getMindAssesment.bind(this);
    this.getReadingAssesment = this.getReadingAssesment.bind(this);
  }


  addUser(email, name, last_name,nickname, phone, birthdate, gender, nationality, identification, education_level, coding_experience, personal_reference, holacode_discovery, commitment){
    $.ajax({
      url:"/Profile",
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        email: email,
        name: name,
        last_name: last_name,
        nickname: nickname,
        phone: phone,
        birthdate: birthdate,
        gender: gender,
        nationality: nationality,
        identification: identification,
        education_level: education_level,
        coding_experience: coding_experience,
        personal_reference: personal_reference,
        holacode_discovery: holacode_discovery,
        commitment: commitment
      })
    }).done(() =>{
        this.getProfile();
    });
}

  getProfile(){
    $.ajax({
      url:"/Profile",
      method:'GET',
      success: (results) =>{
        this.setState({data: results});
      },
      error: (xhr, err) => {
        console.log('err', err)
      }
    })
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
      url:'/reading',
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
    this.getProfile();
    this.getMindAssesment();
    this.getReadingAssesment();
  }
  render(){
    return(<div>
      <h1>Start your Assesments</h1>
      <div className="testButton">

       <button onClick={()=>{alert('Finish the Mind Assesment completly to save your answers.')}}> Mind Assesment </button>

       <button onClick={()=>{alert('Finish the Analytical Assesment completly to save your answers.')}}> Analytical Assesment </button>
       <button onClick={()=>{alert('Finish the Reading Comprehension test completly to save your answers.')}}> Reading Comprehension </button>
     </div>
      <div>
      <Profile data={this.state.data}/>
      </div>
    </div>
  )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));;
