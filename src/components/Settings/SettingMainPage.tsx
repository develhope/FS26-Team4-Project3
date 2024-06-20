export default function Setting() {
  return (
    <div className="bg-purple-500 text-white h-screen p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Impostazioni</h1>
      <ul className="space-y-2">
        <li>Centro e gestione degli account</li>
        <li>La tua attività</li>
        <li>Notifiche</li>
        <li>Tempo di utilizzo</li>
        <li>Privacy dell’account</li>
        <li>Amici</li>
        <li>Interazioni</li>
        <li>Lingua</li>
        <li>Aiuto</li>
      </ul>
      <hr className="my-4 border-white" />
      <ul className="space-y-2">
        <li>Accesso</li>
        <li>Aggiungi account</li>
        <li>Esci</li>
      </ul>
    </div>
  );
}
