"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const [verse, setVerse] = useState("...")
  const [verseNumber, setVerseNumber] = useState("...")
  const [chapter, setChapter] = useState("")

  useEffect(() => {
    const anyVerse = Math.floor(Math.random() * 6348) + 1;
    async function getVerse() {
      const response = await fetch(`https://api.alquran.cloud/v1/ayah/${anyVerse}/en.asad`)

      const verseData = await response.json()
      setVerse(verseData.data.text)
      setChapter(verseData.data.surah.englishName)
      setVerseNumber(verseData.data.numberInSurah)
    }

    getVerse()
  }, [])
  return (
    <main className="main">
      <p className="verse">"{verse}"</p>
      <div className="verse-details">
        <p className="verse-details-div-content">Chapter: </p>
        <div className="verse-details-div">
          <p className="verse-details-div-content">{chapter} [{verseNumber}]</p>
        </div>

      </div>
    </main>
  );
}
