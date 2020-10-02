import React from 'react';


function App() {
//Array objact
// unique id array
  const Courses=[
    {id:1,name:'reactjs'},
    {id:2,name:'listandkey'},
    {id:3,name:'classjs'},
    {id:4,name:'function'},
    {id:5,name:'lifcycle'},
    {id:6,name:'mern'},
    {id:7,name:'nodejs'},
    {id:8,name:'expreessjs'},
    {id:9,name:'es6'},
    {id:10,name:'render'},
    {id:11,name:'pros,state'}
    
  ];
  //without  unique id array

  const ReactCons=[
    {name:'reactjs'},
    {name:'listandkey'},
    {name:'classjs'},
    {name:'function'},
    {name:'lifcycle'},
    {name:'mern'},
  ];

  //nested array
  const Developer=[
{
  name:'mark',
  skills:[
    {name:'fb',type:'fontend'},
    {name:'expressjs',type:'Backend'}
  ]
},
{
  name:'manoj',
  skills:[
    {name:'reactjs',type:'fontend'},
    {name:'nodejs',type:'Backend'}
  ]
},
  ];

  // object
  const person={
    name:'mark',
    email:'m2@gmail.com',
    website:'fb.con'
  }
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>React List and keys....!</h1>
      {/* <ul>{
       Courses.map(data=>(
       <li>{data.id}</li>
       ))
       }
       </ul> */}
      {/* unique id in array ----key=data.id */}
      {/* //arrayObject */}
      <h1>Reactjs list and keys...!</h1>
      <ul>
        {Courses.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
      {/* without unique id in array key=index*/}
      <ul>
        {ReactCons.map((data, index) => (
          <li key={index}>{data.name}</li>
        ))}
      </ul>
      <div>
        <h1>ArrayObject map...!</h1>
        {Developer.map((dev, index) => (
          <div key={index}>
            <h2>{dev.name}skills</h2>
            <div>
              {dev.skills.map((skill, index) => (
                <p key={index}>
                  {skill.type}-{skill.name}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* object */}
    <div>
      <h1>Object map.....!</h1>
      {Object.keys(person).map(key=>(
        <p>{person[key]}</p>

      ))}
    </div>
    </div>

   
  );
}

export default App;
