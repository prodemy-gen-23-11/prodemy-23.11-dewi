import React from 'react'

function Description({children}) {
  return (
    <div>
      {children}
    </div>
  )
}
function Title(props){
  return (
    <div>

    </div>
  );
}
function Detail(props){
  return (
    <div>

    </div>
  );
}
function Price(props){
  return (
    <div>

    </div>
  );
}
Description.Title = Title;
Description.Image = Image;
Description.Body = Body;
Description.Footer = Footer;
export default Description