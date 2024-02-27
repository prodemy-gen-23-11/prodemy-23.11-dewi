import { Link, useLocation } from "react-router-dom";

const AboutPage = (props) => {
     const location = useLocation();
     const state = location.state;
     console.log(state);
   
     return (
       <>
         <h1>This is About page</h1>
         {state && (
           <div>
             <h3>Passed data:</h3>
             <p>From: {state.from}</p>
             <p>Message: {state.message}</p>
             <p>Timestamp: {state.timestamp}</p>
           </div>
         )}
         <hr />
         <Link to="/">Go Home</Link>
       </>
     );
   };
   
   export default AboutPage;