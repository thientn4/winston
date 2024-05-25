const burger=document.querySelector('.burger')
const drop_bar=document.querySelector('.drop_bar')
const main_link=document.querySelector('.main_link')
const body=document.querySelector('body')
const drop_projects=document.querySelector('#drop_projects')
const drop_about=document.querySelector('#drop_about')
const drop_exp=document.querySelector('#drop_exp')
const drop_skills=document.querySelector('#drop_skills')
const sub_body=document.querySelector('.body')
const projects=[
    {
        "name":"Drivers Tracking System",
        "about":"A system for my employer (JM-Eagle) to track their truck drivers and delivery progress. It consists of a mobile app for drivers and a web app with interactive map view",
        "git_url":"https://docs.google.com/document/d/1l5KPTR-ybhaS_aAdGirfmXZ-kV4M1rJSL-TwLJ62dTA/edit",
        "img_url":"jmFleet.png"
    },
    {
        "name":"UnBlock",
        "about":"UnBlock is a web application for teamwork discussion. Team members can post questions or comment to questions to get team's issues resolved ASAP",
        "git_url":"https://docs.google.com/document/d/1pcJwgOwITQdarScoO7_UDVZ387enB9Rl_2EPkLzMeI0",
        "img_url":"unBlock.png"
    },
    {
        "name":"MeetLink",
        "about":"MeetLink is a web app for teams to pick the best meeting date and time where majority of team members can attend",
        "git_url":"https://github.com/thientn4/MeetLink",
        "img_url":"meetLink.png"
    },
    {
        "name":"Tic Tac Toe AI",
        "about":"A 3x3 Tic Tac Toe game with an unbeatable AI built from recursive AI-decision-tree algorithm. Algorithm is applied to calculate winning and losing possibilities of leftover Tic Tac Toe options for AI to choose in each turn",
        "git_url":"https://github.com/thientn4/Tic-Tac-Toe",
        "demo_url":"https://thientn4.github.io/Tic-Tac-Toe/",
        "img_url":"ticTacToe.png"
    },
    {
        "name":"Sort Visualizer",
        "about":"A static website to visualize how 6 different sort algorithms work (Selection Sort, Bubble Sort, Insertion Sort, Quick Sort, Merge Sort, Heap Sort)",
        "git_url":"https://github.com/thientn4/sort_visualizer",
        "demo_url":"https://thientn4.github.io/sort_visualizer/",
        "img_url":"sortVisualizer.png"
    }
]
const employments=[
    {
        "name":"JM-Eagle",
        "position":"Software Engineer",
        "time":"Mar 2023 - Present",
        "roles":[
            "Plan, design, implement and maintain JmEagle's truck driver tracking software system in a one-man team",
            "Utilize ReactJS & React Native for web & mobile frontend with ExpressJS as backend and mySQL for database",
            "Orchestrate different RestAPIs & AWS services to work together and host the system on Cloud",
        ]
    },
    {
        "name":"Power Settlements",
        "position":"Software Engineer",
        "time":"Oct 2021 - Dec 2022",
        "roles":[
            "Implement, troubleshoot SQL queries & procedures in the server's database",
            "Contribute in implementing frontend data visualization with Vue JS",
            "Implement .NET Window interface & microservices to pull and reformat data into user's custom templates"
        ]
    },
    {
        "name":"Commit The Change",
        "position":"Volunteer Developer",
        "time":"Oct 2021 - Jun 2022",
        "roles":[
            "Participate with 9 other students to build a bathroom map web application for UCI",
            "Work in a team of 4 students to implement a back-end server with ExpressJS, MongoDB"
        ]
    }
]
const skills=[
    {
        "type":"Frontend",
        "technologies":["HTML","CSS","JavaScript","ReactJS","ReactNative","VueJS","Angular","Ionic"]
    },
    {
        "type":"Backend",
        "technologies":["Python","JavaScript","Java","C#","C++","C","NodeJS","ExpressJS","SpringBoot","ASP.NET"]
    },
    {
        "type":"Database",
        "technologies":["PostgreSQL","MySQL","SQLserver","MongoDB","Neo4J","Cassandra"]
    },
    {
        "type":"Tools",
        "technologies":["WindowsIIS","Git","Github","AWS","Expo","Postman","BitBucket","Atlassian","Jira"]
    }
]

let cur_drop=false;

