import React, { Component } from "react";

/* export default function CustomTextInput(props) {
  // textInput must be declared here so the ref can refer to it
  const textInput = useRef(null);

  function handleClick() {
    textInput.current.focus();
    console.log(textInput);
  }

  return (
    <div>
      <input type="text" ref={textInput} />
      <input type="button" value="Focus the text input" onClick={handleClick} />
    </div>
  );
}
 */

export class RefsComponent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.callBackRef = null;
    this.setcallBackRef = (element) => {
      this.callBackRef = element;
    };
  }
  componentDidMount() {
    this.callBackRef.focus();
    //this.inputRef.current.focus();
    //console.log(this.inputRef);
  }

  clickHandler = () => {
    //this.callBackRef.focus();
    //alert(this.inputRef.current.value);
    console.log(this.inputRef);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setcallBackRef} />
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default RefsComponent;
