import React from 'react';
import MindQitem from './MindQitem.jsx';

const MindQuestions = (props) =>(
  <div className="MindQuestions">
  <h2>Mind Assesments:</h2>
  <h3>Select from 1-5 how much you relate to each statement:
   <br />1 being not at all. <br/>5 totally relatable</h3>
  <h4> There are {50} questions in your test!</h4>
  {props.assesments.map( (assesments)=>
      <MindQitem assesments={assesments}
      key={assesments.mindID}></MindQitem>
    )}
    <button onClick={()=>{alert('Your answers have been submitted')}}>Submit Answers</button>
    </div>
);

export default MindQuestions;

/*  {props.assesments.map((assesments, key)=>
    <MindQitem assesments={assesments}
    key={assesments.mindID}></MindQitem>
  )}
  */
