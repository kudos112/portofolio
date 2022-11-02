import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
          <li className="software-skill-inline" name={"Redux Toolkit"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <g fill="currentColor">
                <path d="M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z" />
                <path d="M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z" />
                <path d="M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z" />
              </g>
            </svg>
            <p>{"Redux Toolkit"}</p>
          </li>
          <li className="software-skill-inline" name={"MongoDB"}>
            <svg
              width="100"
              height="60"
              viewBox="0 0 1102 278"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M82.3229 28.6444C71.5367 15.8469 62.2485 2.84945 60.351 0.149971C60.1512 -0.0499903 59.8515 -0.0499903 59.6518 0.149971C57.7542 2.84945 48.4661 15.8469 37.6798 28.6444C-54.9019 146.721 52.2613 226.406 52.2613 226.406L53.1601 227.006C53.959 239.303 55.9565 257 55.9565 257H59.9514H63.9463C63.9463 257 65.9438 239.403 66.7428 227.006L67.6416 226.306C67.7414 226.406 174.905 146.721 82.3229 28.6444ZM59.9514 224.606C59.9514 224.606 55.1576 220.507 53.8592 218.408V218.207L59.6518 89.6326C59.6518 89.2326 60.2511 89.2326 60.2511 89.6326L66.0436 218.207V218.408C64.7453 220.507 59.9514 224.606 59.9514 224.606Z"
                fill="currentColor"
              />
              <path
                d="M260.501 198.369L215.845 89.3012L215.745 89H181.001V96.3314H186.608C188.31 96.3314 189.912 97.0344 191.114 98.2396C192.315 99.4447 192.916 101.052 192.916 102.759L191.915 212.53C191.915 215.944 189.112 218.756 185.707 218.857L180 218.957V226.188H213.843V218.957L210.338 218.857C206.934 218.756 204.13 215.944 204.13 212.53V109.086L252.792 226.188C253.492 227.895 255.094 229 256.897 229C258.699 229 260.301 227.895 261.002 226.188L308.562 111.697L309.263 212.53C309.263 216.045 306.459 218.857 302.955 218.957H299.35V226.188H339V218.957H333.593C330.189 218.957 327.385 216.045 327.285 212.63L326.985 102.859C326.985 99.3443 329.788 96.5322 333.193 96.4318L339 96.3314V89H305.157L260.501 198.369Z"
                fill="currentColor"
              />
              <path
                d="M571.869 217.046C570.764 215.94 570.162 214.431 570.162 212.62V158.696C570.162 148.435 567.151 140.386 561.127 134.652C555.205 128.917 546.973 126 536.734 126C522.378 126 511.035 131.835 503.104 143.304C503.004 143.505 502.703 143.606 502.402 143.606C502.1 143.606 501.9 143.404 501.9 143.103L498.185 128.716H491.961L476 137.871V142.901H480.116C482.023 142.901 483.629 143.404 484.734 144.411C485.838 145.417 486.44 146.926 486.44 149.038V212.519C486.44 214.33 485.838 215.839 484.734 216.946C483.629 218.052 482.124 218.656 480.317 218.656H476.301V226H513.042V218.656H509.027C507.22 218.656 505.714 218.052 504.61 216.946C503.506 215.839 502.903 214.33 502.903 212.519V170.467C502.903 165.135 504.108 159.803 506.317 154.571C508.625 149.441 512.038 145.115 516.556 141.795C521.073 138.475 526.494 136.865 532.718 136.865C539.745 136.865 545.066 139.078 548.378 143.505C551.691 147.932 553.398 153.666 553.398 160.507V212.419C553.398 214.229 552.795 215.738 551.691 216.845C550.587 217.952 549.081 218.555 547.274 218.555H543.259V225.899H580V218.555H575.985C574.479 218.757 573.073 218.153 571.869 217.046Z"
                fill="currentColor"
              />
              <path
                d="M907.546 97.2119C897.39 91.804 886.039 89 873.792 89H826V96.3106H830.68C832.472 96.3106 834.065 97.0117 835.658 98.614C837.152 100.116 837.948 101.819 837.948 103.621V211.379C837.948 213.181 837.152 214.884 835.658 216.386C834.165 217.888 832.472 218.689 830.68 218.689H826V226H873.792C886.039 226 897.39 223.196 907.546 217.788C917.701 212.38 925.966 204.368 931.94 194.154C937.914 183.939 941 171.621 941 157.6C941 143.58 937.914 131.362 931.94 121.047C925.866 110.632 917.701 102.72 907.546 97.2119ZM921.784 157.4C921.784 170.219 919.494 181.034 915.013 189.747C910.533 198.46 904.558 204.969 897.19 209.176C889.823 213.382 881.658 215.485 872.896 215.485H863.238C861.446 215.485 859.853 214.784 858.26 213.181C856.766 211.679 855.97 209.977 855.97 208.174V106.526C855.97 104.723 856.667 103.121 858.26 101.518C859.753 100.016 861.446 99.2149 863.238 99.2149H872.896C881.658 99.2149 889.823 101.318 897.19 105.524C904.558 109.73 910.533 116.24 915.013 124.952C919.494 133.765 921.784 144.681 921.784 157.4Z"
                fill="currentColor"
              />
              <path
                d="M1053.97 164.711C1049.55 159.603 1041.02 155.297 1030.99 152.993C1044.84 146.083 1051.96 136.369 1051.96 123.851C1051.96 117.041 1050.16 110.932 1046.54 105.724C1042.93 100.517 1037.81 96.3106 1031.29 93.4063C1024.76 90.5021 1017.13 89 1008.5 89H954.402V96.3106H958.718C960.524 96.3106 962.13 97.0117 963.736 98.614C965.242 100.116 966.045 101.819 966.045 103.621V211.379C966.045 213.181 965.242 214.884 963.736 216.386C962.231 217.888 960.524 218.689 958.718 218.689H954V226H1012.72C1021.65 226 1029.98 224.498 1037.51 221.493C1045.04 218.489 1051.06 214.083 1055.38 208.274C1059.79 202.466 1062 195.355 1062 187.143C1061.9 178.33 1059.29 170.819 1053.97 164.711ZM986.621 213.281C985.115 211.779 984.312 210.077 984.312 208.274V159.903H1012.22C1022.05 159.903 1029.58 162.407 1034.8 167.414C1040.02 172.422 1042.63 178.931 1042.63 186.943C1042.63 191.75 1041.42 196.457 1039.22 200.763C1036.91 205.17 1033.49 208.675 1028.88 211.379C1024.36 214.083 1018.74 215.485 1012.22 215.485H991.639C989.833 215.485 988.227 214.784 986.621 213.281ZM984.413 149.588V106.626C984.413 104.823 985.115 103.221 986.721 101.618C988.227 100.116 989.933 99.315 991.74 99.315H1004.99C1014.52 99.315 1021.55 101.719 1025.97 106.325C1030.38 111.032 1032.59 117.041 1032.59 124.452C1032.59 132.063 1030.48 138.172 1026.37 142.778C1022.25 147.285 1016.03 149.588 1007.8 149.588H984.413Z"
                fill="currentColor"
              />
              <path
                d="M431.999 132.388C424.329 128.196 415.763 126 406.5 126C397.237 126 388.571 128.096 381.001 132.388C373.331 136.579 367.255 142.667 362.773 150.352C358.291 158.037 356 167.02 356 177C356 186.98 358.291 195.963 362.773 203.648C367.255 211.333 373.331 217.421 381.001 221.613C388.671 225.804 397.237 228 406.5 228C415.763 228 424.429 225.904 431.999 221.613C439.669 217.421 445.745 211.333 450.227 203.648C454.709 195.963 457 186.98 457 177C457 167.02 454.709 158.037 450.227 150.352C445.745 142.667 439.669 136.579 431.999 132.388ZM439.37 177C439.37 189.276 436.382 199.256 430.405 206.442C424.529 213.628 416.461 217.321 406.5 217.321C396.54 217.321 388.471 213.628 382.595 206.442C376.618 199.256 373.63 189.276 373.63 177C373.63 164.724 376.618 154.744 382.595 147.558C388.471 140.372 396.54 136.679 406.5 136.679C416.461 136.679 424.529 140.372 430.405 147.558C436.382 154.744 439.37 164.724 439.37 177Z"
                fill="currentColor"
              />
              <path
                d="M784.999 132.388C777.329 128.196 768.763 126 759.5 126C750.237 126 741.571 128.096 734.001 132.388C726.331 136.579 720.255 142.667 715.773 150.352C711.291 158.037 709 167.02 709 177C709 186.98 711.291 195.963 715.773 203.648C720.255 211.333 726.331 217.421 734.001 221.613C741.671 225.804 750.237 228 759.5 228C768.763 228 777.429 225.904 784.999 221.613C792.669 217.421 798.745 211.333 803.227 203.648C807.709 195.963 810 186.98 810 177C810 167.02 807.709 158.037 803.227 150.352C798.745 142.667 792.569 136.579 784.999 132.388ZM792.37 177C792.37 189.276 789.381 199.256 783.405 206.442C777.528 213.628 769.46 217.321 759.5 217.321C749.539 217.321 741.471 213.628 735.595 206.442C729.618 199.256 726.63 189.276 726.63 177C726.63 164.624 729.618 154.744 735.595 147.558C741.471 140.372 749.539 136.679 759.5 136.679C769.46 136.679 777.528 140.372 783.405 147.558C789.282 154.744 792.37 164.724 792.37 177Z"
                fill="currentColor"
              />
              <path
                d="M642.64 126C634.614 126 627.292 127.704 620.671 131.113C614.05 134.522 608.834 139.135 605.122 145.05C601.411 150.865 599.505 157.383 599.505 164.301C599.505 170.517 600.909 176.232 603.818 181.346C606.627 186.259 610.439 190.369 615.254 193.778L600.909 213.23C599.103 215.636 598.903 218.844 600.207 221.451C601.611 224.158 604.219 225.763 607.229 225.763H611.342C607.329 228.47 604.119 231.678 601.912 235.488C599.304 239.799 598 244.311 598 248.923C598 257.546 601.812 264.665 609.335 269.979C616.759 275.293 627.191 278 640.332 278C649.461 278 658.188 276.496 666.113 273.588C674.138 270.681 680.658 266.369 685.473 260.755C690.389 255.14 692.897 248.322 692.897 240.501C692.897 232.28 689.887 226.464 682.865 220.85C676.847 216.137 667.417 213.631 655.68 213.631H615.555C615.455 213.631 615.354 213.53 615.354 213.53C615.354 213.53 615.254 213.33 615.354 213.23L625.787 199.193C628.596 200.496 631.204 201.298 633.511 201.799C635.918 202.301 638.627 202.501 641.636 202.501C650.063 202.501 657.687 200.797 664.307 197.388C670.928 193.979 676.245 189.367 680.057 183.451C683.868 177.636 685.774 171.119 685.774 164.201C685.774 156.781 682.163 143.245 672.332 136.327C672.332 136.227 672.433 136.227 672.433 136.227L694 138.633V128.707H659.492C654.075 127.003 648.458 126 642.64 126ZM654.677 188.765C650.865 190.77 646.752 191.873 642.64 191.873C635.919 191.873 630 189.467 624.984 184.755C619.969 180.042 617.461 173.124 617.461 164.301C617.461 155.478 619.969 148.559 624.984 143.847C630 139.135 635.919 136.728 642.64 136.728C646.853 136.728 650.865 137.731 654.677 139.836C658.489 141.842 661.599 144.95 664.107 149.061C666.514 153.172 667.818 158.285 667.818 164.301C667.818 170.417 666.614 175.53 664.107 179.541C661.699 183.652 658.489 186.76 654.677 188.765ZM627.492 225.662H654.677C662.201 225.662 667.016 227.166 670.226 230.375C673.436 233.583 675.041 237.894 675.041 242.908C675.041 250.227 672.132 256.243 666.314 260.755C660.495 265.267 652.671 267.573 643.041 267.573C634.614 267.573 627.592 265.668 622.476 262.058C617.36 258.449 614.752 252.934 614.752 245.916C614.752 241.504 615.956 237.393 618.364 233.784C620.771 230.174 623.68 227.567 627.492 225.662Z"
                fill="currentColor"
              />
              <path
                d="M1082.35 224.327C1080.37 223.244 1078.88 221.669 1077.69 219.799C1076.6 217.831 1076 215.764 1076 213.5C1076 211.236 1076.6 209.071 1077.69 207.201C1078.78 205.232 1080.37 203.756 1082.35 202.673C1084.34 201.591 1086.52 201 1089 201C1091.48 201 1093.66 201.591 1095.65 202.673C1097.63 203.756 1099.12 205.331 1100.31 207.201C1101.4 209.169 1102 211.236 1102 213.5C1102 215.764 1101.4 217.929 1100.31 219.799C1099.22 221.768 1097.63 223.244 1095.65 224.327C1093.66 225.409 1091.48 226 1089 226C1086.62 226 1084.34 225.508 1082.35 224.327ZM1094.56 222.949C1096.24 222.063 1097.44 220.685 1098.43 219.11C1099.32 217.437 1099.82 215.567 1099.82 213.5C1099.82 211.433 1099.32 209.563 1098.43 207.89C1097.53 206.217 1096.24 204.937 1094.56 204.051C1092.87 203.165 1091.08 202.673 1089 202.673C1086.92 202.673 1085.13 203.165 1083.44 204.051C1081.76 204.937 1080.56 206.315 1079.57 207.89C1078.68 209.563 1078.18 211.433 1078.18 213.5C1078.18 215.567 1078.68 217.437 1079.57 219.11C1080.47 220.783 1081.76 222.063 1083.44 222.949C1085.13 223.835 1086.92 224.327 1089 224.327C1091.08 224.327 1092.97 223.835 1094.56 222.949ZM1083.64 219.504V218.618L1083.84 218.52H1084.44C1084.63 218.52 1084.83 218.421 1084.93 218.323C1085.13 218.126 1085.13 218.028 1085.13 217.831V208.677C1085.13 208.48 1085.03 208.284 1084.93 208.185C1084.73 207.988 1084.63 207.988 1084.44 207.988H1083.84L1083.64 207.89V207.004L1083.84 206.906H1089C1090.49 206.906 1091.58 207.201 1092.47 207.89C1093.37 208.579 1093.76 209.465 1093.76 210.646C1093.76 211.532 1093.47 212.417 1092.77 213.008C1092.08 213.697 1091.28 214.091 1090.29 214.189L1091.48 214.583L1093.76 218.224C1093.96 218.52 1094.16 218.618 1094.46 218.618H1095.05L1095.15 218.717V219.602L1095.05 219.701H1091.98L1091.78 219.602L1088.6 214.287H1087.81V217.831C1087.81 218.028 1087.91 218.224 1088.01 218.323C1088.21 218.52 1088.31 218.52 1088.5 218.52H1089.1L1089.3 218.618V219.504L1089.1 219.602H1083.84L1083.64 219.504ZM1088.7 213.008C1089.5 213.008 1090.19 212.811 1090.59 212.319C1090.98 211.925 1091.28 211.236 1091.28 210.449C1091.28 209.661 1091.08 209.071 1090.69 208.579C1090.29 208.087 1089.69 207.89 1089 207.89H1088.6C1088.4 207.89 1088.21 207.988 1088.11 208.087C1087.91 208.283 1087.91 208.382 1087.91 208.579V213.008H1088.7Z"
                fill="currentColor"
              />
            </svg>
            <p>{"MongoDB"}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
