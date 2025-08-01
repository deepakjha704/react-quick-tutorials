import "./App.css";
import Faq from "./Faq";
const dummy = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor cats live 15 years on average.",
  },
];
function App() {
  return (
    <div className="flex flex-col w-full">
      {dummy.map((item) => (
        <Faq item={item} />
      ))}
    </div>
  );
}

export default App;
