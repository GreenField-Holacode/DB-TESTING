import React from 'react';
import QuestionList from './GroceryItem.jsx';

 const Question = (props) => (
     <div className="question">{props.content.map}</div>
   );

 export default Question;

/*
<div className="groceries">
  {props.list.map(item => <GroceryItem item={item} key={item.id}/>)}
</div>
*/
