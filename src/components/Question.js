import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {
  const [styleOfPara,setStyleOfPara] = useState({display:"none"});
  const [isHiden,setIsHiden] = useState(true);
  function showPara()
  {
    setStyleOfPara({display:"block"});
    setIsHiden(false);
  }
  function hidePara()
  {
    setStyleOfPara({display:"none"});
    setIsHiden(true);
  }
  return (
    <article className="question">
    <header>
        <h4>{title}</h4>
        <button className="btn">
            {
              isHiden?<AiOutlinePlus onClick={showPara}/>:<AiOutlineMinus onClick={hidePara}/>
            }  
        </button>
    </header>
          <p style={styleOfPara}>{info}</p>
    </article>
  );
};

export default Question;
