import React from "react";
import Styles from "./PageNotFound.module.css";
export default function PageNotFound() {
  return (
    <div className={Styles.mainSection}>
      <div className={"container"}>
        <div className={Styles.contentWrapper}>
          <h2>Oops!</h2>
          <p>Page Not Found</p>
        </div>
      </div>
    </div>
  );
}
