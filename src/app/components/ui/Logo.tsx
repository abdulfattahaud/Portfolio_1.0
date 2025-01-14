const Logo = () => {
  return (
    <svg
      width="32"
      height="32"
      className="logo"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="16" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.3139 9.89014H5.94922V12.0239H8.4751V12.0243H14.3139V9.89014ZM8.4751 15.0879V15.0884H5.94922V22.1101H8.46207V17.1877H14.0041V15.0879H8.4751Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.735 9.89014L14.3135 21.938H16.6198L17.8128 19.1498H17.8161L18.5659 17.3943H18.564L20.8202 12.1216L23.083 17.3904H23.0843L23.086 17.3943L23.8404 19.1498L23.8411 19.1514H23.8393L25.0361 21.938H27.3768L21.9381 9.89014H19.735Z"
        fill="black"
      />
    </svg>
  );
};

const LogoBlack = () => {
  return (
    <svg
      width="33"
      height="32"
      className="logo"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.103027" width="32" height="32" rx="16" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4164 9.89014H6.05176V12.0239H8.57764V12.0243H14.4164V9.89014ZM8.57764 15.0879V15.0884H6.05176V22.1101H8.5646V17.1877H14.1066V15.0879H8.57764Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.8381 9.89014L14.4165 21.938H16.7228L17.9159 19.1498H17.9197L18.6695 17.3943H18.6671L20.9232 12.1216L23.186 17.3903H23.1879L23.1896 17.3943L23.944 19.1498L23.9446 19.1513H23.9423L25.1391 21.938H27.4799L22.0411 9.89014H19.8381Z"
        fill="white"
      />
    </svg>
  );
};

export { Logo, LogoBlack };
