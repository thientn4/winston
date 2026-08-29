const data={
    skills:[
        {
            "name":"Microsoft\nSQL",
            "type":new Set([0]),
            "logo":require("./image/skills/microsoftSQL.png")
        },
        {
            "name":"MySQL",
            "type":new Set([0]),
            "logo":require("./image/skills/mySQL.jpg")
        },
        {
            "name":"PostgreSQL",
            "type":new Set([0]),
            "logo":require("./image/skills/postgreSQL.png")
        },
        {
            "name":"SQLite",
            "type":new Set([0]),
            "logo":require("./image/skills/sqlite.webp")
        },
        {
            "name":"IBM-DB2",
            "type":new Set([0]),
            "logo":require("./image/skills/ibmDB2.webp")
        },
        {
            "name":"Python",
            "type":new Set([0,1]),
            "logo":require("./image/skills/python.png")
        },
        {
            "name":"ASP.NET\n(C#)",
            "type":new Set([1]),
            "logo":require("./image/skills/asp.png")
        },
        {
            "name":"NodeJS\n(Javascript)",
            "type":new Set([1]),
            "logo":require("./image/skills/node.webp")
        },
        {
            "name":"Electron\n(Desktop)",
            "type":new Set([2]),
            "logo":require("./image/skills/electron.png")
        },
        {
            "name":"React\n(JS-Native)",
            "type":new Set([2]),
            "logo":require("./image/skills/react.png")
        },
        {
            "name":"Expo",
            "type":new Set([2]),
            "logo":require("./image/skills/expo.png")
        },
        {
            "name":"Github",
            "type":new Set([3]),
            "logo":require("./image/skills/github.png")
        },
        {
            "name":"Postman",
            "type":new Set([3]),
            "logo":require("./image/skills/postman.png")
        },
        {
            "name":"AWS",
            "type":new Set([3,4]),
            "logo":require("./image/skills/aws.png")
        },
        {
            "name":"SPS-EDI",
            "type":new Set([4]),
            "logo":require("./image/skills/sps.png")
        },
        {
            "name":"NetSuite",
            "type":new Set([4]),
            "logo":require("./image/skills/netsuite.png")
        }
    ],
    projects:[
        // {
        //     "name":"Ascending Eagle",
        //     "business":true,
        //     "logo":require("./image/projects/ascendingEagle.png"),
        //     "about":"This is a project. This is a project. This is a project. This is a project. This is a project. This is a project. ",
        //     "link":null
        // },
        {
            "name":"FreightTrack",
            "business":true,
            "logo":require("./image/projects/jmEagle.png"),
            "about":"Full-stack web and mobile platform for JMEagle that streamlines delivery management and provides real-time driver tracking.",
            "link":"https://drive.google.com/file/d/1HQfJqpzWZB6VUACsFg1cmjx2L0x52fTs/view?usp=sharing"
        },
        {
            "name":"DocDock",
            "business":false,
            "logo":require("./image/projects/docDock.png"),
            "about":"Window Desktop app to AI-transform messy unstructured documents into CSV, JSON format with Gemini and OpenAI",
            "link":"https://apps.microsoft.com/detail/9ntkqqxxv6mm?hl=en-US&gl=TT"
        },
        {
            "name":"Breadwinner",
            "business":false,
            "logo":require("./image/projects/breadwinner.png"),
            "about":"Mobile app to turn private recipes into seamless meal and grocery plans, simplify mealprep and grocery for busy family",
            "link":"https://apps.apple.com/gb/app/breadwinner-meal-prep/id6749663952?uo=2"
        },
        {
            "name":"iMock",
            "business":false,
            "logo":require("./image/projects/iMock.png"),
            "about":"Web app to give job seekers a competitive edge with AI mock interviews, delivering instant feedback from Google Gemini AI",
            "link":"https://github.com/thientn4/iMock"
        },
        {
            "name":"unBlock",
            "business":false,
            "logo":require("./image/projects/unBlock.png"),
            "about":"Web app for teachers to create engaging virtual classrooms where students can ask, discuss and answer questions",
            "link":"https://github.com/thientn4/unBlock"
        },
        {
            "name":"MeetLink",
            "business":false,
            "logo":require("./image/projects/meetLink.png"),
            "about":"Web app to streamline team scheduling, helping groups find optimal time for meetings and maximize attendance",
            "link":"https://github.com/thientn4/MeetLink"
        },
        {
            "name":"SortVisual",
            "business":false,
            "logo":null,
            "about":"A website to visualise common types of sort algorithm (selection, bubble, insertion, quick, merge, heap)",
            "link":"https://thientn4.github.io/sort_visualizer/"
        },
        {
            "name":"TicTacToeAI",
            "business":false,
            "logo":null,
            "about":"Unbeatable Tic Tac Toe AI that leverages decision-tree algorithm to calculate win/lose probabilities, guaranteeing victory",
            "link":"https://thientn4.github.io/Tic-Tac-Toe/"
        }
    ]
}
export default data