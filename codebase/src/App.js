import './App.css';
import {useState,useEffect,useRef} from 'react'
import data from './data.js'

function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

function getYOE() {
  const now = new Date();
  const march2023 = new Date('2022-03-01T00:00:00Z');
  const differenceInMilliseconds = now - march2023;

  // Convert milliseconds to years
  // 1 year = 365.25 days to account for leap years
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
  const years = differenceInMilliseconds / millisecondsInYear;

  return years.toFixed(1);
}

function App() {
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const aboutVisible = useIsVisible(aboutRef)
  const skillsVisible = useIsVisible(skillsRef)
  const projectsVisible = useIsVisible(projectsRef)
  const [skillType,setSkillType]=useState(1)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => { window.removeEventListener('resize', handleResize); };
  }, []);
  const styles={
    screen:{
      minHeight:'100svh',
      display:'flex',
      flexDirection:windowWidth<700?'column-reverse':'row',
      backgroundColor:'white'
    },
    navBar:{
      display:'flex',
      flexDirection:windowWidth<700?'row':'column',
      justifyContent:'space-around',
      borderRight:windowWidth<700?'none':'solid 0.01in grey',
      borderTop:windowWidth>=700?'none':'solid 0.01in grey',
      position:'fixed',
      left:0,
      height:windowWidth>=700?'100svh':'fit-content',
      width:windowWidth<700?'100svw':'fit-content',
      backgroundColor:'white'
    },
    content:{
      display:'flex',
      flexDirection:'column',
      flex:1,
      alignItems:'center',
      overflowX:'auto',
      paddingLeft:windowWidth>=700?'0.55in':0,
      paddingTop:windowWidth<700?'0.55in':0,
      paddingBottom:windowWidth<700?'0.55in':0
    },
    button:{
      width:'0.35in',
      aspectRatio:1,
      margin:'0.1in',
      borderRadius:'100%'
    },
    section:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      textAlign:'center',
      maxWidth:'7in',
      padding:'0.1in',
      minHeight:windowWidth>=700?'100svh':'calc(100svh - 1.1in)'
    },
    yellowHighlight:{
      fontWeight:'bold',
      background:"linear-gradient(to top, #FFEC84 50%, white 50%)",
      whiteSpace:'nowrap',
      width:'fit-content'
    },
    blueHighlight:{
      fontWeight:'bold',
      background:"linear-gradient(to top, #cbe6ef 50%, white 50%)",
      whiteSpace:'nowrap',
      width:'fit-content'
    },
    skillBar:{
      width:'100%',
      marginTop:'0.4in',
      paddingBottom:'0.1in',
      display:'flex',
      flexDirection:'row',
      color:'grey',
      justifyContent:'space-around',
      borderBottom:'solid 0.01in grey'
    }
  }
  return (
    <div style={styles.screen}>
      <div style={styles.content}>
        <div id="about_me" style={styles.section} ref={aboutRef}>
          <div style={{flex:1}}/>
          <img alt="about me" style={{width:'70%',maxWidth:'4in',marginTop:'0.5in'}} src={require("./image/intro.jpg")}/>
          <div style={{marginTop:'0.2in',color:'grey',fontWeight:'bold',fontSize:'0.3in'}}>Hello from Winston!</div>
          <div style={{marginTop:'0.2in',fontSize:'0.2in'}}>
            <span style={styles.blueHighlight}>Full Stack Software Engineer</span> with {getYOE()} years of experience transforming <span style={styles.yellowHighlight}>business needs</span> into powerful, user-centric <span style={styles.yellowHighlight}>software solutions</span>
          </div>
          <div style={{marginTop:'0.2in',display:'flex',flexDirection:'row',marginBottom:'0.5in'}}>
            <img alt="email" style={styles.button} src={require("./image/buttons/email.png")} onClick={()=>window.location.href="mailto:ntmthien2001@gmail.com"}/>
            <img alt="github" style={styles.button} src={require("./image/buttons/github.png")} onClick={()=>window.open('https://github.com/thientn4', '_blank')}/>
            <img alt="linkedin" style={styles.button} src={require("./image/buttons/linkedin.png")} onClick={()=>window.open('https://www.linkedin.com/in/thiennguyen2001/', '_blank')}/>
            <img alt="resume" style={styles.button} src={require("./image/buttons/resume.png")} onClick={()=>window.open('https://drive.google.com/file/d/16x2_aJ9qNKQhbJ5NNcopY1Mt8IblukNy/view?usp=sharing', '_blank')}/>
          </div>
          <div style={{flex:1}}/>
        </div>
        <div style={styles.section}>
          <div style={{flex:1}}/>
          <div ref={skillsRef} id="my_skills" style={{marginTop:'1in',paddingTop:windowWidth<700?'0.55in':0}}>
            <div style={{fontSize:'0.2in', fontWeight:'bold',paddingTop:'0.3in'}}>
              <span style={styles.blueHighlight}>Full Stack</span>? What do I <span style={styles.yellowHighlight}>use</span>?
            </div>
            {windowWidth>=700 && <div style={styles.skillBar}>
              <div style={{color:skillType===0?'black':'grey', textDecoration:skillType===0?'underline':'none', userSelect:'none'}} onClick={()=>{setSkillType(0)}}>Data</div>
              <div style={{color:skillType===1?'black':'grey', textDecoration:skillType===1?'underline':'none', userSelect:'none'}} onClick={()=>{setSkillType(1)}}>Backend</div>
              <div style={{color:skillType===2?'black':'grey', textDecoration:skillType===2?'underline':'none', userSelect:'none'}} onClick={()=>{setSkillType(2)}}>Frontend</div>
              <div style={{color:skillType===3?'black':'grey', textDecoration:skillType===3?'underline':'none', userSelect:'none'}} onClick={()=>{setSkillType(3)}}>Tool</div>
            </div>}
            {windowWidth<700 && <select style={{...styles.skillBar,border:'solid 0.01in grey',color:'grey',textAlign:'center',outline: 'none',fontSize:15,backgroundColor:'white',padding:'0.05in',borderRadius:'0.1in'}} value={skillType} onChange={(e)=>{setSkillType(parseInt(e.target.value))}}>
              <option value={0}>Data</option>
              <option value={1}>Backend</option>
              <option value={2}>Frontend</option>
              <option value={3}>Tool</option>
            </select>}
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
              {data.skills.map((skill,index)=><div style={{margin:'0.15in',flex:1,opacity:skillType===skill.type?1:0.25,backgroundColor:'white'}}  onClick={()=>{setSkillType(skill.type)}}>
                <img alt="skill" style={{height:'0.5in',margin:'0.1in',filter:skillType===skill.type?'grayscale(0%)':'grayscale(100%)'}} src={skill.logo}/>
                <div style={{whiteSpace:'pre-wrap',userSelect:'none'}}>{skill.name}</div>
              </div>)}
            </div>
          </div>
          <div style={{flex:1}}/>
        </div>
        <div style={{...styles.section,maxWidth:'8in'}}>
          <div style={{flex:1}}/>
          <div ref={projectsRef} id="my_projects" style={{marginTop:'1in',paddingTop:windowWidth<700?'0.55in':0}}>
            <div style={{fontSize:'0.2in', fontWeight:'bold',paddingTop:'0.3in'}}>
              I build for <span style={styles.yellowHighlight}>businesses</span> and for <span style={styles.blueHighlight}>fun</span>!
            </div>
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',marginTop:'0.3in'}}>
              {data.projects.map((project,index)=><div style={{margin:'0.1in',padding:'0.15in',maxWidth:'2in', border:'solid 0.01in grey',borderRadius:'0.1in',alignItems:'center',display:'flex',flexDirection:'column'}}>
                <img alt="project" style={{height:'0.5in',marginBottom:'0.1in'}} src={project.logo || require("./image/projects/project.png")}/>
                <div style={{...styles[project.business?'yellowHighlight':'blueHighlight'],marginBottom:'0.1in'}}>{project.name}</div>
                <div>{project.about}</div>
                <div style={{flex:1}}/>
                <u style={{color:'grey',userSelect:'none',marginTop:'0.1in'}} onClick={()=>{
                  if(project.link) 
                    window.open(project.link, '_blank') 
                  else 
                    alert("Coming Soon!")
                }}>more</u>
              </div>)}
            </div>
          </div>
          <div style={{flex:1}}/>
        </div>
      </div>
      <div style={{...styles.navBar,bottom:0}}>
        {windowWidth>=700 && <img  alt='Winston' style={{...styles.button, borderRadius:0}} src={require("./image/logo.png")} onClick={()=>window.scrollTo({behavior: 'smooth', top: 0})}/>}
        {windowWidth>=700 && <div style={{flex:1}}/>}
        <img alt="about" style={{...styles.button,opacity:(skillsVisible || projectsVisible)?0.5:1}} src={require("./image/buttons/about.png")} onClick={()=>window.scrollTo({behavior: 'smooth', top: 0})}/>
        <img alt="skills" style={{...styles.button,opacity:(skillsVisible)?1:0.5}} src={require("./image/buttons/skills.png")} onClick={()=>document.getElementById('my_skills').scrollIntoView({behavior: 'smooth', block: 'start'})}/>
        <img alt="projects" style={{...styles.button,opacity:(aboutVisible || skillsVisible)?0.5:1}} src={require("./image/buttons/projects.png")} onClick={()=>document.getElementById('my_projects').scrollIntoView({behavior: 'smooth', block: 'start'})}/>
      </div>
      {windowWidth<700 && <div style={{...styles.navBar,border:'none',top:0}}>
        <img alt="Winston" style={{...styles.button, borderRadius:0}} src={require("./image/logo.png")} onClick={()=>window.scrollTo({behavior: 'smooth', top: 0})}/>
      </div>}
    </div>
  );
}

export default App;
