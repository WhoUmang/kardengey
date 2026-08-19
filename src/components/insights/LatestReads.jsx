import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import articles from "../../data/articles";

export default function LatestReads() {
  const latestArticles = [...articles]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime()
    )
    .slice(0, 3);

  return (
    <section
      id="latest-reads"
      className="relative overflow-hidden bg-[#050505] px-[6vw] py-32 md:py-40"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* Header */}

        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.45em] text-blue-500"
            >
              Kardengey / Insights
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 text-[clamp(3rem,6vw,6rem)] font-black uppercase leading-[0.85] tracking-[-0.07em]"
            >
              Latest
              <br />
              <span className="text-neutral-600">
                thinking.
              </span>
            </motion.h2>
          </div>

          <Link
            to="/insights"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
          >
            View all insights

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </Link>

        </div>

        {/* Articles */}

        <div className="border-b border-white/10">

          {latestArticles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="group border-b border-white/10 last:border-b-0"
            >
              <Link
                to={`/insights/${article.slug}`}
                className="grid gap-6 py-8 md:grid-cols-[70px_180px_1fr_100px] md:items-center md:py-10"
              >

                {/* Number */}

                <span className="text-[10px] tracking-[0.2em] text-neutral-700 transition-colors duration-300 group-hover:text-blue-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Category */}

                <span className="text-[9px] uppercase tracking-[0.25em] text-blue-500">
                  {article.category}
                </span>

                {/* Title */}

                <div>
                  <h3 className="max-w-3xl text-2xl font-bold uppercase leading-[0.95] tracking-[-0.04em] text-neutral-400 transition-colors duration-500 group-hover:text-white md:text-3xl">
                    {article.title}
                  </h3>

                  <div className="mt-4 flex items-center gap-4 text-[9px] uppercase tracking-[0.2em] text-neutral-700">
                    <span>{article.date}</span>
                    <span>/</span>
                    <span>{article.read}</span>
                  </div>
                </div>

                {/* Arrow */}

                <span className="hidden justify-end text-xl text-neutral-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-500 md:flex">
                  ↗
                </span>

              </Link>
            </motion.article>
          ))}

        </div>

        {/* Bottom statement */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 flex flex-col gap-3 text-[9px] uppercase tracking-[0.3em] text-neutral-700 md:flex-row md:items-center md:justify-between"
        >
          <span>
            Ideas / Observations / Experiments
          </span>

          <span>
            Updated with every new article
          </span>
        </motion.div>

      </div>
    </section>
  );
}