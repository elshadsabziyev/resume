'use client';

export default function Hero() {
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    event.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" id="home">
      <div className="absolute inset-0 z-0"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Elshad Sabziyev
        </h1>
        <p className="text-2xl text-gray-300 mb-8">Process Automation Engineer</p>
        <a
          href="#about"
          onClick={(e) => handleScroll(e, '#about')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out hover:shadow-2xl"
        >
          Who Am I?
        </a>
      </div>
    </section>
  );
}