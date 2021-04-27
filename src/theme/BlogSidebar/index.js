/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
export default function BlogSidebar({sidebar}) {
  if (sidebar.items.length === 0) {
    return null;
  }

  return (
    <div className={clsx(styles.sidebar, 'thin-scrollbar')}>
      <h3 className={styles.sidebarItemTitle}>Featured</h3>
      <ul className={styles.sidebarItemList}>
        <li className={styles.sidebarItem}><LinkWrapped href="/blog/how-temporal-simplified-checkr-workflows">Case Study: Checkr</LinkWrapped></li>
        <li className={styles.sidebarItem}><LinkWrapped href="/blog/Temporal-a-central-brain-for-Box">Case Study: Box</LinkWrapped></li>
        <li className={styles.sidebarItem}><LinkWrapped href="/blog/reliable-crypto-transactions-at-coinbase">Case Study: Coinbase</LinkWrapped></li>
        <li className={styles.sidebarItem}><LinkWrapped href="/blog/funding-announcement/">Series A Funding Announcement</LinkWrapped></li>
        <li className={styles.sidebarItem}><LinkWrapped href="/blog/sergey-why-i-joined-temporal/">Why I joined Temporal</LinkWrapped></li>
        <li className={styles.sidebarItem}><LinkWrapped href="/blog/workflow-engine-principles/">Designing A Workflow Engine</LinkWrapped></li>
      </ul>
      <h3 className={styles.sidebarItemTitle}>{sidebar.title}</h3>
      <ul className={styles.sidebarItemList}>
        {sidebar.items.map((item) => {
          return (
            <li key={item.permalink} className={styles.sidebarItem}>
              <Link
                isNavLink
                to={item.permalink}
                className={styles.sidebarItemLink}
                activeClassName={styles.sidebarItemLinkActive}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <h3 className={styles.sidebarItemTitle}>Tags</h3>
      <ul className={styles.tagsList}>
        <li><a href="https://docs.temporal.io/blog/tags/community">#community</a></li>
        <li><a href="https://docs.temporal.io/blog/tags/errors">#errors</a></li>
        <li><a href="https://docs.temporal.io/blog/tags/bug">#bug</a></li>
        <li><a href="https://docs.temporal.io/blog/tags/orleans">#orleans</a></li>
      </ul>
    </div>
  );
}

function LinkWrapped({href, children}) {
  return <Link isNavLink to={href} className={styles.sidebarItemLink} activeClassName={styles.sidebarItemLinkActive}>
    {children}
  </Link>
}