import React from 'react';
import wave from '../assets/footerWaves.svg';
import Facebook from '../assets/Facebook1.svg';
import Twitter from '../assets/Twitter.svg';
import Github from '../assets/Github.svg';

export default function AboutFooter() {
  return (
    <div className="relative text-white text-left font-roboto">
      <div>
        <img src={wave} className="w-screen" alt="waves" />
      </div>
      <div className="flex flex-col w-screen absolute" style={{ bottom: '0' }}>
        <div
          style={{ paddingLeft: '5vw' }}
          className="flex flex-row pb-3 w-screen"
        >
          <div style={{ width: '30vw' }}>
            <h2>Hospital</h2>
            <ul className="text-xs underline">
              <li>
                <a
                  href="https://www.hopitalnini.com/en/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Nini
                </a>
              </li>
              <li>
                <a
                  href="https://www.moph.gov.lb/en/HealthFacilities/view/3/188/74174/new-mazloum-hospital/?facility_type=8"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mazloum
                </a>
              </li>
              <li>
                <a
                  href="https://www.hopitalhaykel.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Haykal
                </a>
              </li>
              <li>
                <a
                  href="https://moph.gov.lb/en/HealthFacilities/view/3/188/74169/al-mounla-hospital/?facility_type=8"
                  target="_blank"
                  rel="noreferrer"
                >
                  Monla
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-0" style={{ width: '40vw' }}>
            <h2>Terms</h2>
            <ul className="text-xs underline">
              <li>
                <span>Privacy Policy</span>
              </li>
              <li>
                <span>Terms and Agreement </span>
              </li>
            </ul>
          </div>
          <div className="ml-12">
            <div>
              {' '}
              <img className="" src={Twitter} alt="twitter" />
            </div>
            <div>
              <img className="mt-2" src={Github} alt="github" />
            </div>
            <div>
              <img className="mt-2" src={Facebook} alt="facebook" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}