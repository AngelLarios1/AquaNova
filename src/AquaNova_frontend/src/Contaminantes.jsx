export const Contaminantes = () => {
	return (
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
									<li><a href="#">Sensor de humedad</a></li>
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
					<h1 class="heading-1">Contaminantes del agua</h1>
					<div class="container-products">
					</div>

					<div class="card-product-contaminantes">
					<div class="principal">
						<div class="p1">
							<p>El agua de los ganaderos es utilizada en gran medida para la limpieza del ganado,
								sin embargo esta no es reciclada debido a sus contaminantes
							</p>
						</div>
						<div>
						<img className="i1"></img>
						</div>
					</div>
					<br />
					<br />
					<br />
					<br />
					<div class="principal2">
						<div>
							<img class="i2" url="/src/IMAGENES/contaminantes2.jpeg"></img>
						</div>
						<div class="p2">
							<p> Los principales reciduos que podemos encontrar son metales pesados, detergentes, estiercol,
								grasas animales y fluidos animales y medicamento veterinario.
							</p>

						</div>

					</div>

					<br />
					<br />
					<br />
					<br />

					<div class="principal3">
						<div class="p3">
							<p>Ademas de todos los residuos disueltos en el agua tambien podemos encontrar
								diversa basura organica como plantas secas, ramas, tierra etc...
							</p>
						</div>
						<div>
							<img className="i3" src="/src/contaminantes.jpeg"></img>
						</div>
					</div>
					</div>



					


				</section>
			</body>
		</html>
	)
}

