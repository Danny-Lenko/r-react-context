import React, {Component} from "react"
import Header from './Header'
import {UserContextConsumer} from "./userContext";

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

                <UserContextConsumer>
                    {context => (
                        <main>
                            <p>No new notifications, {context.username} 🎉</p>
                            <input
                                type="text"
                                placeholder="Username"
                                value={this.state.value}
                                onChange={this.onChange}
                            />
                            <button
                                onClick={() => context.changeUsername(this.state.username)}
                            >
                                Change Username
                            </button>
                        </main>
                    )}
                </UserContextConsumer>

            </div>
        )
    }
}

export default App