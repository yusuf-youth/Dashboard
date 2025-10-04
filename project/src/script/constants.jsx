import Categories from "../pages/Categories";
import Dashboard from "../pages/Dashboard";
import Help from "../pages/Help";
import Logout from "../pages/Logout";
import MyTask from "../pages/MyTask";
import Settings from "../pages/Settings";
import VitalTask from "../pages/VitalTask";
import Error from "../pages/Error";

import userAvatarImage from "/public/images/avatar.png";

import user1 from "/public/images/users/1.png";
import user2 from "/public/images/users/2.png";
import user3 from "/public/images/users/3.png";
import user4 from "/public/images/users/4.png";
import user5 from "/public/images/users/5.png";

import taskItemImage1 from "/public/images/task-item/1.png";
import taskItemImage2 from "/public/images/task-item/2.png";
import taskItemImage3 from "/public/images/task-item/3.png";
import taskItemImage4 from "/public/images/task-item/4.png";
import taskItemImage5 from "/public/images/task-item/5.png";
import taskItemImage6 from "/public/images/task-item/6.png";
import taskItemImage7 from "/public/images/task-item/7.png";

import membersImage1 from "/public/images/members/1.png";
import membersImage2 from "/public/images/members/2.png";
import membersImage3 from "/public/images/members/3.png";
import membersImage4 from "/public/images/members/4.png";

export const DashboardIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="9" rx="1" />
    <rect x="14" y="3" width="7" height="5" rx="1" />
    <rect x="14" y="12" width="7" height="9" rx="1" />
    <rect x="3" y="16" width="7" height="5" rx="1" />
  </svg>
);

export const VitalTaskIcon = () => (
  <svg
    width="8"
    height="20"
    viewBox="0 0 8 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.875 0C2.84729 0 1.86166 0.408258 1.13496 1.13496C0.408258 1.86166 0 2.84729 0 3.875C0 6.795 1.207 10.427 1.813 12.074C1.96964 12.4942 2.25167 12.8561 2.62086 13.1106C2.99006 13.3651 3.42858 13.5 3.877 13.497C4.781 13.497 5.616 12.955 5.94 12.079C6.546 10.439 7.75 6.825 7.75 3.875C7.75 2.84729 7.34174 1.86166 6.61504 1.13496C5.88834 0.408258 4.90271 0 3.875 0ZM3.876 14.998C3.21269 14.998 2.57655 15.2615 2.10753 15.7305C1.6385 16.1996 1.375 16.8357 1.375 17.499C1.375 18.1623 1.6385 18.7984 2.10753 19.2675C2.57655 19.7365 3.21269 20 3.876 20C4.53931 20 5.17545 19.7365 5.64447 19.2675C6.1135 18.7984 6.377 18.1623 6.377 17.499C6.377 16.8357 6.1135 16.1996 5.64447 15.7305C5.17545 15.2615 4.53931 14.998 3.876 14.998Z"
      fill="white"
    />
  </svg>
);

export const CheckboxIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 22H19C20.103 22 21 21.103 21 20V5C21 3.897 20.103 3 19 3H17C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2H8C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3H5C3.897 3 3 3.897 3 5V20C3 21.103 3.897 22 5 22ZM5 5H7V7H17V5H19V20H5V5Z"
      fill="#FF6767"
    />
    <path
      d="M11 13.586L9.20697 11.793L7.79297 13.207L11 16.414L16.207 11.207L14.793 9.79297L11 13.586Z"
      fill="#FF6767"
    />
  </svg>
);

export const CategoriesIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.65329 19.7143H24V21.4286H9.65329V19.7143ZM2.65414 20.5714L0.0102479 22.7829L1.45517 24L5.55423 20.5714L1.45517 17.1429L0 18.3514L2.65414 20.5714ZM9.65329 11.1429H24V12.8571H9.65329V11.1429ZM2.65414 12L0.0102479 14.2114L1.45517 15.4286L5.55423 12L1.45517 8.57143L0 9.78L2.65414 12ZM9.65329 2.57143H24V4.28571H9.65329V2.57143ZM2.65414 3.42857L0.0102479 5.64L1.45517 6.85714L5.55423 3.42857L1.45517 0L0 1.20857L2.65414 3.42857Z"
      fill="white"
    />
  </svg>
);

export const SettingsIcon = () => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 48 48"
    id="Layer_2"
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M39.23,26a16.52,16.52,0,0,0,.14-2,16.52,16.52,0,0,0-.14-2l4.33-3.39a1,1,0,0,0,.25-1.31l-4.1-7.11a1,1,0,0,0-1.25-.44l-5.11,2.06a15.68,15.68,0,0,0-3.46-2l-.77-5.43a1,1,0,0,0-1-.86H19.9a1,1,0,0,0-1,.86l-.77,5.43a15.36,15.36,0,0,0-3.46,2L9.54,9.75a1,1,0,0,0-1.25.44L4.19,17.3a1,1,0,0,0,.25,1.31L8.76,22a16.66,16.66,0,0,0-.14,2,16.52,16.52,0,0,0,.14,2L4.44,29.39a1,1,0,0,0-.25,1.31l4.1,7.11a1,1,0,0,0,1.25.44l5.11-2.06a15.68,15.68,0,0,0,3.46,2l.77,5.43a1,1,0,0,0,1,.86h8.2a1,1,0,0,0,1-.86l.77-5.43a15.36,15.36,0,0,0,3.46-2l5.11,2.06a1,1,0,0,0,1.25-.44l4.1-7.11a1,1,0,0,0-.25-1.31ZM24,31.18A7.18,7.18,0,1,1,31.17,24,7.17,7.17,0,0,1,24,31.18Z" />
  </svg>
);

