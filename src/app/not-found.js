import Link from "next/link";
import { BLOG_TITLE } from "@/constants";
export const metadata = {
  title: `404 Not Found • ${BLOG_TITLE}`,
};
export default function NotFound() {
  return (
    <div style={{ padding: "var(--viewport-padding)" }}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
