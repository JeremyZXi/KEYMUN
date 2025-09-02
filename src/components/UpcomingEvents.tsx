// src/components/CommitteeHighlights.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Users, ChevronRight } from 'lucide-react';
import { committees } from '../data/committeeData';

const ACCENT = '#005694';
const ACCENT_HOVER = '#004070';
const ACCENT_SOFT = 'rgba(0,86,148,0.08)';

const CommitteeHighlights = () => {
  const featuredCommittees = (committees || []).slice(0, 4);

  return (
      <section
          id="committee-highlights"
          className=""

      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Committees
            </h2>
            <div
                className="h-1 w-24 rounded mx-auto mt-6"
                style={{ backgroundColor: ACCENT }}
            />
          </header>

          {/* Grid with equal-height cards */}
          {featuredCommittees.length > 0 ? (
              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredCommittees.map((committee) => (
                    <li key={committee?.id || committee?.name} className="flex">
                      <ArticleCard committee={committee} />
                    </li>
                ))}
              </ul>
          ) : (
              <EmptyState />
          )}

          {/* View All */}
          {/*<div className="text-center mt-14">
            <Link
                to="/committees"
                className="inline-flex items-center gap-2 border-2 px-6 py-2.5 rounded-md font-medium transition-colors duration-300"
                style={{ borderColor: ACCENT, color: ACCENT }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = ACCENT;
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = ACCENT;
                }}
            >
              View All Committees <ChevronRight className="h-5 w-5" />
            </Link>
          </div>*/}
        </div>
      </section>
  );
};

const ArticleCard = ({ committee }) => {
  const { id, name, topic, chair, coChair } = committee || {};

  return (
      <article
          className="group bg-white rounded-xl overflow-hidden shadow-sm ring-1 ring-gray-100
                 transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                 flex flex-col h-full w-full"
      >
        {/* Accent strip */}
        <div className="h-1.5" style={{ backgroundColor: ACCENT }} />

        <div className="p-6 flex flex-col flex-1">
          {/* Title & Topic */}
          <header>
            <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
              {name || 'Untitled Committee'}
            </h3>
            {topic && (
                <p className="text-gray-600 text-sm mt-2">
                  {topic}
                </p>
            )}
          </header>

          {/* Meta */}
          <dl className="mt-5 space-y-2 text-gray-700">
            {chair && (
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2" style={{ color: ACCENT }} />
                  <dt className="sr-only">Chair</dt>
                  <dd className="text-sm">
                    <span className="font-medium">Chair: </span>{chair}
                  </dd>
                </div>
            )}
            {coChair && (
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" style={{ color: ACCENT }} />
                  <dt className="sr-only">Co-Chair</dt>
                  <dd className="text-sm">
                    <span className="font-medium">Co-Chair: </span>{coChair}
                  </dd>
                </div>
            )}
          </dl>

          {/* Spacer */}
          <div className="flex-1" />

          {/* CTA */}
          <div className="mt-6">
            <Link
                to={`/committees/${id}`}
                className="inline-flex w-full items-center justify-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{ backgroundColor: ACCENT }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
                aria-label={`Learn more about ${name}`}
            >
              Learn More <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
  );
};

const EmptyState = () => (
    <div className="bg-white rounded-xl p-10 text-center shadow-sm ring-1 ring-gray-100">
      <h3 className="text-lg font-semibold text-gray-900">No committees yet</h3>
      <p className="text-gray-600 mt-2">
        Committees will appear here once they’re published.
      </p>
    </div>
);

export default CommitteeHighlights;
