import "./FilterItem.css";
const FilterItem = (props) => {
  const handleSelectYear = (e) => {
    props.onSelectChange(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Select a Year</label>
        <select value={props.selected} onChange={handleSelectYear}>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
        </select>
      </div>
    </div>
  );
};

export default FilterItem;
