const Notification = ({message}) => {
    if (message === null) {
      return null
    }
    else if (message==="New person added" || message==="Number changed" || message==="Person deleted"){
    return (
      <div className="success">
        {message}
      </div>
    )}
    else{
        return (
            <div className="fail">
            {message}
          </div>
        )
    }
  }

  export default Notification