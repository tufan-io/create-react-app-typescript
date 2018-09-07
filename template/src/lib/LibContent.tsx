import * as React from 'react';
import './LibContent.css';

const LibContent = () => (
  <div className="lib-content">
    <p className="lib-content-para">
      Hello from Library!
    </p>
    <p>
      Content in src/lib can be built as a library and published
    </p>
    <p>
      npm run build_lib
    </p>
  </div>
);

export default LibContent;