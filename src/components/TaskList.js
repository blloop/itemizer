import React, { Component } from 'react';

class TaskList extends Component {

    state = {
        tasks: [],
    }

    render() {
        return (
            <div>
                <h1> List of Tasks: </h1>
                <ol>
                    <li> One </li>
                    <li> Two </li>
                    <li> Three </li>
                </ol>
            </div>
        )
    }
}
export default TaskList;