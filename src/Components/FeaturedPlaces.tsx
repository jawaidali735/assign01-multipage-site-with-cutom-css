import '../styles/featuredplaces.css'

const FeaturedPlaces = () => {
  
  const places = [
    {
      id: 1,
      name: 'Paris',
      description: 'The city of lights, known for the Eiffel Tower and art museums.',
      imageUrl: '/paris.jpg',
    },
    {
      id: 2,
      name: 'Tokyo',
      description: 'A bustling city blending modern technology with traditional temples.',
      imageUrl: '/japan.jpg',
    },
    {
      id: 3,
      name: 'New York',
      description: 'The city that never sleeps, famous for Times Square and Central Park.',
      imageUrl: 'newyork.jpg',
    },
    {
      id: 4,
      name: 'Sydney',
      description: 'Known for the Sydney Opera House and beautiful beaches.',
      imageUrl: '/sydeny.jpg',
    },
    {
      id: 5,
      name: 'Rome',
      description: 'A city filled with ancient history and iconic architecture, like the Colosseum.',
      imageUrl: '/rome.jpg',
    },
    {
      id: 6,
      name: 'Dubai',
      description: 'Famous for luxury shopping, modern architecture, and vibrant nightlife.',
      imageUrl: '/dubai.jpg',
    },
    
  ];
  

  return (
    <section className="featured-places">
        <p>KNOW ABOUT SOME PLACES BEFORE YOUR TRAVEL</p>
      <h2 className="section-title">FEATURED PLACES</h2>
      <div className="places-container">
        {places.map((place) => (
          <div key={place.id} className="place-card">
            <img src={place.imageUrl} alt={place.name} className="place-image" />
            <div className="place-info">
              <h3 className="place-name">{place.name}</h3>
              <p className="place-description">{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPlaces;
