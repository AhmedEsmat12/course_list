import React,{Component,Fragment} from 'react';
import './couresList.css'
class CoursrList extends Component {
  state={
    isPress:false,
    val:"",
    len:0
  }
  
  RenderCourse = () =>
    {
 return(
  <li >
 <span className="in"> {this.props.courses.name}</span>
 <span className="ee">
 <button className="btn2" onClick={()=> this.toggleState()}>edit course</button>
  <button className="btn3" onClick={()=> this.props.deleteCourses(this.props.index)}>delete course</button>
  </span>
  </li>
 )
    }
    getVal=(e)=>
    {
      this.state.val=e.target.value;
    }
    eee=(e)=>
    {
      e.preventDefault();
      this.props.editCourse(this.props.index,this.state.val);
      this.toggleState();
    }
    updateForm=()=>
    {
      return(
      <form onSubmit={this.eee}>
        <input className="i" type="text" onChange={this.getVal} defaultValue={this.props.courses.name} />
        <button className="btn1 btn5">update course</button>  
      </form>
      )
    }
    toggleState =()=>
    {
      let isPress=this.state.isPress;
      this.setState({
        isPress:!isPress
      })
    }
  render()
  {
    // const dd=this.props.index;
  return (
    <Fragment>
      {this.state.isPress?this.updateForm():this.RenderCourse()}
    </Fragment>
  );
}
}
export default CoursrList;