export default function MapSection() {
  return (
    <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft">
      <iframe
        title="Sila Market location"
        src="https://www.google.com/maps?q=Eppinghofer%20Str.%2077,%2045468%20M%C3%BClheim%20an%20der%20Ruhr&output=embed"
        className="h-[500px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
