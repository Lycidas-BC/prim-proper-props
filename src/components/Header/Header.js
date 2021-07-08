// order of imports:

// external
// import { useState } from 'react';

// things you've written
// import SomeComponent from '../SomeComponent/SomeComponent';
import './Header.css';

function Header (props) {
  console.log('This is what the Header Component receives:', props);

  return (
    <>
      <h1>Prim Proper Props</h1>
    </>
  );
}

export default Header;


// function Header ({title, comment}) {
//   const content = title
//   const extraContent = comment;
//   return (
//     <h1>{content}</h1>
//     <h2>{extraContent} </h2>
//   );
// }
