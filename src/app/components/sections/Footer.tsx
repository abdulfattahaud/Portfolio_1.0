import Link from "next/link";
import { LogoBlack } from "../ui/Logo";
import { FB, IG, LIn, X } from "../ui/SocialLinks";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="upper">
        <LogoBlack />
        <div className="social-links">
          <Link target="_blank" href="https://www.facebook.com/fettahaud">
            <FB />
          </Link>
          <Link target="_blank" href="https://www.instagram.com/fettahaud/">
            <IG />
          </Link>
          <Link target="_blank" href="https://x.com/Fettah_Aud">
            <X />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/fettah-aud/">
            <LIn />
          </Link>
        </div>
      </div>
      <div className="lower">
        <span className="copy">© 2024 Fettah Aud. All rights reserved.</span>
        <div>
          <span>TÜRKİYE İstanbul</span>
          <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27 4.53711H5C2.79086 4.53711 1 6.32797 1 8.53711V24.5371C1 26.7462 2.79086 28.5371 5 28.5371H27C29.2091 28.5371 31 26.7462 31 24.5371V8.53711C31 6.32797 29.2091 4.53711 27 4.53711Z"
              fill="#D12D24"
            />
            <path
              opacity="0.15"
              d="M27 4.53711H5C2.791 4.53711 1 6.32811 1 8.53711V24.5371C1 26.7461 2.791 28.5371 5 28.5371H27C29.209 28.5371 31 26.7461 31 24.5371V8.53711C31 6.32811 29.209 4.53711 27 4.53711ZM30 24.5371C30 26.1911 28.654 27.5371 27 27.5371H5C3.346 27.5371 2 26.1911 2 24.5371V8.53711C2 6.88311 3.346 5.53711 5 5.53711H27C28.654 5.53711 30 6.88311 30 8.53711V24.5371Z"
              fill="black"
            />
            <path
              opacity="0.2"
              d="M27 5.53711H5C3.343 5.53711 2 6.88011 2 8.53711V9.53711C2 7.88011 3.343 6.53711 5 6.53711H27C28.657 6.53711 30 7.88011 30 9.53711V8.53711C30 6.88011 28.657 5.53711 27 5.53711Z"
              fill="white"
            />
            <path
              d="M19.8073 16.5372L21.0003 14.8952L19.0693 15.5222L17.8763 13.8792V15.9102L15.9453 16.5372L17.8763 17.1642V19.1952L19.0693 17.5521L21.0003 18.1792L19.8073 16.5372Z"
              fill="white"
            />
            <path
              d="M15.9531 19.8621C14.1161 21.5121 11.2901 21.3621 9.63913 19.5251C7.98813 17.6881 8.13913 14.8621 9.97613 13.2111C11.8131 11.5611 14.6391 11.7111 16.2901 13.5481C15.8481 12.8491 15.2551 12.2561 14.5561 11.8141C11.9481 10.1641 8.49613 10.9401 6.84513 13.5481C5.19513 16.1561 5.97113 19.6081 8.57913 21.2591C11.1871 22.9091 14.6391 22.1331 16.2901 19.5251C16.1841 19.6431 16.0711 19.7561 15.9531 19.8621Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
}