export const HelpIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.94 19.2C12.36 19.2 12.7152 19.0548 13.0056 18.7644C13.296 18.474 13.4408 18.1192 13.44 17.7C13.44 17.28 13.2952 16.9248 13.0056 16.6344C12.716 16.344 12.3608 16.1992 11.94 16.2C11.52 16.2 11.1652 16.3452 10.8756 16.6356C10.586 16.926 10.4408 17.2808 10.44 17.7C10.44 18.12 10.5852 18.4752 10.8756 18.7656C11.166 19.056 11.5208 19.2008 11.94 19.2ZM10.86 14.58H13.08C13.08 13.92 13.1552 13.4 13.3056 13.02C13.456 12.64 13.8808 12.12 14.58 11.46C15.1 10.94 15.51 10.4448 15.81 9.9744C16.11 9.504 16.26 8.9392 16.26 8.28C16.26 7.16 15.85 6.3 15.03 5.7C14.21 5.1 13.24 4.8 12.12 4.8C10.98 4.8 10.0548 5.1 9.3444 5.7C8.634 6.3 8.1392 7.02 7.86 7.86L9.84 8.64C9.94 8.28 10.1652 7.89 10.5156 7.47C10.866 7.05 11.4008 6.84 12.12 6.84C12.76 6.84 13.24 7.0152 13.56 7.3656C13.88 7.716 14.04 8.1008 14.04 8.52C14.04 8.92 13.92 9.2952 13.68 9.6456C13.44 9.996 13.14 10.3208 12.78 10.62C11.9 11.4 11.36 11.99 11.16 12.39C10.96 12.79 10.86 13.52 10.86 14.58ZM12 24C10.34 24 8.78 23.6848 7.32 23.0544C5.86 22.424 4.59 21.5692 3.51 20.49C2.43 19.41 1.5752 18.14 0.9456 16.68C0.316 15.22 0.0008 13.66 0 12C0 10.34 0.3152 8.78 0.9456 7.32C1.576 5.86 2.4308 4.59 3.51 3.51C4.59 2.43 5.86 1.5752 7.32 0.9456C8.78 0.316 10.34 0.0008 12 0C13.66 0 15.22 0.3152 16.68 0.9456C18.14 1.576 19.41 2.4308 20.49 3.51C21.57 4.59 22.4252 5.86 23.0556 7.32C23.686 8.78 24.0008 10.34 24 12C24 13.66 23.6848 15.22 23.0544 16.68C22.424 18.14 21.5692 19.41 20.49 20.49C19.41 21.57 18.14 22.4252 16.68 23.0556C15.22 23.686 13.66 24.0008 12 24Z"
      fill="white"
    />
  </svg>
);

export const LogoutIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.6667 6.66667L16.8 8.53333L18.9333 10.6667H8V13.3333H18.9333L16.8 15.4667L18.6667 17.3333L24 12L18.6667 6.66667ZM2.66667 2.66667H12V0H2.66667C1.2 0 0 1.2 0 2.66667V21.3333C0 22.8 1.2 24 2.66667 24H12V21.3333H2.66667V2.66667Z"
      fill="white"
    />
  </svg>
);

