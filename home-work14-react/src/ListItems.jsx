import { Component } from 'react'
import './ListItems.css'

class ListItems extends Component {
	render() {
		return (
			<>
				{this.props.items.map(({ text, key }) => {
					return (
						<div className='list' key={key}>
							<p>{text}</p>
							<div onClick={() => this.props.deleteItem(key)}>
								delete
							</div>
						</div>
					)
				})}
			</>
		)
	}
}
export default ListItems
