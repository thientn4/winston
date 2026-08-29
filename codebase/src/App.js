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
  return (
    <div className='screen'>
      <div className='content'>
        <div id="about_me" className='section'>
          <div style={{flex:1}}/>
          <div ref={aboutRef}>
            <img alt="about me" style={{width:'75%',maxWidth:'3.5in',marginTop:'0.5in'}} src={require("./image/intro.png")}/>
            <div style={{marginTop:'0.2in',fontSize:'0.2in',maxWidth:'4.2in'}}>
              <span className='blueHighlight'>Full Stack Software Engineer</span> with {getYOE()} years of experience transforming <span className='yellowHighlight'>business needs</span> into powerful, user-centric <span className='yellowHighlight'>software solutions</span>
            </div>
            <div style={{marginTop:'0.2in',display:'flex',flexDirection:'row',marginBottom:'0.5in',justifyContent:'center'}}>
              <img alt="email" className='button' src={require("./image/buttons/email.png")} onClick={()=>window.location.href="mailto:ntmthien2001@gmail.com"}/>
              <img alt="github" className='button' src={require("./image/buttons/github.png")} onClick={()=>window.open('https://github.com/thientn4', '_blank')}/>
              <img alt="linkedin" className='button' src={require("./image/buttons/linkedin.png")} onClick={()=>window.open('https://www.linkedin.com/in/thiennguyen2001/', '_blank')}/>
              <img alt="resume" className='button' src={require("./image/buttons/resume.png")} onClick={()=>window.open('https://drive.google.com/file/d/16x2_aJ9qNKQhbJ5NNcopY1Mt8IblukNy/view?usp=sharing', '_blank')}/>
            </div>
          </div>
          <div style={{flex:1}}/>
        </div>
        <div style={{backgroundColor:'#faf7f7ff',width:'100%',display:'flex',justifyContent:'center',padding:windowWidth<700?'0.3in':0,paddingLeft:0,paddingRight:0}} id="my_skills">
          <div className='section'>
            <div style={{flex:1}}/>
            <div ref={skillsRef}>
              <div style={{fontSize:'0.2in', fontWeight:'bold'}}>
                <span className='blueHighlight'>Full Stack</span>? What do I <span className='yellowHighlight'>use</span>?
              </div>
              {windowWidth>=700 && <div className='skillBar'>
                <div style={{color:skillType===0?'black':'grey', textDecoration:skillType===0?'underline':'none', userSelect:'none'}} onClick={()=>{setSkillType(0)}}>Data</div>
                <div style={{color:skillType===1?'black':'grey', textDecoration:skillType===1?'underline':'none', userSelect:'none'}} onClick={()=>{setSkillType(1)}}>Backend</div>
                <div style={{color:skillType===2?'black':'grey', textDecoration:skillType===2?'underline':'none', userSelect:'none'}} onClick={()=>{setSkillType(2)}}>Frontend</div>
                <div style={{color:skillType===3?'black':'grey', textDecoration:skillType===3?'underline':'none', userSelect:'none'}} onClick={()=>{setSkillType(3)}}>Tool</div>
                <div style={{color:skillType===4?'black':'grey', textDecoration:skillType===4?'underline':'none', userSelect:'none'}} onClick={()=>{setSkillType(4)}}>Business</div>
              </div>}
              {windowWidth<700 && <select className='skillBar' style={{
                border:'solid 0.01in grey',color:'grey',outline: 'none',fontSize:15,backgroundColor:'white',padding:'0.05in',borderRadius:'0.1in',
                textAlign:'center',textAlignLast:'center'
              }} value={skillType} onChange={(e)=>{setSkillType(parseInt(e.target.value))}}>
                <option value={0}>Data</option>
                <option value={1}>Backend</option>
                <option value={2}>Frontend</option>
                <option value={3}>Tool</option>
                <option value={4}>Business</option>
              </select>}
              <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
                {data.skills.map((skill,index)=><div className='skill' style={{
                  margin:'0.15in',backgroundColor:'transparent',
                  opacity:skill.type.includes(skillType)?1:0.25,
                  pointerEvents:skill.type.includes(skillType)?'none':'initial'
                }}  onClick={()=>{setSkillType(skill.type[0])}}>
                  <img alt="skill" style={{height:'0.5in',margin:'0.1in',filter:skill.type.includes(skillType)?'grayscale(0%)':'grayscale(100%)',borderRadius:'0.1in'}} src={skill.logo}/>
                  <div style={{whiteSpace:'pre-wrap',userSelect:'none'}}>{skill.name}</div>
                </div>)}
              </div>
            </div>
            <div style={{flex:1}}/>
          </div>
        </div>
        <div className='section' style={{maxWidth:'8in'}} id="my_projects">
          <div style={{flex:1}}/>
          <div style={{paddingTop:windowWidth<700?'0.85in':'0.3in'}} ref={projectsRef}>
            <div style={{fontSize:'0.2in', fontWeight:'bold'}}>
              I build for <span className='yellowHighlight'>businesses</span> and for <span className='blueHighlight'>fun</span>!
            </div>
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',marginTop:'0.3in'}}>
              {data.projects.map((project,index)=><div className='project'>
                <img alt="project" style={{height:'0.5in',marginBottom:'0.1in'}} src={project.logo || require("./image/projects/project.png")}/>
                <div className={project.business?'yellowHighlight':'blueHighlight'} style={{marginBottom:'0.1in'}}>{project.name}</div>
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
      <div className="navBar" style={{bottom:0}}>
        {windowWidth>=700 && <img  alt='Winston' className='button' style={{borderRadius:0,pointerEvents:'none'}} src={require("./image/logo.png")} onClick={()=>window.scrollTo({behavior: 'smooth', top: 0})}/>}
        {windowWidth>=700 && <div style={{flex:1}}/>}
        <div className='button'><img alt="about" className='button' style={{margin:0,border:'none',opacity:(skillsVisible || projectsVisible)?0.25:1}} src={require("./image/buttons/about.png")} onClick={()=>window.scrollTo({behavior: 'smooth', top: 0})}/></div>
        <div className='button'><img alt="skills" className='button' style={{margin:0,border:'none',opacity:(skillsVisible)?1:0.25}} src={require("./image/buttons/skills.png")} onClick={()=>document.getElementById('my_skills').scrollIntoView({behavior: 'smooth', block: 'start'})}/></div>
        <div className='button'><img alt="projects" className='button' style={{margin:0,border:'none',opacity:(aboutVisible || skillsVisible)?0.25:1}} src={require("./image/buttons/projects.png")} onClick={()=>document.getElementById('my_projects').scrollIntoView({behavior: 'smooth', block: 'start'})}/></div>
      </div>
      {windowWidth<700 && <div className="navBar" style={{border:'none',top:0}}>
        <img alt="Winston" className='button' style={{borderRadius:0,pointerEvents:'none'}} src={require("./image/logo.png")} onClick={()=>window.scrollTo({behavior: 'smooth', top: 0})}/>
      </div>}
    </div>
  );
}

export default App;
