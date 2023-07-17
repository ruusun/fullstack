const Header = (props) => {
    return <h2>{props.course}</h2>
  }
  
  
  const Part = (props) => {
    return (
      <p>
        {props.name} {props.exercises}
      </p>
    )
  }
  
  const Total = (props) => {
    return(
      <p>
        Total: {props.parts.reduce( (s, p) => s+p.exercises, 0, )}
      </p>
    )
  }
  
  const Content = ( {parts} ) => {
    return (
      <div>
        {parts.map(part =>
          <Part name={part.name} exercises={part.exercises} key={part.id} />
        )}
        </div>
    )
  }
  
  const Course = ({course}) => {
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }

  export default Course