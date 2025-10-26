import Image from "next/image";
import "./styles.scss";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Building Your Dreams, One Brick at a Time</h1>
          <p>
            Professional construction services with over 20 years of experience.
            From residential to commercial projects, we deliver quality and
            reliability.
          </p>
          <a href="#contact" className="cta-button">
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <h2>About Our Construction Company</h2>
          <p>
            We are a leading construction company dedicated to providing
            high-quality building services. Our team of experienced
            professionals ensures that every project is completed on time,
            within budget, and to the highest standards.
          </p>
          <Image
            src="/placeholder-about.jpg"
            alt="Construction team"
            width={600}
            height={400}
            className="about-image"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="services-grid">
          <div className="service-item">
            <Image
              src="/placeholder-residential.jpg"
              alt="Residential construction"
              width={300}
              height={200}
              className="service-image"
            />
            <h3>Residential Construction</h3>
            <p>
              Custom home building, renovations, and additions. We bring your
              vision to life with expert craftsmanship.
            </p>
          </div>
          <div className="service-item">
            <Image
              src="/placeholder-commercial.jpg"
              alt="Commercial construction"
              width={300}
              height={200}
              className="service-image"
            />
            <h3>Commercial Construction</h3>
            <p>
              Office buildings, retail spaces, and industrial facilities.
              Scalable solutions for your business needs.
            </p>
          </div>
          <div className="service-item">
            <Image
              src="/placeholder-renovation.jpg"
              alt="Renovation services"
              width={300}
              height={200}
              className="service-image"
            />
            <h3>Renovation & Remodeling</h3>
            <p>
              Transform existing spaces with our expert renovation services.
              Modernize and upgrade your property.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <h2>Our Construction Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-content">
              <h3>1. Consultation & Planning</h3>
              <p>
                We start with a detailed consultation to understand your needs,
                budget, and timeline. Our experts create a comprehensive plan
                tailored to your project.
              </p>
            </div>
            <Image
              src="/placeholder-planning.jpg"
              alt="Planning phase"
              width={400}
              height={250}
              className="step-image"
            />
          </div>
          <div className="process-step">
            <div className="step-content">
              <h3>2. Design & Engineering</h3>
              <p>
                Our design team creates detailed blueprints and engineering
                specifications. We ensure all plans meet local building codes
                and regulations.
              </p>
            </div>
            <Image
              src="/placeholder-design.jpg"
              alt="Design phase"
              width={400}
              height={250}
              className="step-image"
            />
          </div>
          <div className="process-step">
            <div className="step-content">
              <h3>3. Construction & Building</h3>
              <p>
                Our skilled construction team brings the plans to life. We use
                high-quality materials and maintain strict safety standards
                throughout the process.
              </p>
            </div>
            <Image
              src="/placeholder-construction.jpg"
              alt="Construction phase"
              width={400}
              height={250}
              className="step-image"
            />
          </div>
          <div className="process-step">
            <div className="step-content">
              <h3>4. Final Inspection & Handover</h3>
              <p>
                Before handover, we conduct thorough inspections to ensure
                everything meets our quality standards. We provide warranties
                and ongoing support.
              </p>
            </div>
            <Image
              src="/placeholder-inspection.jpg"
              alt="Inspection phase"
              width={400}
              height={250}
              className="step-image"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="contact-content">
          <h2>Contact Us</h2>
          <p>
            Ready to start your construction project? Get in touch with us
            today for a free consultation and quote.
          </p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone" />
            <textarea placeholder="Project Description" rows={4} required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}