export const HandIcon = () => (
  <svg
    width="43"
    height="41"
    viewBox="0 0 43 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.97058 32.1806C9.61701 32.1099 9.33416 32.0392 8.98059 31.8978C8.62703 31.7564 8.34417 31.6856 8.06132 31.5442C7.4249 31.2614 6.85919 30.9078 6.29349 30.4835C5.16207 29.7057 4.2428 28.645 3.53567 27.3721C2.82853 26.17 2.40425 24.7557 2.33354 23.4122C2.26283 22.7051 2.33354 22.0686 2.40425 21.3615C2.47497 21.0079 2.54568 20.7251 2.61639 20.3715C2.68711 20.0179 2.82853 19.7351 2.89925 19.3815L2.96996 20.3715C2.96996 20.7251 3.04067 21.0079 3.11139 21.3615C3.1821 21.9979 3.32353 22.6343 3.46495 23.2C3.74781 24.4022 4.17209 25.5336 4.80851 26.5943C5.44493 27.655 6.15206 28.645 7.07133 29.5642C7.49561 29.9885 7.99061 30.4128 8.4856 30.8371C8.69774 31.0492 8.98059 31.2614 9.26345 31.4735L9.97058 32.1806ZM9.75844 34.7263C9.5463 34.8677 9.26345 34.9385 8.98059 35.0092C8.69774 35.0799 8.4856 35.1506 8.20275 35.1506C7.70775 35.2213 7.14205 35.292 6.57634 35.2213C5.51564 35.1506 4.38423 34.8677 3.46495 34.3728C2.47497 33.8778 1.62641 33.0999 1.0607 32.1806C0.777847 31.7564 0.494993 31.2614 0.282853 30.7664C0.21214 30.5542 0.141427 30.2714 0.0707133 29.9885C0.0707133 29.7764 0 29.5642 0 29.2814C0.21214 29.4935 0.353567 29.7057 0.494993 29.8471C0.707133 30.0592 0.84856 30.2714 0.989987 30.4128C1.34355 30.7664 1.62641 31.1199 1.97997 31.4028C2.68711 32.0392 3.39424 32.6049 4.2428 33.0292C5.02065 33.4535 5.93992 33.807 6.78848 34.0899C7.21276 34.2313 7.70775 34.302 8.20275 34.4435C8.41489 34.5142 8.69774 34.5142 8.90988 34.5849C9.26345 34.6556 9.47559 34.6556 9.75844 34.7263ZM25.7397 0.359636C26.0932 0.430349 26.3761 0.571776 26.7296 0.713202C27.0832 0.854629 27.3661 0.996056 27.6489 1.13748C28.2853 1.49105 28.851 1.84462 29.4167 2.2689C30.5482 3.11746 31.4674 4.24887 32.1039 5.52171C32.7403 6.79455 33.0938 8.20882 33.0938 9.55237C33.0938 10.2595 33.0231 10.8959 32.8817 11.6031C32.811 11.9566 32.7403 12.2395 32.5988 12.593C32.4574 12.9466 32.3867 13.2295 32.2453 13.5123L32.1746 12.5223C32.1746 12.1688 32.1746 11.8859 32.1039 11.5323L31.8917 9.62308C31.6796 8.42096 31.2553 7.21883 30.6896 6.08742C30.1239 4.956 29.4167 3.96602 28.5682 3.04674C28.1439 2.55175 27.6489 2.12747 27.2246 1.63248C27.0125 1.42034 26.7296 1.2082 26.4468 0.996056L25.7397 0.359636ZM31.8917 0.0767822C32.1746 0.147496 32.3867 0.218209 32.5988 0.359636C32.811 0.430349 33.0938 0.571776 33.306 0.713202C33.7303 0.996056 34.1545 1.27891 34.5788 1.63248C35.3567 2.33961 35.9931 3.18817 36.3467 4.17816C36.7709 5.16814 36.9124 6.22884 36.7709 7.28954C36.7002 7.78454 36.5588 8.27953 36.4174 8.77452C36.3467 8.98666 36.2052 9.26952 36.1345 9.48166C35.9931 9.6938 35.9224 9.90594 35.7102 10.1181V9.41094V8.70381C35.7102 8.20882 35.6395 7.78454 35.6395 7.36026C35.4981 6.44098 35.3567 5.59242 35.0031 4.81458C34.6495 3.96602 34.2253 3.25888 33.7303 2.48104C33.4474 2.12747 33.1646 1.70319 32.8817 1.34962C32.7403 1.13748 32.5988 0.996056 32.3867 0.783916C32.2453 0.430349 32.0331 0.218209 31.8917 0.0767822Z"
      fill="#42ADE2"
    />
    <path
      d="M5.65709 10.6131C4.24282 11.2495 3.74783 12.9466 4.38425 14.3609L13.2941 32.9585L18.2441 30.6249L9.33418 11.9566C8.69776 10.5423 7.07135 9.90592 5.65709 10.6131ZM29.0632 25.3921L34.296 22.9172L24.1133 1.70317C23.4061 0.288908 21.709 -0.347512 20.224 0.359621C18.8098 1.06675 18.1733 2.76387 18.8805 4.24885L29.0632 25.3921Z"
      fill="#FFDD67"
    />
    <path
      d="M20.2949 0.28888C20.1535 0.359594 20.012 0.430307 19.8706 0.571733C21.2142 0.218167 22.6284 0.854587 23.2648 2.12743L33.4476 23.3414L34.3668 22.9172L24.1841 1.70315C23.477 0.218167 21.7799 -0.418253 20.2949 0.28888Z"
      fill="#EBA352"
    />
    <path
      d="M18.2438 30.5542L23.6887 27.9378L13.2939 6.2995C12.5867 4.81452 10.7482 4.10739 9.26321 4.81452C7.77823 5.52165 7.14181 7.3602 7.84894 8.84518L18.2438 30.5542Z"
      fill="#FFDD67"
    />
    <path
      d="M9.26364 4.88529C9.12221 4.956 8.98078 5.02672 8.83936 5.16814C10.1829 4.81458 11.7386 5.451 12.375 6.79455L18.8099 20.3008L20.3656 21.2201L13.2943 6.37027C12.5872 4.81458 10.8193 4.17816 9.26364 4.88529Z"
      fill="#EBA352"
    />
    <path
      d="M22.8405 26.2407L28.2854 23.6243L17.8905 1.98599C17.1834 0.501011 15.3449 -0.206123 13.8599 0.571724C12.3749 1.27886 11.7385 3.1174 12.4456 4.60238L22.8405 26.2407Z"
      fill="#FFDD67"
    />
    <path
      d="M13.8599 0.501013C13.7185 0.571727 13.5771 0.713153 13.4357 0.783866C14.7792 0.4303 16.3349 1.06672 16.9713 2.41027L24.2548 17.6844L25.8105 18.6036L17.8906 1.98599C17.1835 0.4303 15.3449 -0.20612 13.8599 0.501013ZM5.65719 10.613C5.51576 10.6837 5.37434 10.7544 5.23291 10.8959C6.50575 10.5423 7.8493 11.1787 8.41501 12.4516L13.7185 23.5536L15.2742 24.4728L9.33428 12.0273C8.69786 10.5423 7.07146 9.90589 5.65719 10.613Z"
      fill="#EBA352"
    />
    <path
      d="M41.5794 8.49169C39.6701 7.00671 36.5587 8.63312 35.003 13.7245C33.9423 17.2601 33.8009 18.3208 31.5381 19.3815L30.2652 16.7652C30.2652 16.7652 10.1827 26.4529 10.9605 28.0086C10.9605 28.0086 13.3648 35.5042 17.4661 38.9691C23.5475 44.2019 37.7609 38.6156 38.3973 25.1093C38.7508 17.2601 43.6301 10.1181 41.5794 8.49169Z"
      fill="#FFDD67"
    />
    <path
      d="M41.5795 8.49158C41.2259 8.20872 40.8016 8.0673 40.3773 7.99658C40.4481 8.0673 40.5895 8.0673 40.6602 8.13801C42.7816 9.76442 40.5895 13.5122 39.3874 16.9065C38.3974 19.5936 37.5488 22.3514 37.6902 25.0385C38.2559 36.7769 26.4468 42.3633 19.3755 40.2419C26.3054 43.1411 39.1752 37.6255 38.6095 25.3921C38.4681 22.705 39.2459 20.0886 40.3066 17.26C41.438 13.8658 43.6302 10.118 41.5795 8.49158Z"
      fill="#EBA352"
    />
    <path
      d="M32.1748 19.0985C27.7905 19.5935 21.3556 25.887 25.8813 32.7462C22.5578 25.8163 28.0027 21.1492 31.4676 19.5228C31.8212 19.2399 32.1748 19.0985 32.1748 19.0985Z"
      fill="#EBA352"
    />
  </svg>
);

export const AddPersonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
    <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
  </svg>
);

export const PlusIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.0595 6.19048H6.19048V10.0595C6.19048 10.2648 6.10895 10.4616 5.96383 10.6067C5.81871 10.7518 5.62189 10.8333 5.41667 10.8333C5.21144 10.8333 5.01462 10.7518 4.8695 10.6067C4.72438 10.4616 4.64286 10.2648 4.64286 10.0595V6.19048H0.773809C0.568582 6.19048 0.371761 6.10895 0.226644 5.96383C0.0815263 5.81872 0 5.62189 0 5.41667C0 5.21144 0.0815263 5.01462 0.226644 4.8695C0.371761 4.72438 0.568582 4.64286 0.773809 4.64286H4.64286V0.77381C4.64286 0.568582 4.72438 0.371761 4.8695 0.226643C5.01462 0.0815259 5.21144 0 5.41667 0C5.62189 0 5.81871 0.0815259 5.96383 0.226643C6.10895 0.371761 6.19048 0.568582 6.19048 0.77381V4.64286H10.0595C10.2648 4.64286 10.4616 4.72438 10.6067 4.8695C10.7518 5.01462 10.8333 5.21144 10.8333 5.41667C10.8333 5.62189 10.7518 5.81872 10.6067 5.96383C10.4616 6.10895 10.2648 6.19048 10.0595 6.19048Z"
      fill="#F24E1E"
    />
  </svg>
);

export const TaskPendingIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 29 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.8511 26.2698L22.4285 25.4499V22.6013C22.4285 22.5211 22.3965 22.4442 22.3397 22.3875C22.2829 22.3308 22.2059 22.299 22.1255 22.299C22.0452 22.299 21.9681 22.3308 21.9113 22.3875C21.8545 22.4442 21.8226 22.5211 21.8226 22.6013V25.6246C21.8226 25.6777 21.8366 25.7298 21.8631 25.7758C21.8897 25.8218 21.928 25.8599 21.974 25.8865L23.5482 26.7935C23.5825 26.8135 23.6205 26.8266 23.66 26.8319C23.6994 26.8372 23.7395 26.8346 23.778 26.8243C23.8164 26.814 23.8524 26.7962 23.8839 26.7719C23.9154 26.7476 23.9418 26.7173 23.9614 26.6828C24.0016 26.6134 24.0126 26.531 23.9919 26.4535C23.9713 26.3761 23.9206 26.31 23.8511 26.2698ZM22.1255 19.578C18.7791 19.578 16.0664 22.2851 16.0664 25.6246C16.0664 28.9642 18.7791 31.6713 22.1255 31.6713C25.4701 31.6676 28.181 28.9624 28.1846 25.6246C28.1846 22.2851 25.4719 19.578 22.1255 19.578ZM22.1255 31.0666C21.4094 31.0666 20.7003 30.9259 20.0387 30.6524C19.3771 30.3789 18.7759 29.978 18.2695 29.4727C17.7631 28.9674 17.3615 28.3674 17.0874 27.7072C16.8134 27.0469 16.6723 26.3393 16.6723 25.6246C16.6723 24.91 16.8134 24.2023 17.0874 23.5421C17.3615 22.8818 17.7631 22.2819 18.2695 21.7766C18.7759 21.2712 19.3771 20.8704 20.0387 20.5969C20.7003 20.3234 21.4094 20.1827 22.1255 20.1827C23.5713 20.1843 24.9574 20.7581 25.9797 21.7784C27.0021 22.7986 27.5771 24.1818 27.5787 25.6246C27.5787 27.0679 27.0042 28.4521 25.9815 29.4727C24.9588 30.4933 23.5718 31.0666 22.1255 31.0666Z"
      fill="#888888"
      stroke="#A1A3AB"
    />
    <path
      d="M15.8909 2.39129H13.5073V1.59419C13.506 1.17178 13.3382 0.767019 13.0404 0.468322C12.7427 0.169626 12.3392 0.00126159 11.9182 0H5.56182C5.14075 0.00126159 4.73729 0.169626 4.43955 0.468322C4.14181 0.767019 3.97398 1.17178 3.97273 1.59419V2.39129H1.58909C1.16802 2.39255 0.764563 2.56092 0.466823 2.85961C0.169083 3.15831 0.00125755 3.56307 0 3.98549V20.7245C0.00125755 21.1469 0.169083 21.5517 0.466823 21.8504C0.764563 22.1491 1.16802 22.3175 1.58909 22.3187H8.74V20.7245H1.58909V3.98549H3.97273V6.37678H13.5073V3.98549H15.8909V12.7536H17.48V3.98549C17.4787 3.56307 17.3109 3.15831 17.0132 2.85961C16.7154 2.56092 16.312 2.39255 15.8909 2.39129ZM11.9182 4.78258H5.56182V1.59419H11.9182V4.78258Z"
      fill="#A1A3AB"
    />
  </svg>
);

export const TaskStatusIcon = () => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.64 20.0776L13.2572 17.669L11.96 18.9802L15.64 22.7L23 15.2604L21.7028 13.9492L15.64 20.0776Z"
      fill="#A1A3AB"
    />
    <path
      d="M15.8909 2.39129H13.5073V1.59419C13.506 1.17178 13.3382 0.767019 13.0404 0.468322C12.7427 0.169626 12.3392 0.00126159 11.9182 0H5.56182C5.14075 0.00126159 4.73729 0.169626 4.43955 0.468322C4.14181 0.767019 3.97398 1.17178 3.97273 1.59419V2.39129H1.58909C1.16802 2.39255 0.764563 2.56092 0.466823 2.85961C0.169083 3.15831 0.00125755 3.56307 0 3.98549V20.7245C0.00125755 21.1469 0.169083 21.5517 0.466823 21.8504C0.764563 22.1491 1.16802 22.3175 1.58909 22.3187H8.74V20.7245H1.58909V3.98549H3.97273V6.37678H13.5073V3.98549H15.8909V12.7536H17.48V3.98549C17.4787 3.56307 17.3109 3.15831 17.0132 2.85961C16.7154 2.56092 16.312 2.39255 15.8909 2.39129ZM11.9182 4.78258H5.56182V1.59419H11.9182V4.78258Z"
      fill="#A1A3AB"
    />
  </svg>
);

export const TaskCompletedIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 21 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.33333 24H18.6667C19.9535 24 21 22.9236 21 21.6V3.6C21 2.2764 19.9535 1.2 18.6667 1.2H16.3333C16.3333 0.88174 16.2104 0.576515 15.9916 0.351472C15.7728 0.126428 15.4761 0 15.1667 0H5.83333C5.52391 0 5.22717 0.126428 5.00838 0.351472C4.78958 0.576515 4.66667 0.88174 4.66667 1.2H2.33333C1.0465 1.2 0 2.2764 0 3.6V21.6C0 22.9236 1.0465 24 2.33333 24ZM2.33333 3.6H4.66667V6H16.3333V3.6H18.6667V21.6H2.33333V3.6Z"
      fill="#A1A3AB"
    />
    <path
      d="M9.68093 14.1479L7.62296 11.7144L6 13.6335L9.68093 17.9861L15.6574 10.9191L14.0345 9L9.68093 14.1479Z"
      fill="#A1A3AB"
    />
  </svg>
);

export const BellIcon = () => (
  <svg
    width="15"
    height="16"
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.3704 15.4889C10.3704 15.6068 10.3246 15.7199 10.2432 15.8032C10.1618 15.8866 10.0514 15.9334 9.93627 15.9334H5.30585C5.19072 15.9334 5.0803 15.8866 4.99889 15.8032C4.91748 15.7199 4.87175 15.6068 4.87175 15.4889C4.87175 15.3711 4.91748 15.258 4.99889 15.1747C5.0803 15.0913 5.19072 15.0445 5.30585 15.0445H9.93627C10.0514 15.0445 10.1618 15.0913 10.2432 15.1747C10.3246 15.258 10.3704 15.3711 10.3704 15.4889ZM14.2852 13.0445C14.1975 13.2027 14.0701 13.3342 13.9162 13.4253C13.7624 13.5165 13.5876 13.564 13.4098 13.563H1.83304C1.65499 13.5626 1.48019 13.5142 1.32625 13.4226C1.1723 13.331 1.04466 13.1995 0.956185 13.0413C0.867707 12.8831 0.821519 12.7039 0.822275 12.5216C0.823031 12.3393 0.870704 12.1604 0.960491 12.003C1.36927 11.2815 1.97774 9.24745 1.97774 6.60004C1.97774 5.06768 2.5723 3.59808 3.63063 2.51454C4.68896 1.43099 6.12436 0.822266 7.62106 0.822266C9.11776 0.822266 10.5532 1.43099 11.6115 2.51454C12.6698 3.59808 13.2644 5.06768 13.2644 6.60004C13.2644 9.24671 13.8736 11.2815 14.2831 12.003C14.3738 12.1607 14.4219 12.3404 14.4223 12.5234C14.4226 12.7065 14.3753 12.8864 14.2852 13.0445ZM13.5321 12.4519C12.9844 11.4889 12.3962 9.24301 12.3962 6.60004C12.3962 5.30343 11.8931 4.05992 10.9976 3.14308C10.1021 2.22623 8.8875 1.71115 7.62106 1.71115C6.35462 1.71115 5.14005 2.22623 4.24454 3.14308C3.34903 4.05992 2.84594 5.30343 2.84594 6.60004C2.84594 9.24375 2.25701 11.4889 1.70932 12.4519C1.69662 12.4744 1.68993 12.5 1.68993 12.526C1.68993 12.552 1.69662 12.5775 1.70932 12.6C1.72123 12.6227 1.739 12.6416 1.76069 12.6547C1.78238 12.6678 1.80715 12.6745 1.83231 12.6741H13.4091C13.4342 12.6745 13.459 12.6678 13.4807 12.6547C13.5024 12.6416 13.5202 12.6227 13.5321 12.6C13.5448 12.5775 13.5515 12.552 13.5515 12.526C13.5515 12.5 13.5448 12.4744 13.5321 12.4519Z"
      fill="white"
    />
  </svg>
);

export const CalendarIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.3276 2.09458L9.92466 2.09459V1.24737C9.92466 1.0125 9.73447 0.822266 9.49966 0.822266C9.26485 0.822266 9.07466 1.0125 9.07466 1.24737V2.09438H5.67466V1.24737C5.67466 1.0125 5.48447 0.822266 5.24966 0.822266C5.01485 0.822266 4.82466 1.0125 4.82466 1.24737V2.09438H1.42764C0.958224 2.09438 0.577637 2.47505 0.577637 2.94458V13.5721C0.577637 14.0416 0.958224 14.4223 1.42764 14.4223H13.3276C13.797 14.4223 14.1776 14.0416 14.1776 13.5721V2.94458C14.1776 2.47525 13.797 2.09458 13.3276 2.09458ZM13.3276 13.5721H1.42764V2.94458H4.82466V3.37286C4.82466 3.60772 5.01485 3.79796 5.24966 3.79796C5.48447 3.79796 5.67466 3.60772 5.67466 3.37286V2.94479H9.07466V3.37308C9.07466 3.60794 9.26485 3.79818 9.49966 3.79818C9.73447 3.79818 9.92466 3.60794 9.92466 3.37308V2.94479H13.3276V13.5721ZM10.3526 7.62087H11.2026C11.4372 7.62087 11.6276 7.43043 11.6276 7.19577V6.34557C11.6276 6.11092 11.4372 5.92047 11.2026 5.92047H10.3526C10.118 5.92047 9.92764 6.11092 9.92764 6.34557V7.19577C9.92764 7.43043 10.118 7.62087 10.3526 7.62087ZM10.3526 11.0215H11.2026C11.4372 11.0215 11.6276 10.8312 11.6276 10.5964V9.74616C11.6276 9.5115 11.4372 9.32106 11.2026 9.32106H10.3526C10.118 9.32106 9.92764 9.5115 9.92764 9.74616V10.5964C9.92764 10.8314 10.118 11.0215 10.3526 11.0215ZM7.80264 9.32106H6.95264C6.71804 9.32106 6.52764 9.5115 6.52764 9.74616V10.5964C6.52764 10.8312 6.71804 11.0215 6.95264 11.0215H7.80264C8.03724 11.0215 8.22764 10.8312 8.22764 10.5964V9.74616C8.22764 9.51171 8.03724 9.32106 7.80264 9.32106ZM7.80264 5.92047H6.95264C6.71804 5.92047 6.52764 6.11092 6.52764 6.34557V7.19577C6.52764 7.43043 6.71804 7.62087 6.95264 7.62087H7.80264C8.03724 7.62087 8.22764 7.43043 8.22764 7.19577V6.34557C8.22764 6.1107 8.03724 5.92047 7.80264 5.92047ZM4.40264 5.92047H3.55264C3.31804 5.92047 3.12764 6.11092 3.12764 6.34557V7.19577C3.12764 7.43043 3.31804 7.62087 3.55264 7.62087H4.40264C4.63724 7.62087 4.82764 7.43043 4.82764 7.19577V6.34557C4.82764 6.1107 4.63724 5.92047 4.40264 5.92047ZM4.40264 9.32106H3.55264C3.31804 9.32106 3.12764 9.5115 3.12764 9.74616V10.5964C3.12764 10.8312 3.31804 11.0215 3.55264 11.0215H4.40264C4.63724 11.0215 4.82764 10.8312 4.82764 10.5964V9.74616C4.82764 9.51171 4.63724 9.32106 4.40264 9.32106Z"
      fill="#F8F8FB"
    />
  </svg>
);

export const LoopIcon = () => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.65349 0.712191C5.57196 0.790068 4.52474 1.12545 3.59919 1.69037C2.67365 2.25528 1.89661 3.03334 1.33292 3.95963C0.769235 4.88593 0.435234 5.93359 0.358787 7.01522C0.282339 8.09685 0.465663 9.18107 0.893464 10.1774C1.32126 11.1738 1.98114 12.0534 2.81802 12.7429C3.65491 13.4324 4.64455 13.9117 5.70437 14.141C6.76419 14.3702 7.86346 14.3426 8.91047 14.0606C9.95748 13.7786 10.9219 13.2503 11.7232 12.5197L14.8468 15.2242C15.0078 15.3588 15.2151 15.4247 15.4242 15.4078C15.6333 15.391 15.8274 15.2926 15.9647 15.1341C16.102 14.9755 16.1715 14.7693 16.1583 14.56C16.1451 14.3506 16.0501 14.1548 15.894 14.0148L12.7703 11.3103C13.4867 10.2535 13.8912 9.01631 13.9373 7.74037C13.9834 6.46443 13.6694 5.20128 13.0312 4.09547C12.393 2.98967 11.4563 2.08588 10.3284 1.48755C9.20052 0.88922 7.92696 0.620516 6.65349 0.712191ZM1.95468 7.8677C1.85575 6.49212 2.30732 5.13359 3.21004 4.09096C4.11276 3.04833 5.39269 2.407 6.76826 2.30807C8.14384 2.20914 9.50237 2.6607 10.545 3.56342C11.5876 4.46614 12.229 5.74608 12.3279 7.12165C12.4268 8.49722 11.9753 9.85575 11.0725 10.8984C10.1698 11.941 8.88988 12.5823 7.51431 12.6813C6.13874 12.7802 4.78021 12.3286 3.73757 11.4259C2.69494 10.5232 2.05362 9.24327 1.95468 7.8677Z"
      fill="white"
    />
  </svg>
);

export const NoteEditIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 0.949786C13.296 0.949786 14.496 1.35979 15.477 2.05979L6.343 11.1928C6.24749 11.285 6.17131 11.3954 6.1189 11.5174C6.06649 11.6394 6.0389 11.7706 6.03775 11.9034C6.0366 12.0362 6.0619 12.1678 6.11218 12.2907C6.16246 12.4136 6.23671 12.5253 6.3306 12.6192C6.4245 12.7131 6.53615 12.7873 6.65905 12.8376C6.78194 12.8879 6.91362 12.9132 7.0464 12.912C7.17918 12.9109 7.3104 12.8833 7.4324 12.8309C7.55441 12.7785 7.66475 12.7023 7.757 12.6068L16.891 3.47279C17.6141 4.48782 18.0019 5.70351 18 6.94979V16.9498C18 17.4802 17.7893 17.9889 17.4142 18.364C17.0391 18.7391 16.5304 18.9498 16 18.9498H2C1.46957 18.9498 0.960859 18.7391 0.585786 18.364C0.210714 17.9889 0 17.4802 0 16.9498V2.94979C0 2.41935 0.210714 1.91065 0.585786 1.53557C0.960859 1.1605 1.46957 0.949786 2 0.949786H12ZM18.657 0.292786C18.8445 0.480314 18.9498 0.734622 18.9498 0.999786C18.9498 1.26495 18.8445 1.51926 18.657 1.70679L16.89 3.47279C16.5006 2.9261 16.0227 2.44821 15.476 2.05879L17.242 0.292786C17.4295 0.105315 17.6838 0 17.949 0C18.2142 0 18.4695 0.105315 18.657 0.292786Z"
      fill="white"
    />
  </svg>
);

export const TrashIcon = () => (
  <svg
    width="14"
    height="18"
    viewBox="0 0 14 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V6C13 4.9 12.1 4 11 4H3C1.9 4 1 4.9 1 6V16ZM13 1H10.5L9.79 0.29C9.61 0.11 9.35 0 9.09 0H4.91C4.65 0 4.39 0.11 4.21 0.29L3.5 1H1C0.45 1 0 1.45 0 2C0 2.55 0.45 3 1 3H13C13.55 3 14 2.55 14 2C14 1.45 13.55 1 13 1Z"
      fill="white"
    />
  </svg>
);

export const ArrowDownIcon = () => (
  <svg
    width="13"
    height="8"
    viewBox="0 0 13 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1L6.5 6L12 1" stroke="black" stroke-width="2" />
  </svg>
);

// --- Main Application Data ---

export const USER_DATA = {
  name: "Sundar Gurung",
  email: "sundargurung360@gmail.com",
  avatarImage: userAvatarImage,
};

export const SIDEBAR_NAV_ITEMS = [
  {
    id: "dashboard",
    text: "Dashboard",
    path: "/dashboard",
    icon: DashboardIcon,
  },
  {
    id: "vital-task",
    text: "Vital Task",
    path: "/vital-task",
    icon: VitalTaskIcon,
  },
  {
    id: "my-task",
    text: "My Task",
    path: "/my-task",
    icon: CheckboxIcon,
  },
  {
    id: "task-categories",
    text: "Task Categories",
    path: "/categories",
    icon: CategoriesIcon,
  },
  {
    id: "settings",
    text: "Settings",
    path: "/settings",
    icon: SettingsIcon,
  },
  {
    id: "help",
    text: "Help",
    path: "/help",
    icon: HelpIcon,
  },
];

export const LOGOUT_ITEM = {
  id: "logout",
  text: "Logout",
  path: "/logout",
  icon: LogoutIcon,
};

