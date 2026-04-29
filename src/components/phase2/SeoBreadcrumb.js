import React from "react";
import Link from "next/link";
import styles from "./Phase2.module.css";

// items: [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Post Title' }]
const SeoBreadcrumb = ({ items = [] }) => {
  if (!items.length) return null;
  return (
    <nav aria-label="Breadcrumb" className={styles.crumb}>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={`${item.label}-${idx}`}>
            {idx > 0 && <span className={styles.crumbSep}>/</span>}
            {isLast || !item.href ? (
              <span className={styles.crumbActive}>{item.label}</span>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default SeoBreadcrumb;
