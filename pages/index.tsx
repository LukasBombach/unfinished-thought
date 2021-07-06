import { app } from "styles/styles.css";

export default function Index() {
  return <pre className={app}>{JSON.stringify({}, null, 2)}</pre>;
}
