import { useState } from 'react'
import './Events.css'

const eventsData = [
  {
    id: 1,
    title: 'Karaoke Abend',
    description: 'Unterhaltsamer Abend mit Karaoke und italienischen Spezialitäten.',
    days: ['Montag', 'Dienstag', 'Donnerstag'],
    time: '19:00 - 23:00',
    type: 'Wöchentlich',
    color: 'gold'
  },
  {
    id: 2,
    title: 'Live Musik',
    description: 'Live-Musik während Sie unsere köstlichen Gerichte geniessen.',
    days: ['Freitag', 'Samstag'],
    time: '20:00 - 24:00',
    type: 'Wöchentlich',
    color: 'terracotta'
  },
  {
    id: 3,
    title: 'Weinverkostung',
    description: 'Ausgewählte italienische Weine mit feinen Antipasti.',
    days: ['Sonntag'],
    time: '17:00 - 20:00',
    type: 'Monatlich',
    color: 'olive'
  }
]

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  const getDayAbbreviation = (day) => {
    const abbreviations = {
      'Montag': 'Mo',
      'Dienstag': 'Di',
      'Mittwoch': 'Mi',
      'Donnerstag': 'Do',
      'Freitag': 'Fr',
      'Samstag': 'Sa',
      'Sonntag': 'So'
    }
    return abbreviations[day] || day.substring(0, 2)
  }

  return (
    <section id="events" className="events">
      <div className="events-bg">
        <div className="bg-pattern-1"></div>
        <div className="bg-pattern-2"></div>
      </div>
      
      <div className="container">
        <div className="events-header">
          <span className="section-label">Veranstaltungen</span>
          <h2 className="section-title">
            Unsere <span className="gold-accent">Events</span>
          </h2>
          <p className="section-subtitle">
            Erleben Sie besondere Momente bei uns - von Karaoke bis Live-Musik
          </p>
        </div>

        <div className="events-grid">
          {eventsData.map((event, index) => (
            <div
              key={event.id}
              className={`event-card event-${event.color} ${selectedEvent === event.id ? 'expanded' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setSelectedEvent(event.id)}
              onMouseLeave={() => setSelectedEvent(null)}
            >
              <div className="event-card-inner">
                {/* Icon Section */}
                <div className="event-icon-wrapper">
                  <div className="event-icon-bg"></div>
                  <div className="event-icon">
                    {event.id === 1 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
                        <path d="M19 10v2a7 7 0 01-14 0v-2"/>
                        <line x1="12" y1="19" x2="12" y2="23"/>
                        <line x1="8" y1="23" x2="16" y2="23"/>
                      </svg>
                    )}
                    {event.id === 2 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M9 18V5l12-2v13"/>
                        <circle cx="6" cy="18" r="3"/>
                        <circle cx="18" cy="16" r="3"/>
                      </svg>
                    )}
                    {event.id === 3 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M8 21l4-7 4 7"/>
                        <path d="M12 3a5 5 0 015 5c0 7-5 10-5 10s-5-3-5-10a5 5 0 015-5z"/>
                      </svg>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="event-content">
                  <div className="event-header">
                    <div className="event-title-wrapper">
                      <h3 className="event-title">{event.title}</h3>
                      <span className="event-type">{event.type}</span>
                    </div>
                  </div>
                  
                  <p className="event-description">{event.description}</p>
                  
                  <div className="event-details">
                    {/* Days Calendar */}
                    <div className="event-days-section">
                      <div className="detail-header">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                          <line x1="16" y1="2" x2="16" y2="6"/>
                          <line x1="8" y1="2" x2="8" y2="6"/>
                          <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        <span className="detail-label">Wochentage</span>
                      </div>
                      <div className="days-calendar">
                        {event.days.map((day, i) => (
                          <div key={i} className="day-item">
                            <span className="day-abbr">{getDayAbbreviation(day)}</span>
                            <span className="day-full">{day}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Time Section */}
                    <div className="event-time-section">
                      <div className="detail-header">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        <span className="detail-label">Uhrzeit</span>
                      </div>
                      <div className="time-display">
                        <span className="time-value">{event.time}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="event-decoration">
                  <div className="decoration-line"></div>
                  <div className="decoration-dot"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="events-note">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <p>
            <strong>Hinweis:</strong> Diese Informationen sind Platzhalter. 
            Die genauen Event-Details werden in Kürze aktualisiert.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Events

