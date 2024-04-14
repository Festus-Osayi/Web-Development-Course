import { useState } from "react"
import { questions } from "./data/data"
export default function App() {
  return (
    <FlashCard />
  )
}

export function FlashCard() {
  const [selectedId, setSelectedId] = useState(null)

  const handleClick = (ids) => {
    setSelectedId(ids)
    
  }

  return (
    <div className="flashcards">
      {questions.length > 0 && questions.map((question) => (
        <div key={question.id}
          onClick={() => handleClick(question.id)} className={selectedId === question.id && 'selected'}>
          <p>{selectedId === question.id ? question.answer : question.question}</p>
        </div>

      ))}

    </div>
  )
}
