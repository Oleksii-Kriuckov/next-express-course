import styles from "./page.module.css";
import course from './courses.json'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ul>
          {course["learn-js.org"].map(lesson => {
            return <li key={lesson.link_id}>
              <h2>{lesson.advertiser}</h2>
              <p>{lesson.link_name}</p>
            </li>
          })}
        </ul>
      </main>
    </div>
  );
}
