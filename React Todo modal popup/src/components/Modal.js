import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            
            Task: '',
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
          
            Task: nextProps.msg,
        });
    }

    // titleHandler(e) {
    //     this.setState({ title: e.target.value });
    // }

    TaskHandler(e) {
        this.setState({ Task: e.target.value });
    }

    handleSave() {
        const item = this.state.Task;
        this.props.saveModalDetails(item)
    }

    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Task</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* <p><span className="modal-lable">Title:</span><input value={this.state.title} onChange={(e) => this.titleHandler(e)} /></p> */}
                            <p><span className="modal-lable">Task:</span><input value={this.state.Task} onChange={(e) => this.TaskHandler(e)} /></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;