import React from 'react';

class Profile extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     email: '',
     name: '',
     LastName: '',
     Nickname: '',
     phone: '',
     birthdate: '',
     gender: '',
     nationality: '',
     identification: '',
     education_level: '',
     coding_experience: '',
     personal_reference: '',
     holacode_discovery: '',
     commitment: ''
   };
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleEmail = this.handleEmail.bind(this);
   this.handleName = this.handleName.bind(this);
   this.handleLastName = this.handleLastName.bind(this);
   this.handleNickname = this.handleNickname.bind(this);
   this.handlePhone = this.handlePhone.bind(this);
   this.handleBirthdate = this.handleBirthdate.bind(this);
   this.handleGender = this.handleGender.bind(this);
   this.handleNationality = this.handleNationality.bind(this);
   this.handleIdentification = this.handleIdentification.bind(this);
   this.handleEducationLevel = this.handleEducationLevel.bind(this);
   this.handleCodingExperience = this.handleCodingExperience.bind(this);
   this.handlePersonalReference = this.handlePersonalReference.bind(this);
   this.handleHolacodeDiscovery = this.handleHolacodeDiscovery.bind(this);
   this.handleCommitment = this.handleCommitment.bind(this); //if they don't agree change of state for window with message, invite to leave email for when other locations are open
   this.handleSubmit = this.handleSubmit.bind(this);
   this.addInfo = this.addInfo.bind(this);
   this.onSubmit = this.onSubmit.bind(this);
 }
 handleChange(e) {
   this.setState({value: e.target.value});
 }

 handleSubmit(e) {
   alert('A' + this.state.value);
   e.preventDefault();
 }
 onSubmit(e) {
   e.preventDefault();
   // this.props.onSubmit(this.state);
   this.setState({
     email: '',
     name: '',
     LastName: '',
     Nickname: '',
     phone: '',
     birthdate: '',
     gender: '',
     nationality: '',
     identification: '',
     education_level: '',
     coding_experience: '',
     personal_reference: '',
     holacode_discovery: '',
     commitment: ''
   });
   this.props.onChange({
     email: '',
     name: '',
     LastName: '',
     Nickname: '',
     phone: '',
     birthdate: '',
     gender: '',
     nationality: '',
     identification: '',
     education_level: '',
     coding_experience: '',
     personal_reference: '',
     holacode_discovery: '',
     commitment: ''
   });
 };
 handleEmail(e){
   this.setState({
     email: e.target.value
   })
 }
 handleName(e){
   this.setState({
     name: e.target.value
   })
 }
 handleLastName(e){
   this.setState({
     last_name: e.target.value
   })
 }
 handleNickname(e){
   this.setState({
     nickname: e.target.value
   })
 }
 handlePhone(e){
   this.setState({
     phone: e.target.value
   })
 }
 handleBirthdate(e){
   this.setState({
     birthdate: e.target.value
   })
 }
 handleGender(e){
   this.setState({
     gender: e.target.value
   })
 }
 handleNationality(e){
   this.setState({
     nationality: e.target.value
   })
 }
 handleIdentification(e){
   this.setState({
     identification: e.target.value
   })
 }
 handleEducationLevel(e){
   this.setState({
     education_level: e.target.value
   })
 }
 handleCodingExperience(e){
   this.setState({
     coding_experience: e.target.value
   })
 }
 handlePersonalReference(e){
   this.setState({
     reference: e.target.value
   })
 }
 handleHolacodeDiscovery(e){
   this.setState({
     holacode_discovery: e.target.value
   })
 }
 handleCommitment(e){
   this.setState({
     commitment: e.target.value
   })
 }
 addInfo(){
   this.props.addInfoUser
   this.setState({
     email: '',
     name: '',
     LastName: '',
     Nickname: '',
     phone: '',
     birthdate: '',
     gender: '',
     nationality: '',
     identification: '',
     education_level: '',
     coding_experience: '',
     personal_reference: '',
     holacode_discovery: '',
     commitment: ''
   })
 }

 render() {
   return (<form onSubmit={this.handleSubmit}>
     <label>
       Email:
       <input type="text" email={this.state.email} onChange={this.handleemail}/>
     </label>
     <br/>
     <label>
       Name:
       <input type="text" name={this.state.name} onChange={this.handlename}/>
     </label>
     <br/>
     <label>
       Last Name:
       <input type="text" lastName={this.state.lastname} onChange={this.handlelastname}/>
     </label>
     <br/>
     <label>
       Nickname:
       <input type="text" nickname={this.state.nickname} onChange={this.handlenickname}/>
     </label>
     <br/>
     <label>
       Phone:
       <input type="text" phone={this.state.phone} onChange={this.handlephone}/>
     </label>
     <br/>
     <label>
       Birthday:
       <input type="text" birthdate={this.state.birthday} onChange={this.handlebirthdate}/>
     </label>
     <br/>
     <label>
       Gender:
       <input type="text" gender={this.state.gender} onChange={this.handlegender}/>
     </label>
     <br/>
     <label>
       Nationality:
       <input type="text" nationality={this.state.nationality} onChange={this.handlenationality}/>
     </label>
     <br/>
     <label>
       Identification:
       <input type="text" identification={this.state.identification} onChange={this.handleidentification}/>
     </label>
     <br/>
     <label>
       Education Level:
       <input type="text" educationevel={this.state.educationLevel} onChange={this.handleeducationLevel}/>
     </label>
     <br/>
     <label>
       Coding Experience:
       <input type="text" codingexperience={this.state.codingExperience} onChange={this.handlecodingExperience}/>
     </label>
     <br/>
     <label>
       Personal Reference:
       <input type="text" personalreference={this.state.personalreference} onChange={this.handlepersonalreference}/>
     </label>
     <br/>
     <label>
       Holacode Discovery:
       <input type="text" holacodediscovery={this.state.holacodeDiscovery} onChange={this.handleholacodeDiscovery}/>
     </label>
     <br/>
     <label>
       Commitment:
       <input type="text" commitment={this.state.commitment} onChange={this.handlecommitment}/>
     </label>
     <br/>
     <button onClick={e => this.onSubmit(e)}>Submit</button>
   </form>);
 }
}

export default Profile;
