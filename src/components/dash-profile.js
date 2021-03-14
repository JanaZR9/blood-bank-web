import React from 'react';
import location from '../assets/dashboard-location.svg';
import star from '../assets/dashboard-star.svg';
//import pp from '../assets/profilepic.png';
import bg from '../assets/dash-bg.svg';
import { withNamespaces } from 'react-i18next';
function DashProfile(props) {
  // const B = `M11.6944 24.146V12.771H15.5928C16.8793 12.771 17.8585 13.0288 18.5303 13.5444C19.2022 14.0601 19.5381 14.8283 19.5381 15.8491C19.5381 16.37 19.3975 16.8387 19.1163 17.2554C18.835 17.672 18.4236 17.995 17.8819 18.2241C18.4965 18.3908 18.9704 18.7059 19.3038 19.1694C19.6423 19.6278 19.8116 20.1799 19.8116 20.8257C19.8116 21.8934 19.4678 22.7137 18.7803 23.2866C18.098 23.8595 17.1189 24.146 15.8428 24.146H11.6944ZM13.671 19.0132V22.5679H15.8663C16.4861 22.5679 16.9704 22.4142 17.3194 22.1069C17.6684 21.7996 17.8428 21.3726 17.8428 20.8257C17.8428 19.6434 17.2387 19.0392 16.0303 19.0132H13.671ZM13.671 17.5601H15.6085C16.223 17.5601 16.7022 17.422 17.046 17.146C17.3949 16.8647 17.5694 16.4689 17.5694 15.9585C17.5694 15.396 17.4079 14.9897 17.085 14.7397C16.7673 14.4897 16.2699 14.3647 15.5928 14.3647H13.671V17.5601Z`;
  //const A = `M17.7803 21.4976H13.3741L12.4522 24.146H10.3975L14.6944 12.771H16.4678L20.7725 24.146H18.71L17.7803 21.4976ZM13.9288 19.9038H17.2256L15.5772 15.1851L13.9288 19.9038Z`;
  //const O = `M19.796 18.7554C19.796 19.87 19.6033 20.8491 19.2178 21.6929C18.8324 22.5314 18.2803 23.1772 17.5616 23.6304C16.848 24.0783 16.0251 24.3022 15.0928 24.3022C14.171 24.3022 13.348 24.0783 12.6241 23.6304C11.9053 23.1772 11.348 22.534 10.9522 21.7007C10.5616 20.8674 10.3637 19.9064 10.3585 18.8179V18.1772C10.3585 17.0679 10.5538 16.0887 10.9444 15.2397C11.3402 14.3908 11.8949 13.7424 12.6085 13.2944C13.3272 12.8413 14.1501 12.6147 15.0772 12.6147C16.0043 12.6147 16.8246 12.8387 17.5381 13.2866C18.2569 13.7293 18.8116 14.37 19.2022 15.2085C19.5928 16.0418 19.7908 17.0132 19.796 18.1226V18.7554ZM17.8194 18.1616C17.8194 16.9012 17.5798 15.9351 17.1006 15.2632C16.6267 14.5913 15.9522 14.2554 15.0772 14.2554C14.223 14.2554 13.5538 14.5913 13.0694 15.2632C12.5902 15.9299 12.3454 16.8752 12.335 18.0991V18.7554C12.335 20.0054 12.5772 20.9715 13.0616 21.6538C13.5512 22.3361 14.2283 22.6772 15.0928 22.6772C15.9678 22.6772 16.6397 22.3439 17.1085 21.6772C17.5824 21.0106 17.8194 20.0366 17.8194 18.7554V18.1616Z`;
  // const AB = `M13.0899 19.8286H9.23444L8.4278 22.146H6.62994L10.3897 12.1929H11.9415L15.7081 22.146H13.9034L13.0899 19.8286ZM9.71979 18.4341H12.6046L11.1622 14.3052L9.71979 18.4341ZM16.8428 22.146V12.1929H20.254C21.3796 12.1929 22.2364 12.4185 22.8243 12.8696C23.4122 13.3208 23.7061 13.993 23.7061 14.8862C23.7061 15.342 23.5831 15.7521 23.337 16.1167C23.0909 16.4813 22.7309 16.7638 22.2569 16.9644C22.7947 17.1102 23.2094 17.3859 23.501 17.7915C23.7973 18.1925 23.9454 18.6756 23.9454 19.2407C23.9454 20.175 23.6446 20.8927 23.043 21.394C22.446 21.8953 21.5893 22.146 20.4727 22.146H16.8428ZM18.5723 17.6548V20.7651H20.4932C21.0355 20.7651 21.4594 20.6307 21.7647 20.3618C22.07 20.0929 22.2227 19.7192 22.2227 19.2407C22.2227 18.2062 21.6941 17.6776 20.6368 17.6548H18.5723ZM18.5723 16.3833H20.2676C20.8054 16.3833 21.2247 16.2625 21.5255 16.021C21.8308 15.7749 21.9835 15.4285 21.9835 14.9819C21.9835 14.4897 21.8422 14.1343 21.5596 13.9155C21.2816 13.6968 20.8464 13.5874 20.254 13.5874H18.5723V16.3833Z`;
  const Rhminus = `M29.1103 8.43506H26.2509V7.55029H29.1103V8.43506Z`;
  //const Rhplus = `M28.2138 7.04053H30.5927V8.06592H28.2138V10.7612H27.124V8.06592H24.745V7.04053H27.124V4.55029H28.2138V7.04053Z`;

  function bloodtype(type, Rh) {
    return (
      <svg
        width="39"
        height="45"
        viewBox="0 0 39 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            d="M30.2562 11.0206L20.3541 0.806967C19.8164 0.285421 18.9203 0.285419 18.3827 0.806962L8.48065 11.0205C2.47671 17.0617 2.52154 26.6234 8.5255 32.6646C14.5295 38.4451 24.2075 38.4451 30.2114 32.6647C36.2153 26.6235 36.2601 17.0618 30.2562 11.0206ZM29.2257 21.7122C29.2257 26.5365 24.7451 31.1 20.0405 31.1C19.2788 31.1 18.6964 30.535 18.6964 29.7962C18.6516 29.1008 19.234 28.5358 19.9509 28.4923C19.9957 28.4923 19.9957 28.4923 20.0405 28.4923C23.2665 28.4923 26.5373 25.0588 26.5373 21.7122C26.5373 20.9734 27.1198 20.4084 27.8815 20.4084C28.5984 20.3649 29.1808 20.9299 29.2257 21.6253C29.2257 21.6688 29.2257 21.6688 29.2257 21.7122Z"
            fill="#E10108"
          />
        </g>
        <path
          d="M30.2562 11.0206L20.3541 0.806967C19.8164 0.285421 18.9203 0.285419 18.3827 0.806962L8.48065 11.0205C2.47671 17.0617 2.52154 26.6234 8.5255 32.6646C14.5295 38.4451 24.2075 38.4451 30.2114 32.6647C36.2153 26.6235 36.2601 17.0618 30.2562 11.0206ZM29.2257 21.7122C29.2257 26.5365 24.7451 31.1 20.0405 31.1C19.2788 31.1 18.6964 30.535 18.6964 29.7962C18.6516 29.1008 19.234 28.5358 19.9509 28.4923C19.9957 28.4923 19.9957 28.4923 20.0405 28.4923C23.2665 28.4923 26.5373 25.0588 26.5373 21.7122C26.5373 20.9734 27.1198 20.4084 27.8815 20.4084C28.5984 20.3649 29.1808 20.9299 29.2257 21.6253C29.2257 21.6688 29.2257 21.6688 29.2257 21.7122Z"
          fill="#FCF7F7"
          fillOpacity="0.96"
        />
        <path
          d="M35 8.93824C35 13.1041 31.6662 16.4607 27.5789 16.4607C23.4917 16.4607 20.1579 13.1041 20.1579 8.93824C20.1579 4.77238 23.4917 1.41577 27.5789 1.41577C31.6662 1.41577 35 4.77238 35 8.93824Z"
          fill="#979191"
          fillOpacity="0.94"
          stroke="#FFF9F9"
          strokeWidth="2"
        />
        <path d={type} fill="#6A6868" />
        <path d={Rh} fill="#F7F9FB" />
        <defs>
          <filter
            id="filter0_d"
            x="6.10352e-05"
            y="0.415771"
            width="38.7368"
            height="44.5842"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  }

  return (
    <div
      className=" flex flex-col justify-center relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
      }}
    >
      <div style={{ margin: '3vw' }} className="flex justify-center">
        {' '}
        <img className="rounded-full" src={props.pp} alt="profile-pic" />{' '}
      </div>
      <div
        style={{
          margin: '2vw',
        }}
        className="flex flex-row justify-center"
      >
        <div
          style={{
            backgroundColor: 'rgba(255, 231, 231, 1)',
            width: '33vw',
            height: '6vw',
          }}
          className="flex flex-row justify-evenly rounded-2xl	items-center p-2"
        >
          <img src={star} alt="location" className="mr-1" />{' '}
          <p className=" font-roboto text-s text-greyfont">
            {' '}
            {props.t('dashboard.hero_donor')}
          </p>
        </div>
      </div>
      <div
        style={{
          margin: '2vw',
        }}
        className="flex flex-row justify-center text-white font-roboto"
      >
        <img src={location} alt="location" /> <p>{props.address}</p>
      </div>
      <div style={{ margin: '2vw' }} className="flex justify-center">
        {bloodtype(props.blood_type, Rhminus)}
      </div>
    </div>
  );
}
export default withNamespaces()(DashProfile);
