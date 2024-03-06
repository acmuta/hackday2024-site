export default function Form() {
  return (
    <div className="flex justify-center z-10">
      <iframe
        src={process.env.GOOGLE_FORM_URL}
        width="640"
        height="3009"
        frameBorder={'0'}
        marginHeight={0}
        marginWidth={0}
      >
        Loading…
      </iframe>
    </div>
  )
}
