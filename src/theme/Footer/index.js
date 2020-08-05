/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";

import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

import {
  FiInstagram,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
  FiFacebook,
} from "react-icons/fi";

function FooterLink({ to, href, label, prependBaseUrlToHref, ...props }) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });

  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}
    >
      {label}
    </Link>
  );
}

const FooterLogo = ({ url, alt }) => (
  <img className="footer__logo" alt={alt} src={url} />
);

function Footer() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { themeConfig = {} } = siteConfig;
  const { footer } = themeConfig;

  const { copyright, links = [], logo = {} } = footer || {};
  const logoUrl = useBaseUrl(logo.src);

  if (!footer) {
    return null;
  }

  return (
    <footer
      className={clsx("footer", {
        "footer--dark": footer.style === "dark",
      })}
    >
      <div className="container ">
        <div className="col footer__col">
          {logo.href ? (
            <a
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLogoLink}
            >
              <FooterLogo alt={logo.alt} url={logoUrl} />
            </a>
          ) : (
            <FooterLogo alt={logo.alt} url={logoUrl} />
          )}
        </div>

        {links && links.length > 0 && (
          <div className="row footer__links">
            <div className="col footer__col">
              <ul className={`row ${styles.iconslist}`}>
                <li>
                  <a
                    href="https://github.com/sumelms"
                    className={styles.footerLogoLink}
                  >
                    <FiGithub size={20} />
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLogoLink}>
                    <FiLinkedin size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/sumelms"
                    className={styles.footerLogoLink}
                  >
                    <FiTwitter size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com/sumelms"
                    className={styles.footerLogoLink}
                  >
                    <FiFacebook size={20} />
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLogoLink}>
                    <FiInstagram size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/educacaoadistancia"
                    className={styles.footerLogoLink}
                  >
                    <FiYoutube size={20} />
                  </a>
                </li>
              </ul>
            </div>
            {links.map((linkItem, i) => (
              <div key={i} className="col footer__col ">
                {linkItem.title != null ? (
                  <h4 className="footer__title">{linkItem.title}</h4>
                ) : null}
                {linkItem.items != null &&
                Array.isArray(linkItem.items) &&
                linkItem.items.length > 0 ? (
                  <ul className="footer__items">
                    {linkItem.items.map((item, key) =>
                      item.html ? (
                        <li
                          key={key}
                          className="footer__item"
                          dangerouslySetInnerHTML={{
                            __html: item.html,
                          }}
                        />
                      ) : (
                        <li key={item.href || item.to} className="footer__item">
                          <FooterLink {...item} />
                        </li>
                      )
                    )}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        )}
        {copyright && (
          <div className="text--right margin-top--xl">
            <div
              className={styles.footerLogoLink}
              dangerouslySetInnerHTML={{
                __html: copyright,
              }}
            />
            <a
              className={styles.footerLogoLink}
              href="https://www.freepik.com/free-photos-vectors/business"
            >
              Vector created by stories - www.freepik.com
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
