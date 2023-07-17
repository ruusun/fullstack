const FilterComponent = (props) => {
    return (
      <form onSubmit={props.addNewFilter}>
            <div>filter shown with <input value={props.newFilter} onChange={props.handleFilterChange}/> </div>
          </form>
    )
    }

    export default FilterComponent