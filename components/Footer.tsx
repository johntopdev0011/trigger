import { useState } from 'react'
import { DISCORD_INVITE } from '../fetch/discord'
import styles from '../styles/Footer.module.scss'

export default function Footer() {
  const [year] = useState(new Date().getFullYear())
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.footerTop}>
          <span className={styles.copyright}>
            &copy; {year} Hypetrigger LLC
            <br /> (
            <a
              href="https://www.linkedin.com/in/nathan-babcock/"
              target="blank"
            >
              LinkedIn
            </a>
            {' / '}
            <a href="https://github.com/nathanbabcock" target="blank">
              Github
            </a>
            )
          </span>
          <a className="btn-lg" href="/#download">
            Free Download
          </a>
        </div>

        <div className={styles.lists}>
          <ul>
            <li>Legal</li>
            <li>
              <a href="/terms">Terms of use</a>
            </li>
            <li>
              <a href="/privacy">Privacy policy</a>
            </li>
          </ul>

          <ul>
            <li>Site links</li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/games">Supported games</a>
            </li>
            <li>
              <a href="/custom-configs">Custom configs</a>
            </li>
            <li>
              <a href="/screenshots">Screenshots</a>
            </li>
            <li>
              <a
                href="https://techcrunch.com/2021/09/10/3-methodologies-for-automated-video-game-highlight-detection-and-capture/"
                target="blank"
              >
                Read the article
              </a>
            </li>
            <li>
              <a href="/#download">Download</a>
            </li>
          </ul>

          <ul>
            <li>Social</li>
            <li>
              <a
                href="https://github.com/nathanbabcock/hypetrigger"
                target="blank"
              >
                Github
              </a>
            </li>
            <li>
              <a href={DISCORD_INVITE} target="blank">
                Discord
              </a>
            </li>
            <li>
              <a href="#" onClick={() => alert('Coming soon!')}>
                Youtube
              </a>
            </li>
            <li>
              <a href="#" onClick={() => alert('Coming soon!')}>
                Twitch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
