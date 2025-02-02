import styles from "@/styles/BlogHeader.module.css"

interface BlogHeaderProps {
    admin: boolean;
    handleAdmin: () => void;
    filter:string;
    setFilter:(val:string) => void;
}

const BlogHeader = ({admin, handleAdmin, filter, setFilter}: BlogHeaderProps) => {
    return (
        <div className={styles.blogHeader}>
        {admin ? (
          <button className={styles.loginButton} onClick={handleAdmin}>Log out</button>
        ) : (
          <button className={styles.loginButton} onClick={handleAdmin}>Log in</button>
        )}
        {filter ? filter !== "" && (
          <p>Active Tab: <span style={{color:"cyan"}}>{filter}</span></p>
        ) : ("")}

        <div className={styles.filterBox}>
        {filter == "" ? (
          <p>klik op een tag om te filteren</p>
        ) : (
          <button className={styles.filterButton} onClick={() => setFilter("")}>Reset tagfilter</button>
        )}
        </div>
      </div>
    )


}


export default BlogHeader;