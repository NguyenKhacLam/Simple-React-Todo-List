import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewTodoForm.css';

export default class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { task: '' };
		this.handelChange = this.handelChange.bind(this);
		this.handelSubmit = this.handelSubmit.bind(this);
	}
	handelChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}
	handelSubmit(evt) {
		evt.preventDefault();
		this.props.createTodo({ ...this.state, id: uuid(), completed: false });
		this.setState({ task: '' });
	}
	render() {
		return (
			<form onSubmit={this.handelSubmit} className="NewTodoForm">
				<label htmlFor="task">New Todo</label>
				<input
					type="text"
					placeholder="New task"
					id="task"
					value={this.state.task}
					onChange={this.handelChange}
					name="task"
				/>
				<button>Add Todo</button>
			</form>
		);
	}
}
