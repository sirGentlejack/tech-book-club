import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS for Font Awesome
config.autoAddCss = false; // Prevents Font Awesome from automatically adding its CSS

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}