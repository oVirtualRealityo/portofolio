import styles from "@/styles/BlogHeader.module.css"

interface BlogHeaderProps {
    admin: boolean;
    handleAdmin: () => void;
    filter:string;
    setFilter:(val:string) => void;
}

const BlogHeader = ({admin, handleAdmin, filter, setFilter}: BlogHeaderProps) => {
    return (
        <div style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between"
        }}>
        {admin ? (
          <button onClick={handleAdmin}>Log out</button>
        ) : (
          <button onClick={handleAdmin}>Log in</button>
        )}

        {filter == "" ? (
          <p>klik op een tag om te filteren</p>
        ) : (
          <button onClick={() => setFilter("")}>Reset tagfilter</button>
        )}
      </div>
    )


}


export default BlogHeader;