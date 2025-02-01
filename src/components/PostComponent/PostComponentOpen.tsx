import styles from "@/styles/blog.module.css"
import { Post } from "@/types"
import Typewriter from "../TypeWriter/TypeWriter";
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

    
  // Choose a speed for each letter (in ms)
  const speed = 50;

  // Calculate delays based on the length of each text plus some extra margin.
  // You can tweak the extra delay (here, 500ms) as needed.
  const descriptionDelay = 0;
  const descriptionDuration = post.description.length * speed + 500;

  const ratingText = `Rating: ${post.rating.toString()} / 7`;
  const ratingDelay = descriptionDelay + descriptionDuration;
  const ratingDuration = ratingText.length * speed + 500;

  const dateText = `Gemaakt op: ${shortDate}`;
  const dateDelay = ratingDelay + ratingDuration;
  const dateDuration = dateText.length * speed + 500;

  const locationText = `Locatie: ${post.location}`;
  const locationDelay = dateDelay + dateDuration;
  const locationDuration = locationText.length * speed + 500;

  // For the tags, we animate them one after the other.
  const tagsBaseDelay = locationDelay + locationDuration;

  return (
    <div className={styles.postExpanded}>
      <div className={styles.postExpandedContent}>
        {/* Description */}
        <p className={styles.postDescription} style={{ whiteSpace: "pre-wrap" }}>
          <Typewriter text={post.description} startDelay={descriptionDelay} speed={speed} />
        </p>
        <div className={styles.postMeta}>
          {/* Rating */}
          <p>
            <span className={styles.metaRating}>
              <Typewriter text={ratingText} startDelay={ratingDelay} speed={speed} />
            </span>
          </p>
          {/* Date */}
          <p>
            <span className={styles.metaLabel}>
              <Typewriter text={dateText} startDelay={dateDelay} speed={speed} />
            </span>
          </p>
          {/* Location */}
          <p>
            <span className={styles.metaLabel}>
              <Typewriter text={locationText} startDelay={locationDelay} speed={speed} />
            </span>
          </p>
          {/* Tags */}
          {post.tags && (
            <div>
                <strong><Typewriter text="TAGS: " startDelay={tagsBaseDelay} speed={200}/></strong>
              {post.tags.map((tag, index) => {
                // Each tag gets an additional delay (here, 500ms between tags)
                const tagDelay = tagsBaseDelay + 50 + index * 500;
                return (
                  <button className={styles.tagButton} key={index} onClick={() => setFilter(tag.toLowerCase())}>
                    <Typewriter text={tag.toString()} startDelay={tagDelay} speed={speed} />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostComponentOpen;