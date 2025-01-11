import styles from "./page.module.css";
import course from './courses.json'
import { resolve } from "path";
import Lesson from "./lesson";

async function getAllCourses(): Promise<typeof course> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(course), 3000);
  })
}
export default async function Home() {
  const courses = await getAllCourses()
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ul>
          {courses["learn-js.org"].map(lesson => {
            return <li key={lesson.link_id}>
              <Lesson title={lesson.advertiser} shortSummary={lesson.link_name}/>
            </li>
          })}
        </ul>
      </main>
    </div>
  );
}
