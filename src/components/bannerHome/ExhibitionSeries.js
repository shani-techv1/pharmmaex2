import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Crausel.module.css"; // optional: keep your existing styles here

const pastEvents = [
  {
    id: 0,
    img: "/assests/img/image58.svg",
    title: "03–04 October, 2025",
    venue: "Bombay exhibition centre, Mumbai",
    link: "/gallery/mumbai",
    alt: "Mumbai",
  },
  {
    id: 1,
    img: "/assests/img/image1.webp",
    title: "02-03 May, 2025",
    venue: "HITEX Exhibition Centre, Hyderabad",
    link: "/gallery/hyderabad",
    alt: "Hyderabad",
  },
  {
    id: 2,
    img: "/assests/img/image2.webp",
    title: "14-15 December, 2024",
    venue: "Vigyan Bhawan, Science City, Ahmedabad",
    link: "/gallery/ahmedabad",
    alt: "Ahmedabad",
  },
  {
    id: 3,
    img: "/assests/img/image3.webp",
    title: "21-22 June, 2024",
    venue: "Auto Cluster Exhibition Centre, Chinchwad-Pune",
    link: "/gallery/pune",
    alt: "Pune",
  },
  {
    id: 4,
    img: "/assests/img/manpho.jpg",
    title: "02-03 February, 2024",
    venue: "Manpho Convention Centre, Bangalore",
    link: "/gallery/banglore",
    alt: "Bangalore",
  },
];

const ExhibitionSeries = () => {
  const eventDate = new Date("2026-02-20T09:00:00.000Z");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  // track mobile to hide arrows
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();

      if (diff > 0) {
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        setTimeLeft({ days, hours, minutes });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      }
    };

    updateCountdown();
    const t = setInterval(updateCountdown, 60 * 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // react-multi-carousel responsive breakpoints
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  // Custom arrow components (hide on mobile)
  const CustomLeftArrow = ({ onClick }) => {
    if (isMobile) return null;
    return (
      <button
        aria-label="Previous"
        className="rmc-arrow rmc-left"
        onClick={onClick}
        style={{
          position: "absolute",
          left: 1,
          top: "25%",
          zIndex: 30,
          border: "none",
          background: "rgba(0,0,0,0.6)",
          color: "#fff",
          width: 36,
          height: 36,
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        ‹
      </button>
    );
  };

  const CustomRightArrow = ({ onClick }) => {
    if (isMobile) return null;
    return (
      <button
        aria-label="Next"
        className="rmc-arrow rmc-right"
        onClick={onClick}
        style={{
          position: "absolute",
          right: 1,
          top: "25%",
          zIndex: 30,
          border: "none",
          background: "rgba(0,0,0,0.6)",
          color: "#fff",
          width: 36,
          height: 36,
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        ›
      </button>
    );
  };

  return (
    <section className="exhibition-series-section py-5">
      <div className="container innerContainer">
        <h2 className="fw-bold text-center mb-5 exhibition-series-title">
          PharmmaEx Exhibitions Series
        </h2>

        {/* Upcoming Exhibition */}
        <div className="mb-5">
          <h5 className="mb-3 exhibition-series-subtitle">Upcoming Exhibition</h5>
          <div className="d-flex flex-wrap align-items-center gap-4">
            <img
              src="/assests/img/entryplaza.jpg"
              alt="Bombay Exhibition Centre"
              className="exhibition-series-upcoming-img rounded-4"
            />
            <div className="d-flex gap-3 align-items-center exhibition-series-countdown">
              <div className="exhibition-series-countdown-box">
                <div className="fw-bold" style={{ fontSize: "2rem" }}>
                  {timeLeft.days}
                </div>
                <div style={{ fontSize: "1rem" }}>Days</div>
              </div>
              <div className="exhibition-series-countdown-box">
                <div className="fw-bold" style={{ fontSize: "2rem" }}>
                  {timeLeft.hours}
                </div>
                <div style={{ fontSize: "1rem" }}>Hours</div>
              </div>
              <div className="exhibition-series-countdown-box">
                <div className="fw-bold" style={{ fontSize: "2rem" }}>
                  {timeLeft.minutes}
                </div>
                <div style={{ fontSize: "1rem" }}>Minutes</div>
              </div>
            </div>
            <div className="ms-3 exhibition-series-upcoming-details">
              <div className="fw-bold">20-21 February, 2026</div>
              <div>Codissia Trade Fair Complex Coimbatore, Tamil Nadu</div>
            </div>
            <div className="d-flex gap-2 ms-3 exhibition-series-btn-group">
              <a
                href="https://www.pharmmaexregistration.in/Pharmaex/visitor.aspx"
                className="exhibition-series-btn"
              >
                Pre-Registration
              </a>
              <a href="/exhibitor" className="exhibition-series-btn">
                Become Exhibitor
              </a>
            </div>
          </div>
        </div>

        {/* Past Exhibitions - react-multi-carousel */}
        <div>
          <h5 className="mb-3 exhibition-series-subtitle">Successful Events</h5>

          <div style={{ position: "relative" }}>
            <Carousel
              responsive={responsive}
              ssr={false}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3500}
              keyBoardControl={true}
              // showDots={!isMobile ? false : true} // show dots only on mobile (you can change)
              arrows={true}
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
              containerClass="exhibition-multi-carousel"
              itemClass="exhibition-multi-item"
              removeArrowOnDeviceType={["mobile"]} // extra safety: removes arrows on mobile
              renderDotsOutside={false}
              draggable={true}
              swipeable={true}
            >
              {pastEvents.map((ev) => (
                <div className="px-2" key={ev.id}>
                  <div className="exhibition-series-card rounded-4" style={{ height: "100%" }}>
                    <img
                      src={ev.img}
                      alt={ev.alt}
                      className="img-fluid rounded-4 exhibition-series-card-img"
                    />
                    <div className="mt-3 exhibition-series-card-details">
                      <div>
                        <strong>{ev.title}</strong>
                        <br />
                        {ev.venue}
                      </div>
                      <a href={ev.link} className="exhibition-series-card-btn mt-2">
                        <span className="me-2">
                          <img src="/assests/img/gaIIcon.svg" alt="gallery icon" />
                        </span>
                        View Gallery
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExhibitionSeries;
