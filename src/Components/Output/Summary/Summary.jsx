import { useSelector } from "react-redux";


const Summary = () => {
  const summaryInfo = useSelector((state) => state.form.summaryInfo);

  return (
    <article className="cv-container px-8 py-4 font-mono">
      <h3 className="text-2xl">{ summaryInfo.title }</h3>
      <p className="text-pretty">
        {summaryInfo.content}
      </p>
    </article>
  )
}

export default Summary