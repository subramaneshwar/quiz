import { useEffect, useState } from 'react';
import './App.css';
import { questions } from './const'
function App() {

  const [Score, setScore] = useState(0)
  const [currentvalue, setCurrentvalue] = useState(0)
  const [selected, setselected] = useState("")
  const [display, setdisplay] = useState(false)  

  function handle(e){
    e.target.value=='true'?setScore(Score+1):setScore(Score)
    setTimeout(() => {
      questions[currentvalue].answerOptions.map((ele,ind)=>{if(ele.isCorrect===true){
        setselected(ind)
        console.log(selected);
      } })
    }, 2000);
    setTimeout(() => {
      
      if(currentvalue<4){
        setCurrentvalue(currentvalue+1)
        setselected("")
      }
      else{
        setdisplay(!display)
      }
    }, 3000);
  }
  
  function change(){
    setdisplay(!display)
  }

  return (
    <div className="App">
      { display ?  <div style={{height:'30%',width:'80%',margin:'50px',color:'blue',textAlign:'center',background:'grey',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'20px',borderRadius:'30px'}}>
        <h1>Geekster Quiz</h1>
        <h1> Total score: {Score}/5 </h1> 
        <button onClick={change} style={{fontSize:'1.5rem ',width:'50%',height:"80px",background:"#9e9e9e",borderRadius:'20px',border:'solid 2px white',color:'white'}} >Restart</button>
        </div> :

      <div className='mainContainer' >
        <header style={{height:'20%',paddingTop:'50px',color:'blue',textAlign:'center'}}>
          <h1>Geekster Quiz</h1>
          <h2>CurrentScore : {Score}</h2>
        </header>
        <div className='questionContainer' style={{background:'#737373',width:'700px',height:'500px',textAlign:'center',display:'flex',flexDirection:'column',gap:'20px',borderRadius:'30px'}}>
          <h2 style={{paddingTop:'20px'}}>Question {currentvalue + 1} out {questions.length}</h2>
          <h3 style={{color:'blue',fontSize:'2rem'}}>{questions[currentvalue].questionText}</h3>
          <div className='answerContainer' style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:'10px'}}>
            {/* <h3>answerOptions :</h3> */}
          {questions[currentvalue].answerOptions.map((ele,index) => {
            
            return <button style={ selected === index ? {fontSize:'1.5rem ',width:'50%',height:"80px",background:"green",borderRadius:'20px',border:'solid 2px white',color:'white'}:{fontSize:'1.5rem ',width:'50%',height:"80px",background:"#9e9e9e",borderRadius:'20px',border:'solid 2px white',color:'white'} }  onClick={handle} key={index} value={ele.isCorrect}>{ele.answerText}</button>
          })}
          </div>}
        </div>


      </div>}
    </div>
  );
}

export default App;
// style={styles?{fontSize:'1.5rem ',width:'50%',height:"80px",background:"green",borderRadius:'20px',border:'solid 2px white',color:'white'}:{fontSize:'1.5rem ',width:'50%',height:"80px",background:"#9e9e9e",borderRadius:'20px',border:'solid 2px white',color:'white'}}