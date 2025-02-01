import styles from "@/styles/blog.module.css"
const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    

    const res = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      console.log("Post added successfully");
      // Optionally, you could refresh the page or re-fetch posts here
    } else {
      console.error("Failed to add post " + res.status);
    }
  };
const AddForm = ( ) => {

    return (
        <form onSubmit={handleSubmit} className={styles.postForm}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="title" className={styles.formLabel}>
                Titel
              </label>
              <input type="text" id="title" name="title" className={styles.formInput} />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="rating" className={styles.formLabel}>
                Rating
              </label>
              <input type="number" id="rating" name="rating" className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="location" className={styles.formLabel}>
                Locatie
              </label>
              <input type="text" id="location" name="location" className={styles.formInput} />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description" className={styles.formLabel}>
              Beschrijving
            </label>
            <textarea id="description" name="description" className={styles.formTextarea} />
          </div>
          <div className={styles.formGroup}>
              <label htmlFor="tags" className={styles.formLabel}>
                Tags gescheiden door komma
              </label>
              <input type="text" id="tags" name="tags" className={styles.formInput} />
            </div>

          <button type="submit" className={styles.submitButton}>
            Voeg toe
          </button>
        </form>
    )
}

export default AddForm;