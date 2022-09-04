import Head from 'next/head'

export default function Home() {
  return (
    .mainHeader {
  width:100%;
  border: 1px outset black; 
  text-align: left;
}

.sectionDiv {
  display: -webkit-flex;
  display: flex;
  width:100%;
  border: 1px outset black; 
}

rowColumn1 {
  width:100%;
  -ms-flex: 4;
  flex: 4;
  text-align: left;


}

rowColumn2 {
  width:100%;
  -ms-flex: 6;
  flex: 6;
  text-align: left;
  border: 1px outset black;

}
</style>
</head>
<body>

<div class="mainHeader">
  <h1>Angelaine T. Delos Santos</h1>
  <b>Computer Engineer</b>
  <p> As a Computer Engineer my ultimate goal is to learn and and widen my knowledge.
    <br> My greatest strength is that I am adaptive and flexible. </p>
</div>



<div class="sectionDiv">

<!Table personal info>
  <rowColumn1>
    <h3>Personal Information</h3>
    <b>Address</b>
      <p>Villa Sto. Domingo Mexico, Pampanga</p>
      <b>Phone</b>
      <p>09164572394</p>
      <b>Email</b>
      <p>angelainedelossantos@gmail.com</p>
  </rowColumn1>
  
<!Table Experience>  
   <rowColumn2>
    <h3>Experience</h3>
     <p><b>2022 - </b> IT Technical Support/Assistant
       <br> <center> Department of Environment and Natural Resources
       <br>Region III, DMGC
       <br>•  Setting up of Desktop Computers and/or Laptops 
       <br>•  Reformatting
       <br>•  Setting up Network by crimping UTP cable 
       <br>•  Fixing time issues on devices by changing CMOS battery
       <br>•  System Inventory
       </p> </center>
  </rowColumn2>
</div>

<div class="sectionDiv">
<!Table Skills>
  <rowColumn1>
    <h3>Skills</h3>
      <p>• Effective communication <br>
       • Responsibility <br><br>• Creativity <br><br> • Problem-solving
        <br><br> • Adaptability <br><br> • Critical Thinking <br><br> 
        •Public Speaking <br><br> •Teamwork Skills </p>
  </rowColumn1>

<!Table Educ>
   <rowColumn2>
    <h3>Education</h3>
       <p> 2019-present - Bachelor of Science in 
         Computer Engineering
         <br> <center> University of the Assumption </center></p>

       <p> 2017-2019 - Senior High School
         <br> <center> University of the Assumption </center></p>

       <p> 2013-2017- Junior High School
         <br> <center> Saint Mary’s Angels College of Pampanga </center></p>

       <p> 2006-2013- Elementary
         <br> <center> San Fernando Elementary School </center></p>   
  </rowColumn2>
</div>

<div class="sectionDiv">
<!Table software>
  <rowColumn1>
    <h3>Software</h3>
      <p>• Microsoft &nbsp⚫⚫⚫⚫⚪  Very Good<br><br>
        • C++ &nbsp⚫⚫⚫⚪⚪ Good<br><br>• Python &nbsp⚫⚫⚫⚪⚪ Good
        <br><br> • JavaScript &nbsp⚫⚫⚪⚪⚪ Average
        <br><br> • HTML &nbsp⚫⚫⚪⚪⚪ Average </p>
  </rowColumn1>

<!Table certifications>
   <rowColumn2>
    <h3>Certifications</h3>
       <p> <b>2022</b> <br><br>
         CISCO Certification <br><br> <b>December 2022</b> <br><br>
         Microsoft Certification <br><br> <b>2023</b> <br>
         Javascript Certification<br> 
       </p>
  </rowColumn2>
</div>

<div class="sectionDiv">
<!Table language>
  <rowColumn1>
    <h3>Language</h3>
      <p>English &nbsp⚫⚫⚫⚫⚪ B2 Intermediate<br><br>
            Filipino &nbsp⚫⚫⚫⚪⚪ Intermediate </p>
  </rowColumn1>

<!Table Interests>
   <rowColumn2>
    <h3>Interests</h3>
      <p>• Volunteer Work/Community Involvement <br>• Reading <br>• Gaming</p>
  </rowColumn2>
</div>

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
