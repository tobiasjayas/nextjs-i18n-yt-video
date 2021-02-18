import Head from "next/head";
import Link from "next/link";
import classes from "../styles/layout.module.css";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

export default function Layout({ children }) {
  let router = useRouter();
  let { t } = useTranslation();
  console.log(router.locales);

  return (
    <div>
      <Head>
        <title>i18n Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={classes.header}>
        <nav className={classes.nav}>
          <Link href="/">
            <a>{t("common:home")}</a>
          </Link>
          <Link href="/about">
            <a>{t("common:about")}</a>
          </Link>
        </nav>
      </header>

      <main className={classes.content}>{children}</main>

      <footer className={classes.footer}>
        <p>© 2021</p>

        <ul>
          {router.locales.map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                <a>{locale}</a>
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
