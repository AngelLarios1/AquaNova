export const Sensor = () =>{
	return(
		<html lang="en">

		<head>
			<meta charset="UTF-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>AQUA NOVA CLEAN</title>
			<link rel="stylesheet" href="styles.css" />

		</head>

		<body class>
			<header>
				<div class="container-hero">
					<div class="container hero">
						<div class="customer-support">

							<div class="content-customer-support">

							</div>
						</div>

						<div class="container-logo">
							<i class="fa-solid fa-mug-hot"></i>
							<h1 class="logo"><a href="/">AQUA NOVA CLEAN</a></h1>
						</div>


					</div>

					<div class="container-navbar">
						<nav class="navbar container">
							<i class="fa-solid fa-bars"></i>
							<ul class="menu">
								<li><a href="/">Inicio</a></li>
								<li><a href="/fibra-capilar">Fibra capilar</a></li>
								<li><a href="/contaminantes">Contaminantes</a></li>
								<li><a href="/cultivos">Cultivos</a></li>
								<li><a href="/sensor">Sensor de humedad</a></li>
								<li><a href="" >Administrar Registros</a></li>
							</ul>


							<form class="search-form">
								<input type="search" placeholder="Buscar..." />
								<button class="btn-search">
									<i class="fa-solid fa-magnifying-glass"></i>
								</button>
							</form>
						</nav>
					</div>
				</div>
			</header>



			<section class="container specials">
				<h1 class="heading-1">Sensor</h1>
				<div class="container-products">
				</div>

				<div class="card-product-contaminantes">
				<div class="principalc1">
					<div class="p1">
						<p>Cual es su utilidad?</p>
						<p>La plantas al estar expuestas al son gran parte de su crecimiento
tienden a quemarse si no tienen un adecuado uso del agua y la luz solar,
puesto que se evapora al contacto con la tierra caliente y lastima las plantas.
						</p>
					</div>
					<div className="ic">
						<img className="is1"></img>
					</div>
				</div>
				<br />
				<br />
				<br />
				<br />
				<div class="principal2">
					<div>
						<img class="is2" url="" alt=""></img>
					</div>
					<div class="p2">
						<p>para que sirve?</p>
					<p>
					<p>Al medir la humedad de la tierra y regarla antes de que este
seca para respectivas plantas, mejora el rendimiento del agua, ya
que al no estar en contacto con la tierra caliente y seca, tendra
menos evaporacion y por ende mejor absorcion de la planta en si.</p>					
</p>
		
					</div>

				</div>

				<br />
				<br />
				<br />
				<br />


				</div>


			</section>
		</body>
	</html>
	)
}