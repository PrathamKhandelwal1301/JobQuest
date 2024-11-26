import { FeedbackPoint } from "./FeedbackPoint"

export function FeedbackSection({ title, items }) {
  return (
    <div className="p-6 border-2 border-black rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {items.map((item, index) => (
        <FeedbackPoint key={index} heading={item.heading} description={item.description} reason={item.reason} />
      ))}
    </div>
  )
}
