import AOS from "aos";
import PropTypes from "prop-types";

function Hero({ title }) {
	AOS.init({
		duration: 1200,
		easing: "ease-in",
	});

	return (
		<div className="hero overlay inner-page bg-primary py-5">
			<div className="container">
				<div className="row align-items-center justify-content-center text-center pt-5">
					<div className="col-lg-6">
						<h1
							className="heading text-white mb-3"
							data-aos="fade-up"
						>
							{title ? title : "Blogs"}
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

const propTypes = {
	title: PropTypes.string,
};

Hero.propTypes = propTypes;

export default Hero;
