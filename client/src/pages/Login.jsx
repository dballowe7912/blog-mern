const Login = () => {
	return (
		<section className="section bg-light">
			<div className="container d-flex justify-content-center align-items-center mt-5 mb-5">
				<div className="row">
					<div className="col-md-6 offset-md-3 col-xl-4 offset-xl-4">
						<div className="card shadow">
							<img
								src="/images/hero_1.jpg"
								alt=""
								className="card-img-top"
							/>
							<div className="card-body">
								<h5 className="card-title">Login</h5>
								<form
									action="/login"
									method="POST"
									className="validated-form"
									noValidate
								>
									<div className="mb-3">
										<label
											className="form-label"
											htmlFor="username"
										>
											Username
										</label>
										<input
											className="form-control"
											type="text"
											id="username"
											name="username"
											autoFocus
											required
										/>
										<div className="valid-feedback">Looks good!</div>
									</div>

									<div className="mb-3">
										<label
											className="form-label"
											htmlFor="password"
										>
											Password
										</label>
										<input
											className="form-control"
											type="password"
											id="password"
											name="password"
											required
										/>
										<div className="valid-feedback">Looks good!</div>
									</div>
									<button className="btn btn-primary btn-block">Login</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Login;
