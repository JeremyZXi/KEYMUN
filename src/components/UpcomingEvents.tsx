import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const UpcomingEvents = () => {
  const events = [
    {
      title: "International Security Conference",
      date: "April 15-17, 2024",
      location: "New York City, USA",
      description: "Join us for a three-day conference focusing on global security challenges.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Climate Action Summit",
      date: "May 20-22, 2024",
      location: "London, UK",
      description: "Address pressing environmental issues and climate change solutions.",
      image: "https://images.unsplash.com/photo-1569951715332-3d2d4c89b441?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="upcoming-events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <a
                  href={`/events`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;