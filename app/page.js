"use client"
import { useState } from "react";
import styles from "./page.module.scss";
import { AnimatePresence, motion } from 'framer-motion'
import WidgetBot from '@widgetbot/react-embed'
import { InstagramEmbed, FacebookEmbed } from 'react-social-media-embed';


const links = [
  { title: "Discord", subtitle: "discord 群組", linktext: "", link: "", icon: "/images/discord.jpg", bg: "", html: <WidgetBot width={"100%"} height={"100%"} server="1128923700306133013" channel="1129016420022353921" />, h: 1, w: 2 },
  { title: "Github", subtitle: "github 個人檔案", linktext: "", link: "", icon: "/images/github.jpg", bg: "", html: <><img src="https://github-readme-stats.vercel.app/api?username=tooty-1135&locale=zh-tw&show_icons=true" /><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=tooty-1135&layout=compact&locale=zh-tw" /></>, h: 1, w: 1 },
  { title: "NGGYU", subtitle: "Never gonna give you up", linktext: "", link: "", icon: "/images/nggyu.jpg", bg: "", html: <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/track/4PTG3Z6ehGkBFwjybzWkR8?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>, h: 2, w: 2 },
  { title: "Instagram", subtitle: "Instagram 個人檔案", linktext: "", link: "", icon: "/images/instagram.png", bg: "", html: <InstagramEmbed url="https://www.instagram.com/asteroid_owo/" linkText={"在 Instagram 上查看"} width={"100%"} height={"100%"} />, h: 1, w: 1 },
  { title: "Facebook", subtitle: "Facebook 個人檔案", linktext: "", link: "", icon: "/images/facebook.jpg", bg: "", html: <FacebookEmbed url="https://www.facebook.com/asteroidowo/posts/pfbid0RDxoopNhg5bgJT9zSbYFTmKq4MozyJ9qzpSw6zcaWG58KobweHMBskZWmbPaALWbl" linkText={"在 Facebook 上查看"} width={"100%"} height={"100%"} />, h: 1, w: 1 },
]

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className={styles.layout}>
      <div className={styles.profile}>
        <div className={styles.avatar} />
        <div>
          <h3>Asteroid</h3>
          <h5 style={{ color: "var(--color-text2)" }}>ΛSTΞROID</h5>
        </div>
      </div>
      <motion.div initial={false} transition={{ staggerChildren: 0.07, delayChildren: 0.2 }} className={styles.gridLayout}>
        {links.map((e, i) => (
          <motion.div style={{ gridRow: `span ${e.h}`, gridColumn: `span ${e.w}` }} initial={{ translateY: 20, boxShadow: "0 2px 4px rgba(0, 0, 0, .04)" }} whileHover={{ boxShadow: "0 2px 4px rgba(0, 0, 0, .1)" }} animate={{ translateY: 0 }} layoutId={`${i}`} key={i} onClick={() => { setSelectedItem({ id: i, item: e }); console.log(i) }}>
            <motion.div style={{ backgroundImage: `url(${e.icon})` }} className={styles.icon}></motion.div>
            <motion.h3>{e.title}</motion.h3>
            <motion.h5>{e.subtitle}</motion.h5>
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence>
        {selectedItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.popup}>
              <motion.div className={styles.container} layoutId={`${selectedItem.id}`}>
                <motion.div>
                  <motion.div style={{ backgroundImage: `url(${selectedItem.item.icon})` }} className={styles.icon}></motion.div>
                  <motion.h3>{selectedItem.item.title}</motion.h3>
                  <motion.h5>{selectedItem.item.subtitle}</motion.h5>
                  <motion.svg onClick={() => setSelectedItem(null)} className={styles.close_btn} transition={{ duration: .2 }} initial={{ opacity: .8 }} whileHover={{ opacity: .5 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path xmlns="http://www.w3.org/2000/svg" d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" /></motion.svg>
                </motion.div>
                <motion.div style={{ width: "100%", padding: "1rem" }}>{selectedItem.item.html}</motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className={styles.popupBackdrop}
              onClick={() => setSelectedItem(null)}
              variants={{
                hidden: {
                  opacity: 0,
                  transition: {
                    duration: 0.16
                  }
                },
                visible: {
                  opacity: 0.8,
                  transition: {
                    delay: 0.04,
                    duration: 0.2
                  }
                }
              }}
              initial="hidden"
              exit="hidden"
              animate="visible"
            />
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