burger.addEventListener('click',function(){
    burger.classList.toggle('burger_active');
    drop_bar.classList.toggle('drop_active');
    cur_drop=!cur_drop;
})
main_link.addEventListener('click',function(){
    if(cur_drop)burger.click()
})
drop_projects.addEventListener('click',function(){
    if(cur_drop)burger.click()
})
drop_about.addEventListener('click',function(){
    if(cur_drop)burger.click()
})
drop_exp.addEventListener('click',function(){
    if(cur_drop)burger.click()
})
drop_skills.addEventListener('click',function(){
    if(cur_drop)burger.click()
})
sub_body.addEventListener('click',function(){
    if(cur_drop)burger.click()
})


const project_names=document.querySelector('#project_names')
for(let i=0; i<projects.length; i++){
    var project=projects[i]

    cur_tr=document.createElement("tr")
    cur_td=document.createElement("td")
    cur_td.className=(i!==0)?"proj_emp_name":"proj_emp_name_top"
    let cur_h2=document.createElement("h2")
    cur_h2.appendChild(document.createTextNode(project.name))
    cur_h2.className="project_link"
    cur_td.appendChild(cur_h2)
    cur_tr.appendChild(cur_td)
    project_names.appendChild(cur_tr)
}

const proj_detail=document.querySelector('#proj_detail')
const proj_img=document.querySelector('#proj_img')
const project_links = document.querySelectorAll(".project_link");
const git_url=document.querySelector('#git_url')
const demo_url=document.querySelector('#demo_url')
project_links.forEach(function(project_link, index) {
    project_link.addEventListener('click', function() {
        proj_detail.innerHTML=projects[index].about
        proj_img.src="projScreenshot/"+projects[index].img_url
        git_url.onclick = function () {
            window.open(projects[index].git_url, '_blank');
        };
        if(!projects[index].demo_url)demo_url.style.display = "none";
        else demo_url.style.display = "initial";
        demo_url.onclick = function () {
            window.open(projects[index].demo_url, '_blank');
        };


        project_links.forEach(function(other_project_link, index) {
            if (other_project_link!==project_link)
                other_project_link.style.color="indigo"
            else
                other_project_link.style.color="rgb(15, 82, 0)"

        });



    });
});
project_links[0].click();








const org_names=document.querySelector('#org_names')
for(let i=0; i<employments.length; i++){
    var employment=employments[i]

    cur_tr=document.createElement("tr")
    cur_td=document.createElement("td")
    cur_td.className=(i!==0)?"proj_emp_name":"proj_emp_name_top"
    let cur_h2=document.createElement("h2")
    cur_h2.appendChild(document.createTextNode(employment.name))
    cur_h2.className="exp_link"
    cur_td.appendChild(cur_h2)
    cur_tr.appendChild(cur_td)
    org_names.appendChild(cur_tr)
}

const emp_name=document.querySelector('#emp_name')
const emp_time=document.querySelector('#emp_time')
const emp_role=document.querySelector('#emp_role')
const exp_links = document.querySelectorAll(".exp_link");

exp_links.forEach(function(exp_link, index) {
    exp_link.addEventListener('click', function() {
        emp_name.innerHTML=employments[index].position
        emp_time.innerHTML=employments[index].time
        emp_role.replaceChildren();
        for(let i=0; i<employments[index].roles.length; i++){
            let cur_li=document.createElement("li")
            cur_li.innerHTML=employments[index].roles[i]
            emp_role.appendChild(cur_li)
        }

        exp_links.forEach(function(other_exp_link, index) {
            if (other_exp_link!==exp_link)
                other_exp_link.style.color="indigo"
            else
                other_exp_link.style.color="rgb(15, 82, 0)"

        });



    });
});
exp_links[0].click();

const skill_types=document.querySelector('#skill_types')
skill_types.replaceChildren();
for(let i=0; i<skills.length; i++){
    var skill=skills[i]

    let cur_td=document.createElement("td")
    cur_td.className="skill_type"
    let cur_h2=document.createElement("h2")
    cur_h2.className="skill_link"
    cur_h2.appendChild(document.createTextNode(skill.type))
    cur_td.appendChild(cur_h2)
    skill_types.appendChild(cur_td)
}

const skill_detail_txt=document.querySelector('#skill_detail_txt');
const skill_links = document.querySelectorAll(".skill_link");
skill_links.forEach(function(skill_link, index) {
    skill_link.addEventListener('click', function() {
        skill_detail_txt.innerHTML=skills[index].technologies.join(' &nbsp; ');
        skill_links.forEach(function(other_skill_link, index) {
            if (other_skill_link!==skill_link)
                other_skill_link.style.color="indigo"
            else
                other_skill_link.style.color="rgb(15, 82, 0)"

        });
    });
});
skill_links[0].click();
