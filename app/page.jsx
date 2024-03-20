"use client"

import { useEffect, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoReloadCircleSharp } from "react-icons/io5";

export default function Home() {
  const [verse, setVerse] = useState("...")
  const [verseNumber, setVerseNumber] = useState("...")
  const [chapter, setChapter] = useState("")

  const getVerse = async () => {
    const anyVerse = Math.floor(Math.random() * 6348) + 1;
    const response = await fetch(`https://api.alquran.cloud/v1/ayah/${anyVerse}/en.asad`)

    const verseData = await response.json()
    setVerse(verseData.data.text)
    setChapter(verseData.data.surah.englishName)
    setVerseNumber(verseData.data.numberInSurah)
  }

  const handleGetVerse = () => {
    getVerse()
  }

  useEffect(() => {    
    getVerse()
  }, [])

  return (
    <main className="main">
      <RiDoubleQuotesL fontSize="25px"/>
      <p className="verse">{verse}</p>
      <div className="verse-details">
        <p className="verse-details-div-content">Chapter: </p>
        <div className="verse-details-div">
          <p className="verse-details-div-content">{chapter} [{verseNumber}]</p>
        </div>
        <button onClick={handleGetVerse} className="toggle-btn reload"><IoReloadCircleSharp /></button>
      </div>
    </main>
  );
}
