import React, {Component} from "react";
import Header from './Header'

class App extends Component {

    state = {
        username: ''
    }

    onChange = (event) => {
        this.setState({username: event.target.value})
    }

    render() {

        return(

            <div className="app">
                <Header />
                <main>
                    <p>No new notifications, username 🎉</p>
                    <input
                        type="text"
                        placeholder="Username"
                        value={this.state.value}
                        onChange={this.onChange}
                    />
                    <button>Change Username</button>
                </main>
            </div>
        )
    }
}

export default App