export const ROUTES = [
  { path: "/", element: <Dashboard /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/vital-task", element: <VitalTask /> },
  { path: "/my-task", element: <MyTask /> },
  { path: "/categories", element: <Categories /> },
  { path: "/settings", element: <Settings /> },
  { path: "/help", element: <Help /> },
  { path: "/logout", element: <Logout /> },
  { path: "/*", element: <Error /> },
];

export const USERS = [
  {
    id: 1,
    image: user1,
  },
  {
    id: 2,
    image: user2,
  },
  {
    id: 3,
    image: user3,
  },
  {
    id: 4,
    image: user4,
  },
  {
    id: 5,
    image: user5,
  },
];

export const TASK_DATA_GROUPS = {
  todoList: [
    {
      id: "t-001",
      title: "Attend Nischal’s Birthday Party",
      description:
        "Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....",
      priority: "Moderate",
      status: "Not Started",
      creationDate: "20/06/2023",
      image: taskItemImage1,
      imageAlt: "People raising a toast at a birthday party.",
    },
    {
      id: "t-002",
      title: "Landing Page Design for TravelDays",
      description:
        "Get the work done by EOD and discuss with client before leaving. (4 PM | Meeting Room)",
      priority: "Moderate",
      status: "In Progress",
      creationDate: "20/06/2023",
      image: taskItemImage2,
      imageAlt: "A laptop displaying web design on a desk.",
    },
  ],

  completedList: [
    {
      id: "t-003",
      title: "Walk the dog",
      description: "Take the dog to the park and bring treats as well.",
      priority: "High",
      status: "Completed",
      creationDate: "2 days ago",
      image: taskItemImage3,
      imageAlt: "A cocker spaniel puppy on a leash.",
    },
    {
      id: "t-004",
      title: "Conduct meeting",
      description: "Meet with the client and finalize requirements.",
      priority: "High",
      status: "Completed",
      creationDate: "2 days ago",
      image: taskItemImage4,
      imageAlt: "People in a business meeting.",
    },
  ],

  otherList: [
    {
      id: "t-005",
      title: "Presentation on Final Product",
      description:
        "Make sure everything is functioning and all the necessities are properly met. Prepare the team and get the documents ready for...",
      priority: "Moderate",
      status: "In Progress",
      creationDate: "19/06/2023",
      image: taskItemImage4,
      imageAlt: "A group of people working together at a table.",
    },
  ],

  vitalTasksList: [
    {
      id: "t-006",
      title: "Walk the dog",
      description: "Take the dog to the park and bring treats as well.",
      priority: "Extreme",
      status: "Not Started",
      creationDate: "20/06/2023",
      image: taskItemImage3,
      imageAlt: "A cocker spaniel puppy on a leash.",
      isSelected: true,
    },
    {
      id: "t-007",
      title: "Take grandma to hospital",
      description: "Go back home and take grandma to the hosp....",
      priority: "Moderate",
      status: "In Progress",
      creationDate: "20/06/2023",
      image: taskItemImage5,
      imageAlt: "Two people in a hospital looking at each other",
    },
  ],

  myTasks: [
    {
      id: "t-008",
      title: "Submit Documents",
      description: "Make sure to submit all the necessary docum.....",
      priority: "Extreme",
      status: "Not Started",
      creationDate: "20/06/2023",
      image: taskItemImage6,
      imageAlt: "Files placed on a table.",
      isSelected: true,
    },
    {
      id: "t-009",
      title: "Complete assignments",
      description: "The assignments must be completed to pass final year....",
      priority: "Moderate",
      status: "In Progress",
      creationDate: "20/06/2023",
      image: taskItemImage7,
      imageAlt: "Person woking with a laptop on a table.",
    },
  ],
};

export const CHART_DATA = [
  { percentage: 84, label: "Completed", status: "completed" },
  { percentage: 46, label: "In Progress", status: "progress" },
  { percentage: 13, label: "Not Started", status: "not-started" },
];

export const MOCK_TASK_DATA = {
  vitalTask: [
    {
      title: "Walk the dog",
      image: "public/images/task-item/3.png",
      priority: "Extreme",
      status: "Not Started",
      created: "20/06/2023",
      notes: [
        "Take the dog to the park and bring treats as well.",
        "Take Luffy and Jiro for a leisurely stroll around the neighborhood. Enjoy the fresh air and give them the exercise and mental stimulation they need for a happy and healthy day. Don't forget to bring along squeaky and fluffy for some extra fun along the way!",
      ],
      checklist: [
        "Listen to a podcast or audiobook",
        "Practice mindfulness or meditation",
        "Take photos of interesting sights along the way",
        "Practice obedience training with your dog",
        "Chat with neighbors or other dog walkers",
        "Listen to music or an upbeat playlist",
      ],
    },
    {
      title: "Submit Documents",
      image: "public/images/task-item/6.png",
      priority: "Extreme",
      status: "Not Started",
      created: "20/06/2023",
      notes: [
        "Take the dog to the park and bring treats as well.",
        "Take Luffy and Jiro for a leisurely stroll around the neighborhood. Enjoy the fresh air and give them the exercise and mental stimulation they need for a happy and healthy day. Don't forget to bring along squeaky and fluffy for some extra fun along the way!",
      ],
      checklist: [
        "Listen to a podcast or audiobook",
        "Practice mindfulness or meditation",
        "Take photos of interesting sights along the way",
        "Practice obedience training with your dog",
        "Chat with neighbors or other dog walkers",
        "Listen to music or an upbeat playlist",
      ],
    },
  ],
  myTasks: {
    title: "Submit Documents",
    image: "public/images/task-item/6.png",
    priority: "Extreme",
    status: "Not Started",
    created: "20/06/2023",
    sections: [
      { title: "Task Title", text: "Document Submission." },
      {
        title: "Objective",
        text: "To submit required documents for something important",
      },
      {
        title: "Task Description",
        text: "Review the list of documents required for submission and ensure all necessary documents are ready. Organize the documents accordingly and scan them if physical copies need to be submitted digitally. Rename the scanned files appropriately for easy identification and verify the accepted file formats. Upload the documents securely to the designated platform, double-check for accuracy, and obtain confirmation of successful submission. Follow up if necessary to ensure proper processing.",
      },
      {
        title: "Additional Notes",
        bulletPoints: [
          "Ensure that the documents are authentic and up-to-date.",
          "Maintain confidentiality and security of sensitive information during the submission process.",
          "If there are specific guidelines or deadlines for submission, adhere to them diligently.",
        ],
      },
      {
        title: "Deadline for Submission",
        text: "End of Day",
      },
    ],
  },
};

export const MEMBERS_DATA = [
  {
    id: "user-001",
    name: "Upashna Gurung",
    email: "uppaeygrg332@gmail.com",
    avatarImage: membersImage1,
    currentRole: "Can edit",
  },
  {
    id: "user-002",
    name: "Jeremy Lee",
    email: "jerrylee1996@gmail.com",
    avatarImage: membersImage2,
    currentRole: "Can edit",
  },
  {
    id: "user-003",
    name: "Thomas Park",
    email: "parktho123@gmail.com",
    avatarImage: membersImage3,
    currentRole: "Owner",
  },
  {
    id: "user-004",
    name: "Rachel Takahashi",
    email: "takahasirae32@gmail.com",
    avatarImage: membersImage4,
    currentRole: "Can edit",
  },
];
