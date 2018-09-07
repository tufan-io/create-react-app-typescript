import * as React from 'react';
import * as styles from './LibContent.css';

const LibContent = () => (
  <div className={styles.libContent}>
    <p className={styles.libContentPara}>
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