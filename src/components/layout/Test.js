import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return( 
      <div>
          <ul>
              {items.map(item => (
                  <div className="bg-white shadow-md">
                  <li className="text-gray-900 text-xl" key={item.id}>
                      <b>Name:</b> {item.name} | <b>Email:</b> {item.email}
                  </li>
                  </div>
              ))}
          </ul>
      </div>
      )
    }
  }
}

export default Test;
