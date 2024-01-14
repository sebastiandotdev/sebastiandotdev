import Experience from "@/components/experience";
import Header from "@/components/header";
import { Available, Briefcase, Location } from "@/components/icons";
import Title from "@/components/title";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  const e = useTranslations("Title");
  return (
    <>
      <section>
        <article className="flex flex-col items-start justify-start pt-44">
          <h1 className="text-5xl font-bold">{t("title")}</h1>
          <p className="text-secondary pt-4 pb-5">{t("profession")}</p>
          <p className="text-secondary text-base text-balance">
            {t("description")}
          </p>
        </article>
        <article className="pt-6 flex gap-8 items-center">
          <p className="flex items-center gap-2 text-secondary">
            <Location />
            Cesar, Valledupar
          </p>
          <p className="flex items-center gap-0.5 text-secondary">
            <Available />
            {t("available")}
          </p>
        </article>
      </section>
      <Header />
      <section className='pt-28'>
        <Title>
          <Briefcase />
          {e('work')}
        </Title>
        <Experience />
      </section>
    </>
  );
}
