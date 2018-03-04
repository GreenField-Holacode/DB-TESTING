import React from 'react';

const ReadingQItem =(props)=>(
  <div>
  <h3><span>{props.reading.r_questions}</span></h3>

  <br/>
  <form>
  <div className="radio2">
  <label>
  <input type="radio" value="option1" />
  {props.reading.option1}</label>
  </div>
  <div className="radio2">
  <label>
  <input type="radio" value="option1"/>
  {props.reading.option2}</label>
  </div>
  <div className="radio2">
  <label>
  <input type="radio" value="option1"/>
  {props.reading.option3}</label>
  </div>
  <div className="radio2">
  <label>
  <input type="radio" value="option1"/>
  {props.reading.option4}</label>
  </div>
  <div className="radio2">
  <label>
  <input type="radio" value="option1"/>
  {props.reading.option5}</label>
  </div>
  </form>
  </div>
)

export default ReadingQItem;
