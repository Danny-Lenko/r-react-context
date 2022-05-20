import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

class UserContextProvider extends Component {

    state = {
        username: "guest"
    }

    changeUsername = (name) => {
        this.setState({username: name})
    }

    render() {
        return(
            <Provider value={{
                          username: this.state.username,
                          changeUsername: this.changeUsername
                      }}
            >
                {this.props.children}
            </Provider>
        )
    }

}

export {UserContextProvider, Consumer as UserContextConsumer}