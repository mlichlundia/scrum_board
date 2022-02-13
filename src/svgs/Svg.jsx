export default function Svg({ name, theme }) {
  switch (name) {
    case 'logo':
      return (
        <svg
          aria-hidden="true"
          className="menu__logo"
          width="139"
          height="24"
          viewBox="0 0 139 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM16.3636 17.4545C18.1711 17.4545 19.6364 15.9893 19.6364 14.1818C19.6364 12.3743 18.1711 10.9091 16.3636 10.9091C14.5562 10.9091 13.0909 12.3743 13.0909 14.1818C13.0909 15.9893 14.5562 17.4545 16.3636 17.4545Z"
            fill="#0F6BF3"
          />
          <path
            d="M43.04 21.008C41.0347 21.008 39.392 20.5493 38.112 19.632C36.8533 18.6933 36.1493 17.424 36 15.824H38.304C38.4107 16.8053 38.8693 17.6053 39.68 18.224C40.512 18.8213 41.6213 19.12 43.008 19.12C44.224 19.12 45.1733 18.832 45.856 18.256C46.56 17.68 46.912 16.9653 46.912 16.112C46.912 15.5147 46.72 15.024 46.336 14.64C45.952 14.256 45.4613 13.9573 44.864 13.744C44.288 13.5093 43.4987 13.264 42.496 13.008C41.1947 12.6667 40.1387 12.3253 39.328 11.984C38.5173 11.6427 37.824 11.1413 37.248 10.48C36.6933 9.79733 36.416 8.89067 36.416 7.76C36.416 6.90667 36.672 6.11733 37.184 5.392C37.696 4.66667 38.4213 4.09067 39.36 3.664C40.2987 3.23733 41.3653 3.024 42.56 3.024C44.4373 3.024 45.952 3.504 47.104 4.464C48.256 5.40267 48.8747 6.704 48.96 8.368H46.72C46.656 7.344 46.2507 6.52267 45.504 5.904C44.7787 5.264 43.776 4.944 42.496 4.944C41.3653 4.944 40.448 5.21067 39.744 5.744C39.04 6.27733 38.688 6.93867 38.688 7.728C38.688 8.41067 38.8907 8.976 39.296 9.424C39.7227 9.85067 40.2453 10.192 40.864 10.448C41.4827 10.6827 42.3147 10.9493 43.36 11.248C44.6187 11.5893 45.6213 11.92 46.368 12.24C47.1147 12.56 47.7547 13.0293 48.288 13.648C48.8213 14.2667 49.0987 15.088 49.12 16.112C49.12 17.0507 48.864 17.8933 48.352 18.64C47.84 19.3653 47.1253 19.9413 46.208 20.368C45.2907 20.7947 44.2347 21.008 43.04 21.008Z"
            fill="var(--gray500)"
          />
          <path
            d="M53.9125 12.016C53.9125 10.2027 54.2752 8.624 55.0005 7.28C55.7258 5.91467 56.7285 4.86933 58.0085 4.144C59.2885 3.39733 60.7498 3.024 62.3925 3.024C64.5472 3.024 66.3178 3.55733 67.7045 4.624C69.1125 5.69067 70.0192 7.14133 70.4245 8.976H68.0245C67.7258 7.71733 67.0752 6.736 66.0725 6.032C65.0912 5.30667 63.8645 4.944 62.3925 4.944C61.2192 4.944 60.1632 5.21067 59.2245 5.744C58.2858 6.27733 57.5392 7.07733 56.9845 8.144C56.4512 9.18933 56.1845 10.48 56.1845 12.016C56.1845 13.552 56.4512 14.8533 56.9845 15.92C57.5392 16.9867 58.2858 17.7867 59.2245 18.32C60.1632 18.8533 61.2192 19.12 62.3925 19.12C63.8645 19.12 65.0912 18.768 66.0725 18.064C67.0752 17.3387 67.7258 16.336 68.0245 15.056H70.4245C70.0192 16.848 69.1125 18.288 67.7045 19.376C66.2965 20.464 64.5258 21.008 62.3925 21.008C60.7498 21.008 59.2885 20.6453 58.0085 19.92C56.7285 19.1733 55.7258 18.128 55.0005 16.784C54.2752 15.4187 53.9125 13.8293 53.9125 12.016Z"
            fill="var(--gray500)"
          />
          <path
            d="M78.4015 6.384C78.8922 5.296 79.6388 4.45333 80.6415 3.856C81.6655 3.25867 82.9135 2.96 84.3855 2.96V5.296H83.7775C82.1562 5.296 80.8548 5.73333 79.8735 6.608C78.8922 7.48267 78.4015 8.944 78.4015 10.992V20.752H76.1615V3.28H78.4015V6.384Z"
            fill="var(--gray500)"
          />
          <path
            d="M104.491 3.28V20.752H102.251V17.68C101.739 18.768 100.95 19.6 99.8833 20.176C98.8166 20.752 97.6219 21.04 96.2993 21.04C94.2086 21.04 92.5019 20.4 91.1792 19.12C89.8566 17.8187 89.1952 15.9413 89.1952 13.488V3.28H91.4032V13.232C91.4032 15.1307 91.8726 16.5813 92.8112 17.584C93.7712 18.5867 95.0726 19.088 96.7152 19.088C98.4006 19.088 99.7446 18.5547 100.747 17.488C101.75 16.4213 102.251 14.8533 102.251 12.784V3.28H104.491Z"
            fill="var(--gray500)"
          />
          <path
            d="M132.005 2.96C134.053 2.96 135.717 3.61067 136.997 4.912C138.299 6.192 138.949 8.05867 138.949 10.512V20.752H136.741V10.768C136.741 8.86933 136.283 7.41867 135.365 6.416C134.448 5.41333 133.2 4.912 131.621 4.912C129.979 4.912 128.667 5.456 127.685 6.544C126.704 7.632 126.213 9.21067 126.213 11.28V20.752H124.005V10.768C124.005 8.86933 123.547 7.41867 122.629 6.416C121.712 5.41333 120.453 4.912 118.853 4.912C117.211 4.912 115.899 5.456 114.917 6.544C113.936 7.632 113.445 9.21067 113.445 11.28V20.752H111.205V3.28H113.445V6.288C114 5.2 114.789 4.37867 115.813 3.824C116.837 3.248 117.979 2.96 119.237 2.96C120.752 2.96 122.075 3.32267 123.205 4.048C124.357 4.77333 125.189 5.84 125.701 7.248C126.171 5.86133 126.971 4.80533 128.101 4.08C129.253 3.33333 130.555 2.96 132.005 2.96Z"
            fill="var(--gray500)"
          />
        </svg>
      )

    case 'task-board':
      return (
        <svg
          aria-label="task-board"
          className="menu__icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 17.5C12.1225 17.4479 13.89 16.7154 15.3025 15.3025C16.715 13.8896 17.4475 12.1221 17.5 10C17.4479 7.8775 16.7154 6.11 15.3025 4.6975C13.8896 3.285 12.1221 2.5525 10 2.5C7.8775 2.55208 6.11 3.28458 4.6975 4.6975C3.285 6.11042 2.5525 7.87792 2.5 10C2.55208 12.1225 3.28458 13.89 4.6975 15.3025C6.11042 16.715 7.87792 17.4475 10 17.5ZM10 18.75C7.52583 18.685 5.46521 17.829 3.81813 16.1819C2.17104 14.5348 1.315 12.4742 1.25 10C1.315 7.52583 2.17104 5.46521 3.81813 3.81813C5.46521 2.17104 7.52583 1.315 10 1.25C12.4742 1.315 14.5348 2.17104 16.1819 3.81813C17.829 5.46521 18.685 7.52583 18.75 10C18.685 12.4742 17.829 14.5348 16.1819 16.1819C14.5348 17.829 12.4742 18.685 10 18.75ZM14.5506 7.05062C14.681 6.93354 14.8308 6.875 15 6.875C15.1692 6.875 15.3156 6.93687 15.4394 7.06063C15.5631 7.18437 15.625 7.33083 15.625 7.5C15.625 7.66917 15.5665 7.81896 15.4494 7.94938L9.82438 13.5744C9.69396 13.6915 9.54417 13.75 9.375 13.75C9.20583 13.75 9.05604 13.6915 8.92562 13.5744L5.80062 10.4494C5.68354 10.319 5.625 10.1692 5.625 10C5.625 9.83083 5.68687 9.68437 5.81063 9.56063C5.93437 9.43688 6.08083 9.375 6.25 9.375C6.41917 9.375 6.56896 9.43354 6.69938 9.55062L9.375 12.2463L14.5506 7.05062Z"
            fill="currentcolor"
          />
        </svg>
      )

    case 'description':
      return (
        <svg
          aria-label="description"
          className="menu__icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.25 7.5H11.25V2.5H3.75V17.5H16.25V7.5ZM15.7425 6.25L12.5 3.0075V6.25H15.7425ZM3.125 1.25H12.5L17.5 6.25V18.125C17.5 18.3075 17.4415 18.4573 17.3244 18.5744C17.2073 18.6915 17.0575 18.75 16.875 18.75H3.125C2.9425 18.75 2.79271 18.6915 2.67563 18.5744C2.55854 18.4573 2.5 18.3075 2.5 18.125V1.875C2.5 1.6925 2.55854 1.54271 2.67563 1.42562C2.79271 1.30854 2.9425 1.25 3.125 1.25ZM6.25 10H13.75V11.25H6.25V10ZM6.25 6.25H9.375V7.5H6.25V6.25ZM6.25 13.75H13.75V15H6.25V13.75Z"
            fill="currentcolor"
          />
        </svg>
      )

    case 'add-shortcut':
      return (
        <svg
          aria-label="add-shortcut"
          className="addLink__icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.875 9.375H13.125C13.3075 9.375 13.4573 9.43354 13.5744 9.55062C13.6915 9.66771 13.75 9.8175 13.75 10C13.75 10.1825 13.6915 10.3323 13.5744 10.4494C13.4573 10.5665 13.3075 10.625 13.125 10.625H6.875C6.6925 10.625 6.54271 10.5665 6.42562 10.4494C6.30854 10.3323 6.25 10.1825 6.25 10C6.25 9.8175 6.30854 9.66771 6.42562 9.55062C6.54271 9.43354 6.6925 9.375 6.875 9.375ZM9.375 13.125V6.875C9.375 6.6925 9.43354 6.54271 9.55062 6.42562C9.66771 6.30854 9.8175 6.25 10 6.25C10.1825 6.25 10.3323 6.30854 10.4494 6.42562C10.5665 6.54271 10.625 6.6925 10.625 6.875V13.125C10.625 13.3075 10.5665 13.4573 10.4494 13.5744C10.3323 13.6915 10.1825 13.75 10 13.75C9.8175 13.75 9.66771 13.6915 9.55062 13.5744C9.43354 13.4573 9.375 13.3075 9.375 13.125ZM10 17.5C12.1225 17.4479 13.89 16.7154 15.3025 15.3025C16.715 13.8896 17.4475 12.1221 17.5 10C17.4479 7.8775 16.7154 6.11 15.3025 4.6975C13.8896 3.285 12.1221 2.5525 10 2.5C7.8775 2.55208 6.11 3.28458 4.6975 4.6975C3.285 6.11042 2.5525 7.87792 2.5 10C2.55208 12.1225 3.28458 13.89 4.6975 15.3025C6.11042 16.715 7.87792 17.4475 10 17.5ZM10 18.75C7.52583 18.685 5.46521 17.829 3.81813 16.1819C2.17104 14.5348 1.315 12.4742 1.25 10C1.315 7.52583 2.17104 5.46521 3.81813 3.81813C5.46521 2.17104 7.52583 1.315 10 1.25C12.4742 1.315 14.5348 2.17104 16.1819 3.81813C17.829 5.46521 18.685 7.52583 18.75 10C18.685 12.4742 17.829 14.5348 16.1819 16.1819C14.5348 17.829 12.4742 18.685 10 18.75Z"
            fill="currentcolor"
          />
        </svg>
      )

    case 'header-icon':
      return (
        <svg
          aria-hidden="true"
          className="header__icon"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.469 20.598C6.33093 20.8371 6.41288 21.1429 6.65204 21.281L11.849 24.281C12.0881 24.4191 12.3939 24.3371 12.532 24.098L19.032 12.839C19.1701 12.5999 19.0881 12.2941 18.849 12.156L13.652 9.15597C13.4129 9.01791 13.1071 9.09986 12.969 9.339L6.469 20.598ZM6.45214 23.4693C6.07514 23.2533 5.621 23.5879 5.71554 24.012L6.38119 26.998C6.44505 27.2845 6.74073 27.4546 7.02046 27.3658L9.94586 26.4374C10.3608 26.3057 10.4209 25.7434 10.0432 25.527L6.45214 23.4693ZM14.4711 6.7224C14.332 6.96165 14.4137 7.2684 14.6534 7.40676L19.8503 10.4068C20.089 10.5446 20.394 10.4633 20.5325 10.2251L21.8109 8.0266C21.95 7.78735 21.8683 7.4806 21.6286 7.34224L16.4317 4.34219C16.193 4.20444 15.888 4.2857 15.7495 4.52389L14.4711 6.7224ZM3.29273 22.3465C3.26525 22.224 3.28484 22.0957 3.34761 21.987L15 1.80787C15.1381 1.56878 15.4438 1.48684 15.6829 1.62483L24.3478 6.62502C24.587 6.76307 24.669 7.06893 24.5309 7.30812L12.8783 27.4875C12.8157 27.5959 12.7148 27.6768 12.5954 27.7144L5.54984 29.9308C5.27063 30.0186 4.97601 29.8489 4.91193 29.5633L3.29273 22.3465ZM15.75 30.094C15.4739 30.094 15.25 29.8701 15.25 29.594V28.594C15.25 28.3179 15.4739 28.094 15.75 28.094H28.75C29.0261 28.094 29.25 28.3179 29.25 28.594V29.594C29.25 29.8701 29.0261 30.094 28.75 30.094H15.75Z"
            fill="var(--gray300)"
          />
        </svg>
      )

    case 'task-option':
      return (
        <svg
          aria-label="task-option"
          className="option__icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.875 3.4375C11.8621 2.8125 11.6504 2.295 11.24 1.885C10.8296 1.475 10.3121 1.26333 9.6875 1.25C9.0625 1.26292 8.545 1.47458 8.135 1.885C7.725 2.29542 7.51333 2.81292 7.5 3.4375C7.51292 4.0625 7.72458 4.58 8.135 4.99C8.54542 5.4 9.06292 5.61167 9.6875 5.625C10.3125 5.61208 10.83 5.40042 11.24 4.99C11.65 4.57958 11.8617 4.06208 11.875 3.4375ZM10.625 3.4375C10.6121 3.69792 10.5177 3.91604 10.3419 4.09188C10.166 4.26771 9.94792 4.35562 9.6875 4.35562C9.42708 4.35562 9.20896 4.26771 9.03312 4.09187C8.85729 3.91604 8.76937 3.69792 8.76937 3.4375C8.76938 3.17708 8.85729 2.95896 9.03312 2.78312C9.20896 2.60729 9.42708 2.51937 9.6875 2.51937C9.94792 2.51937 10.166 2.60729 10.3419 2.78312C10.5177 2.95896 10.6121 3.17708 10.625 3.4375ZM11.875 10C11.8621 10.625 11.6504 11.1425 11.24 11.5525C10.8296 11.9625 10.3121 12.1742 9.6875 12.1875C9.0625 12.1746 8.545 11.9629 8.135 11.5525C7.725 11.1421 7.51333 10.6246 7.5 10C7.51292 9.375 7.72458 8.8575 8.135 8.4475C8.54542 8.0375 9.06292 7.82583 9.6875 7.8125C10.3125 7.82542 10.83 8.03708 11.24 8.4475C11.65 8.85792 11.8617 9.37542 11.875 10ZM10.625 10C10.6121 9.73958 10.5177 9.52146 10.3419 9.34562C10.166 9.16979 9.94792 9.08187 9.6875 9.08187C9.42708 9.08187 9.20896 9.16979 9.03312 9.34562C8.85729 9.52146 8.76937 9.73958 8.76937 10C8.76937 10.2604 8.85729 10.4785 9.03312 10.6544C9.20896 10.8302 9.42708 10.9181 9.6875 10.9181C9.94792 10.9181 10.166 10.8302 10.3419 10.6544C10.5177 10.4785 10.6121 10.2604 10.625 10ZM11.875 16.5625C11.8621 17.1875 11.6504 17.705 11.24 18.115C10.8296 18.525 10.3121 18.7367 9.6875 18.75C9.0625 18.7371 8.545 18.5254 8.135 18.115C7.725 17.7046 7.51333 17.1871 7.5 16.5625C7.51292 15.9375 7.72458 15.42 8.135 15.01C8.54542 14.6 9.06292 14.3883 9.6875 14.375C10.3125 14.3879 10.83 14.5996 11.24 15.01C11.65 15.4204 11.8617 15.9379 11.875 16.5625ZM10.625 16.5625C10.6121 16.3021 10.5177 16.084 10.3419 15.9081C10.166 15.7323 9.94792 15.6444 9.6875 15.6444C9.42708 15.6444 9.20896 15.7323 9.03312 15.9081C8.85729 16.084 8.76937 16.3021 8.76937 16.5625C8.76937 16.8229 8.85729 17.041 9.03312 17.2169C9.20896 17.3927 9.42708 17.4806 9.6875 17.4806C9.94792 17.4806 10.166 17.3927 10.3419 17.2169C10.5177 17.041 10.6121 16.8229 10.625 16.5625Z"
            fill="currentcolor"
          />
        </svg>
      )

    case 'create-icon':
      return (
        <svg
          aria-hidden="true"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_82_76)">
            <path
              d="M8.25006 1.73535C8.25006 1.32114 7.91427 0.985352 7.50006 0.985352C7.08584 0.985352 6.75006 1.32114 6.75006 1.73535H8.25006ZM6.75006 13.2648C6.75006 13.679 7.08584 14.0148 7.50006 14.0148C7.91427 14.0148 8.25006 13.679 8.25006 13.2648H6.75006ZM13.2648 8.25006C13.679 8.25006 14.0148 7.91427 14.0148 7.50006C14.0148 7.08584 13.679 6.75006 13.2648 6.75006V8.25006ZM1.73535 6.75006C1.32114 6.75006 0.985352 7.08584 0.985352 7.50006C0.985352 7.91427 1.32114 8.25006 1.73535 8.25006L1.73535 6.75006ZM6.75006 1.73535V13.2648H8.25006V1.73535H6.75006ZM13.2648 6.75006L1.73535 6.75006L1.73535 8.25006L13.2648 8.25006V6.75006Z"
              fill="var(--gray400)"
            />
          </g>
          <defs>
            <clipPath id="clip0_82_76">
              <rect
                width="14"
                height="14"
                fill="white"
                transform="translate(0.5 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      )

    case 'delete-column':
      return (
        <svg
          aria-label="delete-column"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.20912 9L6.60938 7.41769C6.504 7.30031 6.45131 7.1655 6.45131 7.01325C6.45131 6.861 6.507 6.72919 6.61837 6.61781C6.72975 6.50644 6.86156 6.45075 7.01381 6.45075C7.16606 6.45075 7.30087 6.50344 7.41825 6.60881L9.00056 8.20856L10.5829 6.60881C10.7471 6.45656 10.9316 6.40969 11.1364 6.46819C11.3411 6.52669 11.4729 6.6585 11.5318 6.86362C11.5907 7.06875 11.5438 7.25325 11.3912 7.41712L9.79144 8.99944L11.3912 10.5818C11.5434 10.746 11.5903 10.9305 11.5318 11.1352C11.4733 11.34 11.3415 11.4718 11.1364 11.5307C10.9313 11.5896 10.7467 11.5427 10.5829 11.3901L9.00056 9.79031L7.41825 11.3901C7.30087 11.4954 7.16606 11.5481 7.01381 11.5481C6.86156 11.5481 6.72975 11.4924 6.61837 11.3811C6.507 11.2697 6.45131 11.1379 6.45131 10.9856C6.45131 10.8334 6.504 10.6986 6.60938 10.5812L8.20912 9ZM9 15.75C10.9102 15.7031 12.501 15.0439 13.7722 13.7722C15.0435 12.5006 15.7028 10.9099 15.75 9C15.7031 7.08975 15.0439 5.499 13.7722 4.22775C12.5006 2.9565 10.9099 2.29725 9 2.25C7.08975 2.29688 5.499 2.95612 4.22775 4.22775C2.9565 5.49937 2.29725 7.09013 2.25 9C2.29688 10.9102 2.95612 12.501 4.22775 13.7722C5.49937 15.0435 7.09013 15.7028 9 15.75ZM9 16.875C6.77325 16.8165 4.91869 16.0461 3.43631 14.5637C1.95394 13.0813 1.1835 11.2267 1.125 9C1.1835 6.77325 1.95394 4.91869 3.43631 3.43631C4.91869 1.95394 6.77325 1.1835 9 1.125C11.2267 1.1835 13.0813 1.95394 14.5637 3.43631C16.0461 4.91869 16.8165 6.77325 16.875 9C16.8165 11.2267 16.0461 13.0813 14.5637 14.5637C13.0813 16.0461 11.2267 16.8165 9 16.875V16.875Z"
            fill="currentcolor"
          />
        </svg>
      )

    case 'not-found':
      return (
        <svg
          aria-hidden="true"
          width="478"
          height="224"
          viewBox="0 0 478 224"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.2 169.6V152.4L76.4 56H104V149.8H122.6V169.6H104V200H81.6V169.6H9.2ZM82.6 79.2L35.4 149.8H82.6V79.2Z"
            fill="var(--black)"
          />
          <path
            d="M357.2 169.6V152.4L424.4 56H452V149.8H470.6V169.6H452V200H429.6V169.6H357.2ZM430.6 79.2L383.4 149.8H430.6V79.2Z"
            fill="var(--black)"
          />
          <path
            d="M170.166 154.429C166.485 161.056 167.405 177.643 168.325 185.108H166.791L162.496 183.268L156.054 185.108H151.759L145.009 186.949L148.077 192.778C139.794 192.778 137.647 197.993 151.759 201.368C167.712 197.687 220.786 197.584 245.329 197.993L251.465 205.05L260.055 209.345L268.032 207.197V199.527L276.622 195.539L346.876 199.527L353.319 195.539L352.092 190.017L345.649 188.176L344.729 184.188L340.434 180.507L334.912 183.268H330.617L327.242 188.176L295.949 183.268L278.156 168.235L260.055 157.497L251.465 154.429V145.533L249.624 144.305L248.09 134.181L235.205 120.376L229.683 118.842L226.922 114.24C228.967 111.377 233.18 105.466 233.671 104.73C234.162 103.993 238.58 99.5143 240.728 97.3668L238.887 94.2989L243.182 92.765L246.863 91.2311H254.226L256.681 104.73L263.123 113.013H280.61L290.734 102.582V95.8329L287.359 78.0392L274.474 62.0862L265.577 57.4843L252.079 58.7115L250.238 54.1096L244.102 57.4843L235.205 64.8472L222.934 78.0392L205.14 108.411L182.131 136.636H178.449C177.222 139.806 173.847 147.803 170.166 154.429Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M248.975 53.2615C246.976 54.9324 244.969 55.8455 243.983 55.5331C242.863 55.1783 241.36 56.2224 239.29 58.7948C237.615 60.8755 234.008 64.3947 231.275 66.6152C224.867 71.8188 220.452 77.7532 214.254 89.49C206.045 105.036 203.732 108.572 195.762 117.762C192.773 121.209 188.51 126.525 186.288 129.573C183.964 132.764 181.513 135.117 180.517 135.117C178.081 135.117 175.111 138.699 173.322 143.795C172.483 146.181 170.711 151.014 169.383 154.536C167.01 160.828 166.527 164.807 166.562 177.805C166.578 183.866 166.463 184.23 164.953 182.867C162.988 181.091 158.049 180.938 156.382 182.602C155.719 183.266 153.198 183.82 150.781 183.835C146.072 183.864 143.22 186.13 144.161 189.093C144.52 190.222 143.009 191.372 138.408 193.471C134.777 195.127 132.526 196.674 133.025 197.172C133.524 197.67 135.116 197.598 136.835 196.999C139.056 196.226 139.972 196.265 140.529 197.156C140.937 197.806 142.523 199.3 144.056 200.474C147.154 202.848 153.326 203.287 161.659 201.724C164.253 201.237 170.07 200.585 174.585 200.275C182.089 199.759 182.508 199.821 179.471 200.985C177.645 201.686 175.979 202.772 175.769 203.399C175.282 204.86 175.986 204.823 181.739 203.08C184.346 202.291 188.379 201.645 190.701 201.645C193.563 201.645 195.103 201.179 195.479 200.198C195.893 199.122 197.55 198.766 201.967 198.803L207.899 198.854L200.174 201.141C189.508 204.299 187.138 205.282 187.138 206.545C187.138 207.201 187.812 207.364 188.828 206.955C190.647 206.222 204.567 202.192 208.142 201.364C209.338 201.087 210.103 201.205 209.842 201.625C209.582 202.046 207.843 202.676 205.979 203.025C203.903 203.414 202.588 204.218 202.588 205.096C202.588 206.179 203.015 206.306 204.319 205.608C207.313 204.009 226.822 200.612 236.43 200.018L245.647 199.449L250.559 205.041C255.223 210.349 255.692 210.628 259.856 210.565C262.268 210.529 265.078 210.234 266.1 209.91C268.326 209.205 270.449 204.966 269.722 202.679C269.353 201.518 270.255 200.454 272.831 199.01C275.995 197.237 277.387 197.059 283.702 197.623L290.944 198.27L284.667 200.072C276.737 202.351 278.641 203.244 287.317 201.317C295.19 199.568 311.885 198.253 309.774 199.548C308.977 200.037 304.849 201.221 300.6 202.179C296.352 203.137 293.578 204.08 294.437 204.275C295.295 204.47 300.292 203.711 305.542 202.589C317.424 200.047 337.008 198.995 341.972 200.631C348.214 202.688 355.159 198.871 355.159 193.384C355.159 190.655 352.232 188.146 349.048 188.146C346.992 188.146 346.468 187.691 346.468 185.904C346.468 183.222 342.755 179.469 340.103 179.469C339.06 179.469 337.35 180.039 336.303 180.736C335.255 181.433 333.311 182.063 331.984 182.139C330.656 182.213 328.785 183.24 327.826 184.419L326.082 186.565L311.81 184.587L297.537 182.608L289.497 175.977C285.075 172.329 279.68 167.721 277.509 165.734C273.094 161.694 263.763 156.839 258.532 155.861C252.884 154.805 252.457 154.209 252.691 147.725C252.85 143.335 252.549 141.709 251.505 141.309C250.482 140.917 250.242 139.754 250.615 136.981C250.976 134.292 250.768 133.189 249.899 133.189C249.225 133.189 245.217 129.501 240.994 124.994C236.462 120.157 232.546 116.798 231.439 116.798C228.21 116.798 228.265 114.042 231.59 109.177C234.615 104.749 237.549 102.58 243.368 100.464C246.217 99.4277 246.18 96.9961 243.304 96.2353C242.42 96.001 243.327 95.76 245.318 95.6983C248.3 95.6057 248.939 95.2345 248.939 93.5906C248.939 92.073 249.459 91.669 251.111 91.9033C253 92.1714 253.37 92.9678 253.938 97.9969C255.018 107.556 256.625 111.055 260.958 113.29C265.575 115.672 274.513 116.466 279.222 114.914C281.212 114.259 284.505 111.742 287.001 108.97C290.792 104.761 291.365 103.541 291.62 99.1519C292.071 91.3624 290.712 82.2549 288.372 77.3743C286.033 72.4956 275.974 61.509 270.171 57.4932L266.487 54.9449L260.369 56.6592C257.003 57.6022 254.053 58.1768 253.812 57.9377C253.571 57.6976 253.492 56.1357 253.637 54.4657C253.997 50.2822 252.883 49.9949 248.975 53.2615ZM249.582 58.3957C249.291 59.1525 249.703 60.3086 250.495 60.9661C251.651 61.9245 252.949 61.8426 257.041 60.5544C259.848 59.6713 263.436 58.9481 265.015 58.9481C270.417 58.9481 283.9 72.5805 286.704 80.8781C287.376 82.8691 287.954 88.7226 287.987 93.8857L288.047 103.272L283.513 107.801C279.324 111.984 278.553 112.358 273.374 112.712C266.855 113.157 261.36 111.251 259.06 107.747C258.232 106.485 257.063 101.458 256.46 96.5757L255.366 87.6986L252.515 88.2675C250.946 88.5808 247.721 88.8373 245.348 88.8373C241.781 88.8373 240.941 89.1873 240.504 90.8553C240.072 92.505 239.384 92.8039 236.732 92.4953C232.778 92.0345 232.38 93.8529 235.928 96.1736L238.367 97.7693L234.466 101.102C230.185 104.762 224.798 112.033 224.798 114.152C224.798 115.846 228.489 119.271 231.196 120.089C233.682 120.839 243.433 130.602 246.145 135.055C247.382 137.087 247.992 139.515 247.805 141.676C247.625 143.761 247.976 145.242 248.707 145.485C249.394 145.713 249.904 147.528 249.904 149.734V153.584L246.283 153.27C242.723 152.96 242.657 153.016 242.36 156.615C242.108 159.667 241.762 160.184 240.285 159.715C236.04 158.37 225.291 155.514 225.119 155.686C223.662 157.141 218.038 167.753 218.038 169.047C218.038 172.462 220.496 170.702 223.349 165.245C226.124 159.938 226.389 159.717 229.626 160.03C231.485 160.21 235.38 161.186 238.283 162.2C245.696 164.788 246.25 164.679 245.517 160.779C245.179 158.983 245.267 157.289 245.714 157.013C246.986 156.23 261.509 159.38 260.929 160.314C260.645 160.774 259.615 161.15 258.641 161.15C256.775 161.15 251.485 165.563 250.769 167.716C250.45 168.674 249.068 168.385 245.057 166.52C238.297 163.379 235.067 163.413 228.641 166.694C221.678 170.249 219.487 173.415 219.487 179.92C219.487 186.088 221.173 188.363 228.178 191.648C234.294 194.517 241.339 194.655 246.294 192.003C248.276 190.942 250.116 190.075 250.383 190.075C251.396 190.075 250.819 194.814 249.725 195.489C249.094 195.877 232.691 196.303 213.272 196.435C193.853 196.567 174.488 197.153 170.239 197.735C165.99 198.318 159.038 199.055 154.789 199.372C148.031 199.876 146.772 199.713 144.738 198.061C141.578 195.495 142.855 193.561 147.175 194.371C151.009 195.088 151.52 193.665 148.351 191.103C145.489 188.789 146.585 185.98 150.19 186.395C151.963 186.599 153.264 187.58 154.11 189.352C155.86 193.013 157.031 192.668 157.387 188.387C157.66 185.086 157.959 184.746 160.824 184.47C163.35 184.226 163.963 184.518 163.963 185.965C163.963 186.952 163.51 188.213 162.956 188.765C162.257 189.463 162.386 190.133 163.375 190.951C164.507 191.89 165.257 191.843 167.036 190.721C168.266 189.944 171.881 188.58 175.067 187.69C178.254 186.8 183.063 184.844 185.753 183.344C188.443 181.845 192.463 180.072 194.685 179.408C196.907 178.744 198.726 177.881 198.726 177.491C198.726 175.659 195.586 176.032 189.535 178.581C185.898 180.113 182.707 181.15 182.443 180.887C181.637 180.082 184.891 174.11 188.162 170.389C191.913 166.125 191.149 164.544 187.176 168.345C184.601 170.808 180.232 178.424 179.027 182.549C178.743 183.519 177.092 184.457 174.963 184.855C172.095 185.392 171.12 185.173 170.085 183.759C168.72 181.897 168.243 169.731 169.486 168.491C169.868 168.109 170.297 166.054 170.44 163.923C170.583 161.793 171.822 157.368 173.193 154.092C174.564 150.815 176.135 146.615 176.684 144.759C177.999 140.314 179.191 138.974 181.828 138.974C183.487 138.974 185.284 137.058 189.351 130.954C192.292 126.544 197.181 120.361 200.217 117.215C205.606 111.631 207.331 108.921 215.959 92.4915C218.268 88.0958 221.712 82.1122 223.613 79.1956C227.072 73.8869 241.294 60.6374 243.95 60.2478C244.726 60.1341 246.042 59.3618 246.874 58.5307C248.764 56.6438 250.285 56.5676 249.582 58.3957ZM308.451 109.326C307.596 112.516 307.694 112.941 309.291 112.941C310.257 112.941 310.74 111.977 310.74 110.049C310.74 106.657 309.29 106.199 308.451 109.326ZM301.083 108.865C301.083 110.249 304.877 113.331 305.642 112.568C306.018 112.192 305.86 111.146 305.291 110.244C304.16 108.45 301.083 107.442 301.083 108.865ZM299.557 114.032C298.734 115.362 300.624 117.195 301.965 116.368C302.542 116.011 303.015 115.359 303.015 114.916C303.015 113.634 300.242 112.924 299.557 114.032ZM309.774 119.152C309.774 121.724 311.21 123.199 312.183 121.626C312.968 120.358 311.856 116.798 310.675 116.798C310.18 116.798 309.774 117.857 309.774 119.152ZM254.733 120.094C254.733 122.261 255.832 124.543 256.636 124.047C257.61 123.445 256.679 118.726 255.585 118.726C255.117 118.726 254.733 119.342 254.733 120.094ZM247.973 123.965C247.973 125.388 251.554 127.042 252.529 126.069C253.334 125.265 250.853 122.583 249.304 122.583C248.572 122.583 247.973 123.205 247.973 123.965ZM261.051 125.409C260.745 125.903 260.897 126.555 261.389 126.858C262.531 127.563 265.355 126.504 265.355 125.372C265.355 124.232 261.761 124.262 261.051 125.409ZM251.433 129.952C251.099 130.824 251.024 131.735 251.266 131.977C252.034 132.743 253.767 131.205 253.767 129.757C253.767 127.866 252.184 127.999 251.433 129.952ZM279.969 129.806C273.923 131.162 268.527 133.785 269.593 134.849C269.891 135.148 270.69 134.935 271.367 134.377C275.84 130.686 299.622 128.631 308.618 131.159C313.338 132.485 316.742 135.38 315.964 137.405C315.181 139.444 302.812 144.66 292.393 147.344C281.356 150.186 271.541 150.142 268.322 147.233C266.807 145.864 266.32 145.756 266.32 146.788C266.32 150.523 275.907 152.371 286.237 150.627C294.343 149.259 308.879 144.541 314.119 141.578C317.258 139.804 317.982 138.862 317.982 136.552C317.982 134.184 317.256 133.304 313.637 131.287C309.757 129.123 308.051 128.841 297.704 128.646C290.378 128.508 283.854 128.934 279.969 129.806ZM255.698 130.699C255.698 131.537 256.387 132.225 257.227 132.225C258.068 132.225 258.585 131.71 258.374 131.08C257.777 129.292 255.698 128.996 255.698 130.699ZM279.503 138.059C272.155 139.286 273.011 139.938 281.971 139.938C286.508 139.938 291.578 140.209 293.237 140.541C297.294 141.351 297.178 139.419 293.117 138.52C287.873 137.358 284.406 137.24 279.503 138.059ZM299.152 156.17C299.152 157.959 300.318 160.186 301.254 160.186C302.596 160.186 301.794 156.072 300.359 155.601C299.696 155.383 299.152 155.639 299.152 156.17ZM305.079 159.815C301.958 161.998 303.84 163.72 307.435 161.971C308.909 161.254 310.292 160.126 310.507 159.462C311.067 157.748 307.724 157.965 305.079 159.815ZM294.767 160.25C294 161.489 294.189 161.685 296.979 162.541C299.342 163.266 299.835 162.217 297.993 160.378C296.562 158.95 295.596 158.911 294.767 160.25ZM270.556 165.132C274.081 166.736 277.291 174.748 276.505 179.983C275.854 184.321 274.476 185.999 269.507 188.512C265.568 190.504 262.931 190.453 258.112 188.292L254.25 186.559L254.065 179.881C253.964 176.207 253.85 172.117 253.812 170.791C253.704 166.925 257.814 164.042 263.432 164.042C266.033 164.042 269.238 164.532 270.556 165.132ZM297.554 166.494C297.239 167.313 297.243 168.242 297.561 168.56C298.249 169.247 301.083 167.068 301.083 165.853C301.083 164.397 298.155 164.93 297.554 166.494ZM304.946 167.842C304.946 169.951 306.454 171.291 307.296 169.93C308.002 168.79 306.942 165.971 305.808 165.971C305.334 165.971 304.946 166.812 304.946 167.842ZM244.709 168.796C253.444 173.01 253.01 184.997 243.954 189.674C237.963 192.767 228.524 191.037 224.347 186.08C219.789 180.672 222.209 172.928 229.626 169.183C234.979 166.481 239.661 166.361 244.709 168.796ZM288.53 178.56C291.982 181.462 295.633 184.482 296.644 185.268C297.722 186.108 301.717 186.953 306.301 187.311C310.601 187.648 319.254 188.669 325.528 189.579C331.803 190.49 337.165 191.007 337.445 190.727C337.725 190.448 337.537 189.474 337.026 188.564C334.801 184.594 339.318 180.593 342.471 183.742C343.934 185.204 343.933 185.528 342.44 188.125C341.031 190.576 341.006 191.077 342.24 192.1C343.311 192.987 343.925 193 344.771 192.155C346.359 190.569 349.874 190.774 351.34 192.538C352.378 193.787 352.269 194.354 350.683 195.936C348.464 198.153 345.601 198.354 336.329 196.947C332.611 196.384 323.283 195.909 315.601 195.892C307.917 195.874 295.646 195.373 288.33 194.779C276.511 193.818 274.764 193.872 272.64 195.261C270.074 196.94 266.844 197.159 258.837 196.199C253.862 195.602 252.972 194.747 254.623 192.147C255.306 191.07 256.383 191.053 260.848 192.051C265.526 193.096 266.812 193.041 270.483 191.642C272.813 190.754 275.763 188.917 277.038 187.56C279.051 185.419 279.356 184.16 279.356 178.011C279.356 171.835 279.542 171.079 280.805 172.106C281.602 172.753 285.078 175.658 288.53 178.56ZM243.386 181.638C243.995 183.462 247.008 183.722 247.008 181.95C247.008 181.056 246.182 180.433 244.996 180.433C243.816 180.433 243.15 180.932 243.386 181.638ZM255.884 181.47C256.074 182.039 256.643 182.506 257.147 182.506C257.651 182.506 258.22 182.039 258.41 181.47C258.6 180.9 258.032 180.433 257.147 180.433C256.261 180.433 255.693 180.9 255.884 181.47ZM332.917 187.983C330.163 188.409 329.493 187.57 331.071 185.672C332.255 184.248 332.476 184.267 333.674 185.89C334.831 187.459 334.744 187.701 332.917 187.983ZM125.365 186.18C124.584 186.674 124.237 187.37 124.595 187.728C125.503 188.633 130.165 187.355 130.165 186.2C130.165 185.007 127.241 184.996 125.365 186.18ZM130.889 188.79C126.534 190.116 125.314 191.279 127.113 192.39C128.363 193.161 137.967 189.821 137.605 188.74C137.114 187.268 135.86 187.278 130.889 188.79ZM220.452 199.716C216.181 200.802 214.176 200.802 214.176 199.716C214.176 199.186 216.24 198.803 218.763 198.866C222.857 198.968 223.038 199.06 220.452 199.716ZM265.824 201.731C268.82 204.651 266.78 206.88 260.786 207.235C256.137 207.511 255.804 207.359 252.838 203.619C249.5 199.411 249.842 198.416 253.46 201.81C255.707 203.917 258.004 203.562 255.875 201.436C253.666 199.23 254.736 198.533 259.319 199.197C261.843 199.562 264.769 200.702 265.824 201.731ZM228.902 202.639C225.698 203.925 226.243 204.537 230.592 204.537C233.381 204.537 234.454 204.135 234.454 203.091C234.454 201.489 232.222 201.306 228.902 202.639ZM310.981 202.871C308.193 203.406 305.911 204.226 305.911 204.692C305.911 205.157 306.889 205.308 308.084 205.026C309.28 204.745 313.081 203.911 316.534 203.176C324.009 201.583 319.098 201.313 310.981 202.871Z"
            fill={theme === 'dark-theme' ? 'var(--gray100)' : 'var(--black'}
          />
        </svg>
      )

    case 'error':
      return (
        <svg
          aria-hidden="true"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.6819 15L11.0156 12.3628C10.84 12.1672 10.7522 11.9425 10.7522 11.6888C10.7522 11.435 10.845 11.2153 11.0306 11.0297C11.2162 10.8441 11.4359 10.7513 11.6897 10.7513C11.9434 10.7513 12.1681 10.8391 12.3637 11.0147L15.0009 13.6809L17.6381 11.0147C17.9119 10.7609 18.2194 10.6828 18.5606 10.7803C18.9019 10.8778 19.1216 11.0975 19.2197 11.4394C19.3178 11.7812 19.2397 12.0887 18.9853 12.3619L16.3191 14.9991L18.9853 17.6363C19.2391 17.91 19.3172 18.2175 19.2197 18.5587C19.1222 18.9 18.9025 19.1197 18.5606 19.2178C18.2188 19.3159 17.9112 19.2378 17.6381 18.9834L15.0009 16.3172L12.3637 18.9834C12.1681 19.1591 11.9434 19.2469 11.6897 19.2469C11.4359 19.2469 11.2162 19.1541 11.0306 18.9684C10.845 18.7828 10.7522 18.5631 10.7522 18.3094C10.7522 18.0556 10.84 17.8309 11.0156 17.6353L13.6819 15ZM15 26.25C18.1837 26.1719 20.835 25.0731 22.9537 22.9537C25.0725 20.8344 26.1713 18.1831 26.25 15C26.1719 11.8163 25.0731 9.165 22.9537 7.04625C20.8344 4.9275 18.1831 3.82875 15 3.75C11.8163 3.82813 9.165 4.92687 7.04625 7.04625C4.9275 9.16562 3.82875 11.8169 3.75 15C3.82813 18.1837 4.92687 20.835 7.04625 22.9537C9.16562 25.0725 11.8169 26.1713 15 26.25ZM15 28.125C11.2888 28.0275 8.19781 26.7434 5.72719 24.2728C3.25656 21.8022 1.9725 18.7112 1.875 15C1.9725 11.2888 3.25656 8.19781 5.72719 5.72719C8.19781 3.25656 11.2888 1.9725 15 1.875C18.7112 1.9725 21.8022 3.25656 24.2728 5.72719C26.7434 8.19781 28.0275 11.2888 28.125 15C28.0275 18.7112 26.7434 21.8022 24.2728 24.2728C21.8022 26.7434 18.7112 28.0275 15 28.125V28.125Z"
            fill="var(--red)"
          />
        </svg>
      )

    default:
      return <svg></svg>
  }
}
