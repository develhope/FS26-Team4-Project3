import "../../index.css";

export default function Login2() {
  return (
    <>
      <div className="splashSection flex-auto align-center justify-center ">
        <h2 className="text-xl font-sans">Inserisci la tua data di nascita</h2>
        <div className="splashFormContainer flex-col font-sans">
          <input
            type="date"
            className="border-solid border-2 border-white rounded"
          />
          <button
            type="submit"
            className="text-center bg-purple w-64  h-12 rounded-sm "
          >
            ACCEDI
          </button>
        </div>
      </div>
    </>
  );
}
