import React from 'react';

const Events = () => {
  const events = [
    {
      title: "International Security Conference",
      date: "April 15-17, 2024",
      location: "Keystone Academy, Beijing",
      description: "A comprehensive three-day conference focusing on global security challenges and diplomatic solutions.",
      image: "https://placehold.co/600x400",
      committees: ["Security Council", "NATO", "Crisis Committee"],
      link: "https://keycas.cn"
    },
    {
      title: "Climate Action Summit",
      date: "May 20-22, 2024",
      location: "Keystone Academy, Beijing",
      description: "Address pressing environmental issues and develop innovative solutions for climate change.",
      image: "https://placehold.co/600x400",
      committees: ["UNEP", "WHO", "Economic and Social Council"],
      link: "https://keycas.cn"
    }
  ];

  return (
    <div>
      <div className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-gray-300">Discover our upcoming conferences and diplomatic simulations</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img className="h-full w-full object-cover md:w-48" src={event.image} alt={event.title} />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
                  <p className="text-gray-600 mb-4">{event.date} | {event.location}</p>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Committees:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      {event.committees.map((committee, idx) => (
                        <li key={idx}>{committee}</li>
                      ))}
                    </ul>
                  </div>
                  <a href={event.link}>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                    Register Now
                  </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;