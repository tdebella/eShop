import { useEffect, useReducer } from "react";
import axios from "axios";
import logger from "use-reducer-logger";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../components/Product";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

// import data from "../data";  //i comment data file b/c it is static data in the frontend

//define the reducer function & use it in the HomeScreen function by comment & replace the useState
// the state mgt is done by useReducer hook

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  //declare a new state variable, called 'products' & a function updating it
  // const [products, setProducts] = useState([]);
  //logger is used for the test, we use it in the HomeScreen not in the ProductScreen cmp
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });

  //useEffect takes 2 variables: a function & an array
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        //to send AJAX req to the address ('/api/products')
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>eShop</title>
      </Helmet>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}
export default HomeScreen;

/* // we fetched data (using axios api) from the backend and rendered on the frontend
// i replace the useState hook with useReducer hook to manage cpx states in the HomeScreen cmp for fetching data from backend. An alt to useState. Accepts a reducer of type (state, action) => newState, & returns the current state paired w/ a dispatch method. useReducer is preferable to useState when i've cpx state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer let's me optimize performce for cmp that trigger deep updates coz i can pass dispatch down instead of callbacks. */
