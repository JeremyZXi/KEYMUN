import React from 'react';
// Link not needed for external MS Forms, so removed
import Footer from "../components/Footer.tsx";
import { registrationForms } from "../data/registrationForms";

const ACCENT = "#005694";
const ACCENT_HOVER = "#004070";

const Registration = () => {
    const forms = registrationForms || [];
    const hasForms = forms.length > 0;

    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero section */}
            <div className="bg-[#192236] text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Registration</h1>
                    <p className="text-gray-300">
                        Choose the appropriate form below to complete your registration.
                    </p>
                </div>
            </div>

            {/* Forms grid */}
            <main className="flex-1">
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {hasForms ? (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {forms.map((form) => (
                                <FormCard key={form.id || form.url} form={form} />
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl shadow p-8 text-center text-gray-600">
                            No registration forms are available yet. Please check back soon.
                        </div>
                    )}
                </section>
            </main>

            <Footer/>
        </div>
    );
};

const FormCard = ({ form }) => {
    const { title, description, url, badge, note } = form || {};
    const hasUrl = Boolean(url);

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
            <div className="mb-3">
                <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                {badge && (
                    <span className="mt-2 inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium text-gray-700">
            {badge}
          </span>
                )}
            </div>

            {description && <p className="text-gray-600 mb-4">{description}</p>}
            {note && <p className="text-sm text-gray-500 mb-4">{note}</p>}

            <div className="mt-auto flex flex-wrap items-center gap-3">
                <a
                    href={hasUrl ? url : "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-md font-semibold text-white transition-colors"
                    style={{ backgroundColor: ACCENT }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
                    aria-disabled={!hasUrl}
                >
                    {hasUrl ? "Open Form" : "Form not available"}
                </a>

                {hasUrl && (
                    <button
                        type="button"
                        onClick={() => navigator.clipboard?.writeText(url)}
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-md font-semibold border border-gray-300 text-gray-800 hover:bg-gray-50"
                    >
                        Copy Link
                    </button>
                )}
            </div>
        </div>
    );
};

export default Registration;
