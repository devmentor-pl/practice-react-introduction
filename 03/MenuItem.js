// import React from 'react';

// const MenuItem = (props) => {
//   return (
//     <li>
//       <a href={props.url}>{props.text}</a>
//     </li>
//   );
// };

// export default MenuItem;

import React from 'react';

const MenuItem = ({url, text}) => {
  return (
    <li>
      <a href={url}>{text}</a>
    </li>
  );
};

export default MenuItem;
