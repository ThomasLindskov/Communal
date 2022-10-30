import React from "react";

export default function Logo() {
  return (
    <figure className="logo-main" style={{ width: "420px" }}>
      <svg viewBox="0 0 368 119" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M148.354 37.9817C147.582 37.2398 146.33 37.2398 145.557 37.9817L133.239 49.8116C132.918 50.1195 132.718 50.5239 132.671 50.9572C131.69 59.9681 127.477 68.4589 120.805 74.8653L117.878 77.6764L96.609 57.2505C97.9544 57.5556 99.2711 57.7098 100.55 57.7098C102.426 57.7098 104.221 57.3806 105.907 56.7179C106.918 56.3208 107.402 55.2117 106.988 54.2411C106.575 53.2698 105.42 52.8056 104.409 53.2023C96.2652 56.402 86.8761 47.8861 85.6935 46.7679L80.0422 41.3406C80.7438 38.4831 80.138 35.4163 78.3338 32.9249C76.2942 30.1088 73.0515 28.4939 69.4233 28.4939L55.735 28.588C55.7228 28.588 55.7107 28.588 55.6988 28.588C54.3884 28.588 53.1562 28.1004 52.2255 27.2127C51.2863 26.3169 50.7691 25.1233 50.7694 23.8515V23.6537C50.77 21.102 52.8504 19.0243 55.5056 18.9238L80.4334 17.9806C89.4297 17.6405 98.3967 20.2643 105.669 25.3685C106.457 25.9207 107.545 25.8401 108.235 25.178L121.327 12.6048C122.099 11.8632 122.099 10.6606 121.327 9.91904C120.555 9.17719 119.303 9.17719 118.53 9.91904L106.612 21.365C98.8848 16.3748 89.5988 13.8331 80.2776 14.1852L55.3498 15.1284C55.2911 15.1307 55.2336 15.1357 55.1755 15.1392L45.7174 6.05639C44.9452 5.31454 43.6929 5.31454 42.9207 6.05639C42.1483 6.79795 42.1483 8.00057 42.9207 8.74213L50.9383 16.4417C48.4501 17.9535 46.8151 20.6167 46.8142 23.6534V23.8512C46.8136 26.1425 47.7458 28.2935 49.4383 29.9081C51.1311 31.5227 53.3756 32.4031 55.7633 32.3864L69.4373 32.2923C72.5872 32.2923 74.3287 34.0475 75.0863 35.0938C75.6634 35.8905 76.0501 36.7759 76.2385 37.688L75.5606 37.0371C74.7884 36.2952 73.5362 36.2952 72.764 37.0371C71.9915 37.7786 71.9915 38.9812 72.764 39.7228L117.387 82.576C119.314 84.4264 119.314 87.4376 117.387 89.288C115.461 91.1378 112.327 91.1381 110.4 89.2904L81.9778 61.995C81.2059 61.2531 79.9533 61.2531 79.1814 61.995C78.409 62.7365 78.409 63.9392 79.1814 64.6807L109.795 94.081C111.722 95.9314 111.722 98.9426 109.795 100.793C108.862 101.689 107.621 102.183 106.301 102.183C104.981 102.183 103.74 101.689 102.806 100.793L73.7853 72.9226C73.0129 72.181 71.7609 72.181 70.9887 72.9226C70.2165 73.6642 70.2162 74.8668 70.9887 75.6083L94.7689 98.4459C96.6942 100.297 96.6936 103.306 94.7674 105.156C92.84 107.007 89.7047 107.006 87.7779 105.156L61.9511 80.3531C61.1789 79.6112 59.9266 79.6112 59.1544 80.3531C58.3819 81.0947 58.3819 82.2973 59.1544 83.0388L78.3119 101.437C80.239 103.287 80.2393 106.298 78.3122 108.149C76.3857 109.999 73.2502 109.999 71.3234 108.149L36.6639 74.8653C29.993 68.4589 25.7792 59.9681 24.7989 50.9572C24.7518 50.5239 24.5513 50.1195 24.2303 49.8116L8.37599 34.5857C7.60382 33.8438 6.35154 33.8438 5.57936 34.5857C4.80688 35.3272 4.80688 36.5298 5.57936 37.2714L20.9444 52.0272C22.1517 61.6499 26.7239 70.6906 33.8673 77.5508L36.7838 80.3516C35.6979 81.7953 35.1104 83.5236 35.1104 85.3395C35.1104 87.6217 36.036 89.7675 37.7163 91.3812C39.4508 93.047 41.729 93.88 44.0075 93.88C44.2317 93.88 44.4557 93.8694 44.6793 93.8534C44.6029 94.3068 44.5619 94.7691 44.5619 95.2374C44.5619 97.5197 45.4874 99.6655 47.1677 101.279C48.9022 102.945 51.1804 103.778 53.4589 103.778C53.9022 103.778 54.3455 103.746 54.7848 103.682C54.3817 106.273 55.215 109.008 57.287 110.997C58.9673 112.611 61.2017 113.5 63.5782 113.5C65.6963 113.5 67.7004 112.792 69.3013 111.496C70.912 112.72 72.8641 113.335 74.8176 113.335C77.0958 113.335 79.3746 112.502 81.1092 110.836C82.4013 109.595 83.2112 108.064 83.5407 106.459L84.9807 107.842C86.7155 109.508 88.9934 110.341 91.2722 110.341C93.5504 110.341 95.8295 109.508 97.564 107.842C98.8562 106.601 99.6661 105.071 99.9956 103.466L100.009 103.479C101.69 105.093 103.924 105.982 106.301 105.982C108.678 105.982 110.912 105.093 112.593 103.479C115.133 101.04 115.81 97.4805 114.63 94.4413C116.657 94.2805 118.637 93.4595 120.184 91.9738C123.487 88.8013 123.642 83.7357 120.654 80.3823L123.602 77.5508C130.745 70.6906 135.318 61.6496 136.525 52.0269L148.354 40.6671C149.126 39.9256 149.126 38.7233 148.354 37.9817ZM40.5132 88.6955C39.5798 87.7991 39.0656 86.6073 39.0656 85.3395C39.0656 84.5456 39.2674 83.7819 39.6471 83.1014L46.338 89.527C45.6298 89.8917 44.8342 90.0854 44.0075 90.0854C42.6877 90.086 41.4467 89.5922 40.5132 88.6955ZM49.9647 98.5937C49.0312 97.6973 48.5171 96.5055 48.5171 95.2377C48.5171 94.2405 48.8393 93.293 49.4295 92.4965L56.3128 99.1068C54.3848 100.419 51.691 100.251 49.9647 98.5937ZM60.0839 108.312C58.3576 106.654 58.183 104.067 59.5496 102.215L66.4329 108.826C65.6035 109.392 64.6166 109.702 63.5782 109.702C62.2584 109.702 61.0173 109.208 60.0839 108.312Z"
          fill="#303631"
        />
        <path
          d="M178.4 72.1323C184.347 72.1323 188.568 68.6118 189.098 63.4507L189.115 63.2627H184.091L184.057 63.3994C183.51 66.0312 181.374 67.7573 178.417 67.7573C174.521 67.7573 172.111 64.4761 172.111 59.1782V59.144C172.111 53.8462 174.521 50.582 178.4 50.582C181.339 50.582 183.544 52.4619 184.074 55.2305V55.3501H189.098V55.145C188.62 49.9326 184.245 46.207 178.4 46.207C171.239 46.207 166.83 51.146 166.83 59.144V59.1782C166.83 67.1763 171.256 72.1323 178.4 72.1323ZM201.728 71.8931C207.521 71.8931 211.007 68.2358 211.007 62.1006V62.0664C211.007 55.9824 207.47 52.2739 201.728 52.2739C195.985 52.2739 192.448 55.9995 192.448 62.0664V62.1006C192.448 68.2188 195.934 71.8931 201.728 71.8931ZM201.728 67.9795C199.062 67.9795 197.558 65.8091 197.558 62.1006V62.0664C197.558 58.3921 199.079 56.1875 201.728 56.1875C204.359 56.1875 205.897 58.3921 205.897 62.0664V62.1006C205.897 65.8091 204.376 67.9795 201.728 67.9795ZM215.075 71.5H220.065V60.1523C220.065 57.999 221.432 56.4097 223.38 56.4097C225.329 56.4097 226.474 57.5889 226.474 59.6055V71.5H231.464V59.9302C231.464 57.8965 232.763 56.4097 234.779 56.4097C236.864 56.4097 237.89 57.5547 237.89 59.8276V71.5H242.88V58.5801C242.88 54.7007 240.539 52.2739 236.796 52.2739C234.164 52.2739 231.977 53.6582 231.122 55.7432H230.814C230.045 53.5728 228.148 52.2739 225.585 52.2739C223.124 52.2739 221.176 53.5044 220.373 55.6235H220.065V52.6841H215.075V71.5ZM247.716 71.5H252.707V60.1523C252.707 57.999 254.074 56.4097 256.022 56.4097C257.97 56.4097 259.115 57.5889 259.115 59.6055V71.5H264.105V59.9302C264.105 57.8965 265.404 56.4097 267.421 56.4097C269.506 56.4097 270.531 57.5547 270.531 59.8276V71.5H275.521V58.5801C275.521 54.7007 273.18 52.2739 269.438 52.2739C266.806 52.2739 264.618 53.6582 263.764 55.7432H263.456C262.687 53.5728 260.79 52.2739 258.227 52.2739C255.766 52.2739 253.817 53.5044 253.014 55.6235H252.707V52.6841H247.716V71.5ZM286.579 71.8931C289.262 71.8931 291.176 70.6455 292.03 68.5947H292.338V71.5H297.328V52.6841H292.338V63.5532C292.338 66.0996 291.005 67.7573 288.544 67.7573C286.186 67.7573 285.177 66.373 285.177 63.707V52.6841H280.187V64.8521C280.187 69.3296 282.357 71.8931 286.579 71.8931ZM302.335 71.5H307.326V60.6138C307.326 58.0674 308.727 56.4097 311.034 56.4097C313.393 56.4097 314.486 57.811 314.486 60.46V71.5H319.477V59.332C319.477 54.8374 317.221 52.2739 313.034 52.2739C310.351 52.2739 308.488 53.5557 307.633 55.5894H307.326V52.6841H302.335V71.5ZM329.44 71.7905C331.901 71.7905 333.883 70.748 334.84 69.0049H335.148V71.5H340.07V58.6484C340.07 54.6323 337.25 52.2739 332.26 52.2739C327.526 52.2739 324.416 54.4614 324.022 57.7598L324.005 57.9136H328.62L328.654 57.8452C329.047 56.7344 330.192 56.1021 331.986 56.1021C334.037 56.1021 335.148 57.0249 335.148 58.6484V60.2036L330.602 60.4771C325.919 60.7505 323.305 62.7329 323.305 66.1167V66.1509C323.305 69.5688 325.851 71.7905 329.44 71.7905ZM328.175 65.8433V65.8091C328.175 64.4419 329.218 63.6387 331.354 63.502L335.148 63.2627V64.647C335.148 66.6294 333.422 68.1504 331.115 68.1504C329.389 68.1504 328.175 67.2788 328.175 65.8433ZM345.128 71.5H350.119V45.4893H345.128V71.5Z"
          fill="#303631"
        />
      </svg>
    </figure>
  );
}
