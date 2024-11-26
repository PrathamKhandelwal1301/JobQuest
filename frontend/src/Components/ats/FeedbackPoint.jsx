import { Card, CardContent, CardHeader, CardTitle } from "./card"

export function FeedbackPoint({ heading, description, reason }) {
  return (
    <Card className="mb-4 border-black">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{heading}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2">{description}</p>
        <p className="text-sm text-gray-600">{reason}</p>
      </CardContent>
    </Card>
  )
}