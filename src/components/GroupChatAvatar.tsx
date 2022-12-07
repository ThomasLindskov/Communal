import React from "react";
import styled from "styled-components";

const GroupChatWrapper = styled.figure`
  margin: 0;
  min-height: 48px;
  max-height: 48px;
  display: flex;
  align-items: center;
`;

export default function GroupChatAvatar({
  color,
  name,
}: {
  color: string;
  name: string;
}) {
  return (
    <GroupChatWrapper className="logo-main">
      {name === "General" && (
        <svg
          width="40"
          height="31"
          viewBox="0 0 40 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.0927 22.8554C30.0927 22.8554 30.0777 22.6487 29.8618 21.9145C29.7002 21.3679 29.4827 20.8454 29.2152 20.352C28.9077 19.7837 28.5352 19.257 28.1052 18.7795C27.7552 18.3895 27.3677 18.0345 26.9502 17.717C26.481 17.3637 25.9735 17.0595 25.4343 16.812C24.7851 16.5145 24.0901 16.2995 23.3626 16.1803L22.931 16.1103C22.876 16.1087 22.811 16.1053 22.7426 16.1037C24.606 15.1178 25.8751 13.1611 25.8751 10.907C25.8751 7.66026 23.2451 5.02941 20.0001 5.02941C16.7542 5.02941 14.1226 7.66026 14.1226 10.907C14.1226 13.1761 15.4117 15.1453 17.2968 16.1237C17.0426 16.1353 16.8067 16.1462 16.6059 16.1595L15.9684 16.3187C15.4442 16.4503 14.9392 16.6328 14.4609 16.8612C13.9317 17.1128 13.4326 17.4212 12.9734 17.7753C12.5142 18.132 12.0925 18.5353 11.7184 18.9803C11.455 19.2945 11.2125 19.6278 10.9975 19.9812C10.7759 20.342 10.5825 20.7212 10.42 21.1187C10.2359 21.5595 10.0909 22.022 9.98837 22.497L9.86753 23.0554C9.83253 23.702 9.8042 24.6795 9.8042 25.2321V27.2712C9.8042 27.8404 9.80587 28.3971 9.8092 28.5062C9.81087 28.6154 10.4084 29.1187 11.1192 29.3821C11.1192 29.3821 11.5284 29.5354 12.4267 29.7904C14.8726 30.4871 17.5484 30.8729 20.3543 30.8729C22.9751 30.8729 25.4818 30.5363 27.796 29.9238C28.6052 29.7096 28.8443 29.6279 28.8443 29.6279C29.5602 29.3837 30.1577 29.0529 30.171 28.8937C30.1835 28.7346 30.1952 27.6979 30.1952 26.9504V24.9112C30.1952 24.537 30.1493 23.612 30.0927 22.8554Z"
            fill={color}
          />
          <path
            d="M39.8992 17.953C39.8992 17.953 39.8825 17.7463 39.6667 17.0122C39.505 16.4655 39.2875 15.943 39.02 15.4497C38.7125 14.8813 38.34 14.3547 37.9117 13.8771C37.56 13.4871 37.1733 13.1305 36.755 12.8146C36.2858 12.4613 35.7783 12.1571 35.2391 11.9096C34.59 11.6121 33.895 11.3971 33.1675 11.278L32.7374 11.208C32.6808 11.2046 32.6174 11.203 32.5474 11.2013C34.4108 10.2155 35.6816 8.25878 35.6816 6.00293C35.6816 2.75791 33.05 0.127054 29.8049 0.127054C26.8491 0.127054 24.4041 2.3104 23.9907 5.15042C25.8124 6.41627 27.0066 8.52461 27.0066 10.9071C27.0066 10.993 27.0049 11.0796 27.0016 11.1655C27.0341 11.1838 27.0674 11.203 27.1016 11.2213C27.0657 11.223 27.0341 11.2246 26.9999 11.2263C26.9274 12.8355 26.3066 14.343 25.2749 15.5213C25.4882 15.6013 25.6982 15.6888 25.9049 15.783C26.5141 16.0613 27.0949 16.4097 27.6316 16.8138C28.1058 17.173 28.5499 17.5805 28.9466 18.023C29.4366 18.568 29.8616 19.1705 30.2099 19.813C30.5174 20.3797 30.7649 20.9789 30.9474 21.5939C31.1116 22.1505 31.2058 22.5589 31.2224 22.7739C31.2808 23.5647 31.3266 24.5039 31.3266 24.9114V25.9447C33.5241 25.8614 35.6333 25.5422 37.6008 25.0214C38.41 24.8072 38.6492 24.7256 38.6492 24.7256C39.365 24.4814 39.9625 24.1506 39.9758 23.9914C39.9883 23.8322 40 22.7955 40 22.048V20.0089C40 19.6347 39.9542 18.7097 39.8992 17.953Z"
            fill={color}
          />
          <path
            d="M8.67339 25.2317C8.67339 24.66 8.70256 23.6575 8.73839 22.995L8.74339 22.9042L8.88339 22.26C8.99923 21.7225 9.1634 21.1934 9.3734 20.6859C9.55757 20.24 9.78007 19.8033 10.0326 19.39C10.2767 18.9917 10.5517 18.6092 10.8526 18.2508C11.2792 17.745 11.7592 17.2842 12.2818 16.8808C12.8076 16.4733 13.3776 16.1233 13.9759 15.8391C14.2201 15.7233 14.4693 15.6175 14.7234 15.5233C13.6868 14.34 13.0659 12.8241 12.9976 11.2033C12.9768 11.2033 12.9593 11.2016 12.9376 11.2016C12.9576 11.19 12.9768 11.1775 12.9976 11.1674C12.9951 11.0799 12.9918 10.9933 12.9918 10.9074C12.9918 8.5241 14.1876 6.41658 16.0093 5.14991C15.5959 2.30989 13.1509 0.127375 10.1951 0.127375C6.95005 0.127375 4.31753 2.75739 4.31753 6.00325C4.31753 8.27326 5.60671 10.2433 7.49005 11.2216C7.23755 11.2325 7.00171 11.2441 6.80171 11.2566L6.16338 11.4166C5.63921 11.5483 5.13504 11.7308 4.6567 11.9583C4.12586 12.2108 3.62753 12.5183 3.16919 12.8733C2.70835 13.23 2.28835 13.6333 1.91418 14.0775C1.64834 14.3916 1.40751 14.7258 1.19251 15.0783C0.971673 15.44 0.777505 15.8191 0.613338 16.2167C0.430836 16.6575 0.286669 17.12 0.183335 17.595L0.063334 18.1533C0.0275004 18.7992 0 19.7775 0 20.3292V22.3684C0 22.9384 0.00166632 23.495 0.00499967 23.6042C0.00666635 23.7134 0.603338 24.2159 1.31334 24.48C1.31334 24.48 1.72335 24.6325 2.62168 24.8884C4.5167 25.4284 6.54921 25.7784 8.67339 25.9084V25.2317Z"
            fill={color}
          />
        </svg>
      )}
      {name === "Help" && (
        <svg
          width="40"
          height="42"
          viewBox="0 0 40 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5304 22.45L11.4262 23.5809L12.8346 25.0262C12.9929 25.1876 12.9921 25.4515 12.8346 25.613L12.5479 25.9068C12.3912 26.0682 12.1329 26.0682 11.9754 25.9068L10.5671 24.4615L8.50042 26.5807L10.4813 28.6128C10.6388 28.7742 10.6379 29.0382 10.4813 29.1996L10.1946 29.4934C10.0371 29.654 9.77958 29.654 9.62208 29.4934L7.64042 27.4614L5.57292 29.5806L6.98208 31.025C7.13958 31.1855 7.13958 31.4503 6.98208 31.6126L6.69542 31.9056C6.53875 32.0662 6.28125 32.0679 6.12292 31.9056L4.71375 30.4612L2.64708 32.5795L4.62958 34.6116C4.78625 34.7739 4.78625 35.037 4.62958 35.1993L4.34292 35.4931C4.18458 35.6528 3.92708 35.6545 3.76875 35.4931L1.78792 33.461L0.23625 35.0507C-0.07875 35.3744 -0.07875 35.9031 0.23625 36.2251L5.39292 41.5099C5.70708 41.8336 6.22292 41.8336 6.53792 41.5099L18.8321 28.9092L12.5304 22.45Z"
            fill={color}
          />
          <path
            d="M24.254 13.9083C24.0965 14.0698 23.839 14.0698 23.6807 13.9083L22.2724 12.4639L21.4849 13.2711L27.7782 19.7389L39.7632 7.45338C40.0782 7.12965 40.0782 6.60263 39.7632 6.2789L34.6082 0.994176C34.2932 0.672155 33.7774 0.672155 33.4624 0.994176L31.9107 2.58549L33.8915 4.61584C34.0499 4.77899 34.0499 5.04122 33.8915 5.20522L33.6057 5.49649C33.4474 5.65878 33.1907 5.65878 33.0324 5.49649L31.0507 3.46613L28.9849 5.58532L30.3924 7.02972C30.5515 7.1903 30.5507 7.45509 30.3924 7.61567L30.1057 7.90951C29.949 8.07095 29.6915 8.07095 29.534 7.90951L28.1257 6.46597L26.0582 8.58515L28.0399 10.6155C28.1974 10.7769 28.1965 11.0426 28.0399 11.2023L27.7532 11.4962C27.5957 11.6576 27.3374 11.6576 27.1807 11.4962L25.199 9.46409L23.1315 11.5824L24.5407 13.0277C24.6974 13.1891 24.6974 13.453 24.5407 13.6145L24.254 13.9083Z"
            fill={color}
          />
          <path
            d="M35.5546 38.1003C35.2446 38.4172 34.6629 38.5308 34.2613 38.3506L28.6246 35.8299C28.2221 35.6497 27.6838 35.2858 27.4263 35.021C27.1688 34.7571 27.3154 34.5615 27.7529 34.5888L30.3538 34.7486C30.7904 34.775 31.0638 34.4402 30.9604 34.0029L30.6304 32.6046C30.5271 32.1681 30.7954 31.876 31.2271 31.9546L32.7279 32.2279C33.1596 32.3065 33.5154 32.0024 33.5196 31.554L33.5396 29.1179C33.5429 28.6695 33.6979 28.4576 33.8838 28.6481C34.0696 28.8377 34.3429 29.34 34.4921 29.7619L36.6554 35.9282C36.8038 36.3501 36.6721 36.9557 36.3621 37.2726L35.5546 38.1003ZM5.93209 10.3613C5.62292 10.6799 5.11626 10.6799 4.80626 10.3613L3.47376 8.99715C3.16376 8.68025 3.16376 8.16092 3.47292 7.84231L7.24793 3.97379C7.55793 3.6569 8.06459 3.6569 8.37459 3.97379L9.70542 5.33875C10.0163 5.65565 10.0163 6.17583 9.70542 6.49273L5.93209 10.3613ZM14.9996 7.81412C14.6904 7.49723 14.4404 7.23329 14.4446 7.22817C14.4488 7.2256 14.1979 6.96167 13.8879 6.64477L8.37126 0.991042C8.06209 0.674146 7.55459 0.674146 7.24459 0.991042L0.56209 7.84061C0.25209 8.15921 0.25209 8.67854 0.56209 8.99544L6.07876 14.6509C6.38876 14.9695 6.64459 15.2266 6.64792 15.2232C6.65042 15.2198 6.90626 15.4769 7.21626 15.7938L26.6746 35.7394C26.9838 36.058 27.5654 36.4654 27.9663 36.6457L39.1629 41.6853C39.5646 41.8672 39.7713 41.669 39.6229 41.2471L35.4188 29.293C35.2696 28.871 34.8954 28.2654 34.5863 27.9468L14.9996 7.81412Z"
            fill={color}
          />
        </svg>
      )}

      {name === "Vacations" && (
        <svg
          width="40"
          height="42"
          viewBox="0 0 40 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.6167 1.14524C38.3209 -0.181277 33.9258 2.1711 32.63 3.49933L27.4441 8.81566H3.84813C3.28729 8.81566 2.80479 9.22481 2.70062 9.79027C2.59562 10.354 2.89729 10.9161 3.41812 11.127L19.0216 17.4479L10.0432 27.8576L0.404768 27.2537C0.2106 27.2554 0.0439342 27.3955 0.00726724 27.5928C-0.0293997 27.7876 0.0756009 27.9832 0.256435 28.0566L7.87065 31.141C7.91482 31.3366 7.97565 31.5297 8.05482 31.715L7.72232 32.0584C7.24732 32.5444 7.24648 33.332 7.72232 33.8188C8.19566 34.3057 8.96566 34.3057 9.439 33.8188L9.76567 33.4848C9.949 33.5686 10.139 33.6352 10.3323 33.6822L13.2682 41.3927C13.339 41.5781 13.529 41.6866 13.7199 41.6498C13.8015 41.6344 13.8749 41.5935 13.9315 41.5345C14.0057 41.4593 14.0499 41.356 14.0499 41.2407L13.4607 31.5578L23.7691 22.1987L29.8775 38.2451C30.0816 38.7807 30.63 39.0924 31.1817 38.9857C31.42 38.9404 31.63 38.8217 31.7908 38.6568C32.0042 38.4365 32.1342 38.1366 32.1342 37.8095V13.6255L37.3217 8.30914C38.6167 6.98091 40.9126 2.47347 39.6167 1.14524Z"
            fill={color}
          />
        </svg>
      )}
    </GroupChatWrapper>
  );
}
