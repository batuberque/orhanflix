import React from "react"
import Link from "next/link"

import styles from "./styles.module.css"
function Footer() {
   return (
     <footer className={styles.footer}>
       made by &nbsp;
       <Link href="https://github.com/batuberque" target="_blank">
         batuberque
       </Link>
     </footer>
   )
}

export { Footer }