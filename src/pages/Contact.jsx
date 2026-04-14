import MainLayout from "../layouts/MainLayout";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import MapSection from "../components/contact/MapSection";

export default function Contact() {
  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Contact
          </p>
          <h1 className="mt-2 text-4xl font-black text-slate-900">
            Visit or contact Sila Market
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Make it easy for customers to find, call and contact the store.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <ContactInfo />
            <ContactForm />
          </div>

          <MapSection />
        </div>
      </section>
    </MainLayout>
  );
}
