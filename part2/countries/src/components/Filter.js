const FilterComponent = (props) => {
    return (
      <form onSubmit={props.addNewFilter}>
            <div>Find countries <input value={props.newFilter} onChange={props.handleFilterChange}/> </div>
          </form>
    )
    }

    export default FilterComponent