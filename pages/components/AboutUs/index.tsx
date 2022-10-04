function AboutUs() {
  return (
    <section className="pt-4 pb-5" data-aos="fade-up">
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <img
              className="card-img-top"
              src="http://placeimg.com/640/480"
              alt="Card image cap"
            />
            <div className="card-body text-center">
              <img
                className="rounded-circle shadow mt-neg5"
                src="assets/img/demo/avatar.png"
                width="70"
              />
              <h5 className="card-title">Sal</h5>
              <p className="card-text text-muted">
                Hi, I am the author of Anchor Bootstrap UI Kit @wowthemesnet.
              </p>
              <div className="text-center">
                <a target="_blank" href="https://facebook.com/wowthemesnet/">
                  <span className="iconbox iconsmall rounded-circle bg-secondary text-white mr-1">
                    <i className="fab fa-facebook-f"></i>
                  </span>
                </a>
                <a target="_blank" href="https://twitter.com/wowthemesnet">
                  <span className="iconbox iconsmall rounded-circle bg-info text-white mr-1">
                    <i className="fab fa-twitter"></i>
                  </span>
                </a>
                <a target="_blank" href="https://github.com/wowthemesnet">
                  <span className="iconbox iconsmall rounded-circle bg-dark text-white">
                    <i className="fab fa-github"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
