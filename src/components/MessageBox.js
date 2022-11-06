//create Message cmp: creating a global MessageBox to use it everywhere. it does not accept any parameter, it shows a spinner icon

import Alert from "react-bootstrap/Alert";

export default function MessageBox(props) {
  return <Alert variant={props.variant || "info"}>{props.children}</Alert>;
}

// use the 'variant' as props otherwise use 'info' as props
//put the content in the place of 'children'
