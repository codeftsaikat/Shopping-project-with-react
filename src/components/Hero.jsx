const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p className="hero-section-p">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="category-btn">Category</button>
        </div>
        <p className="shopping">Also Available On</p>
        <img src="/images/shops.png" alt="shop image" />
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="shoe image" />
      </div>
    </section>
  );
};

export default Hero;
