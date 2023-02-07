import {Select} from 'antd';
import "./search.less"

const Search = (props) => {

    return (
        <Select
            mode="tags"
            style={{width: '100%'}}
            placeholder="Filter by Name(s)"
            onChange={props.setSearchValue}
            notFoundContent={null}
        />
    )
}
export default Search;