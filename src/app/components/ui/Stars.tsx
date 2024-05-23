export default function Stars({ count = 5 }) {
  return (
    <div className="stars">
      {[...Array(Math.floor(count))].map((_, i) => (
        <svg
          key={i}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.7061 0.801636L16.5414 8.0228L24.5943 9.43892L18.9117 15.318L20.0534 23.4143L12.7061 19.8266L5.35874 23.4143L6.50041 15.318L0.817848 9.43892L8.87076 8.0228L12.7061 0.801636Z"
            fill="#DEBE1A"
          />
        </svg>
      ))}
      {[...Array(5 - Math.floor(count))].map((_, i) => (
        <svg
          key={i}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.7061 0.801636L16.5414 8.0228L24.5943 9.43892L18.9117 15.318L20.0534 23.4143L12.7061 19.8266L5.35874 23.4143L6.50041 15.318L0.817848 9.43892L8.87076 8.0228L12.7061 0.801636Z"
            fill="#D0D0D0"
          />
        </svg>
      ))}
    </div>
  );
}
