// import React, { Component } from 'react';
// import axios from 'axios';

// const API = () => 'http://localhost:8080/skills';
// // const DEFAULT_QUERY = redux;
// class Skills extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       skills: [],
//       isLoading: false,
//       error: null
//     }
//   }
//   componentDidMount() {
//     this.setState({isLoading: false});
//     axios.get(API())
//     .then(result => this.setState({
//       skills: result,
//       isLoading: true
//     }))
//     .catch(error => this.setState({
//       error,
//       isLoading: false
//     }))
//   }
//   render () {
//     return (
//         <div>
//               {
//                 this.state.isLoading && this.state.skills.data.map((skill) => {
//                     return (
//                       <div id='{skill.qeSerialNumber}'>
//                       {skill.qeGrade}: {skill.qeSubject}: {skill.qeObjective}: {skill.qeSkill}
//                       </div>
//                     )
//                  })
//               }
//             </div>
//       );
//   }
// }

// export default Skills;
