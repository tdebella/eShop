//create loading cmp: creating a global loadingbox to use it everywhere. it does not accept any parameter, it shows a spinner icon

import Spinner from "react-bootstrap/Spinner";

export default function LoadingBox() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
