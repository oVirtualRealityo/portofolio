import styles from "@/styles/blog.module.css"
import { Post } from "@/types"
interface PostComponentOpenProps {
    post: Post;
    setFilter: (val: string) => void
}

const PostComponentOpen = ({ post, setFilter }: PostComponentOpenProps) => {
    const shortDate = new Date(post.date).toLocaleDateString("nl-BE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
    return (
        <div className={styles.postExpanded}>
            {/* Placeholder Image */}

            <div className={styles.postExpandedContent}>
                {/* Large Date as Title */}
                {/* Post Details */}
                <p className={styles.postDescription} style={{ whiteSpace: 'pre-wrap' }}>{post.description}</p>
                <div className={styles.postMeta}>
                    <p>
                        <span className={styles.metaRating}>Rating:</span> {post.rating.toString()} / 7
                    </p>
                    <p>
                        <span className={styles.metaLabel}>Gemaakt op:</span>{" "}
                        {shortDate}
                    </p>
                    <p>
                        <span className={styles.metaLabel}>Locatie:</span> {post.location}
                    </p>
                    {post.tags && (
                        <div>
                            {post.tags.map(e => (
                                <button onClick={() => setFilter(e.toLocaleLowerCase())}>{e.toString()}</button>
                            ))}
                        </div>

                    )}

                </div>
            </div>

        </div>
    )
}

export default PostComponentOpen;