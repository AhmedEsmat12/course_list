import React,{Component} from 'react';
import CourseForm from './components/courseForm/courseForm';
import CourseList from './components/courseList/courseList';
import './App.css'
class App extends Component {
// get value


  state={
    courses:[
    {name:'Html'},
    {name:'Css'},
    {name:'Javascript'}],
    current:""
  };
  constructor()
  {
    super();
    console.log(this.state.courses);
  }
     updateCourse=(e)=>
{
  this.state.current= e.target.value;
  console.log(this.state.current)
};
updateForm=(e)=>{
  e.preventDefault();
  
let co=this.state.courses;
if(this.state.current.length==0){
  alert("must enter value")
}

else
{
co.push({name:this.state.current});
this.setState({
  courses:co
});
}
}
deleteCourses=(name)=>
{ 
 
  const course=this.state.courses;
  course.splice(name,1);
  this.setState({
    courses:course
  })
}
 editCourse=(index,value)=>
{
 let courses=this.state.courses;
 courses[index].name=value;
 this.setState({
   courses:courses
 })
}
  render()
  {
    const courses=this.state.courses;
    const list= courses.map((list,key)=>
    {
      return(
        <CourseList key={key} index={key} courses={list}  deleteCourses={this.deleteCourses} editCourse={this.editCourse}  />
      )
    })
  return (
    <section className="App">
      <h1>add course</h1>
   <CourseForm  updateCourse={this.updateCourse} updateForm={this.updateForm}/>
   <ul>
   {this.state.courses.length>0?list:"no item to show"}
   </ul>
    </section>
  );
}
}
export default App;
