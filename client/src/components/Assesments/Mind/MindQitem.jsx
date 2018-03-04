import React from 'react';

const MindQitem =(props)=>(
  <div>
  <h2><span>{props.assesments.m_questions}</span></h2>
  <form>
  <div class="form-group">
   <div class="col-md-6">
   <label for="radios">Strongly <br />disagree</label>
   <br/>
  <float for="radios-0">1<br/>
   <input type="radio" id="radios-0" name="radios" value="1" />
  </float>
  <float for="radios-0">2<br />
   <input type="radio" id="radios-0" name="radios" value="1" />
  </float>
  <float for="radios-0">3<br />
   <input type="radio" id="radios-0" name="radios" value="1" />
  </float>
  <float for="radios-0">4<br />
   <input type="radio" id="radios-0" name="radios" value="1" />
  </float>
  <float for="radios-0">5<br />
   <input type="radio" id="radios-0" name="radios" value="1" />
  </float>
   <label for="radios">Strongly <br/>agree</label>

   </div>
  </div>
        </form>
  </div>
)

export default MindQitem;
