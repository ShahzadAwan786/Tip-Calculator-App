export default function ResultsRow({ label, value }) {
  return (
    <div className="flex justify-between items-center ">
      <div className="space-y-1">
        <p className="text-muted font-semibold text-sm sm:text-base">{label}</p>
        <p className="text-xs sm:text-sm font-semibold text-accent ">
          / person
        </p>
      </div>
      <p className="text-3xl sm:text-5xl font-semibold text-secondary ">
        ${value.toFixed(2)}
      </p>
    </div>
  );
}
