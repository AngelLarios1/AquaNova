export const Cultivos = () => {
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
				<h1 class="heading-1">Cultivos</h1>
				<div class="container-products">
				</div>

				<div class="card-product-contaminantes">
				<div class="principalc1">
					<div class="p1">
						<p>PAPAS:</p>
						<p>El agua de los ganaderos es utilizada en gran medida para la limpieza del ganado,
							sin embargo esta no es reciclada debido a sus contaminantes
						</p>
					</div>
					<div className="ic">
						<img className="icu"></img>
					</div>
				</div>
				<br />
				<br />
				<br />
				<br />
				<div class="principal2">
					<div>
						<img class="i2j" url="" alt=""></img>
					</div>
					<div class="p2">
						<p>RABANOS</p>
					<p>
					<p>*El suelo siempre debe de estar humedo.</p>
					
					<p>*El riego es necesario de 1 a 2 veces por semana.
	Por hectaria (47,000 papas) corresponde de 200 a 250 litros de agua por 5 metros cuadrados.</p>
	<p>*Este tipo de riego solo sera efectivo 25 a 55 dias de no tener presencia del tuberculo, se tendra que repetir la ciembra.</p></p>
		
					</div>

				</div>

				<br />
				<br />
				<br />
				<br />

				<div class="principal3">
					<div class="p3">
						<p>zanahoria</p>
						<p>*Por hectaria (4.5 toneladas de zanahoria) corresponde a 25 litros de agua por metro cuadrados.
El riego se maneja de cada 3 o 4 dias hasta que se vean hojitas contundentes
Este tipo de riego solo sera efectivo hasta maximo 365 dias de no tener presencia del tuberculo, se tendra que repetir la ciembra.
						</p>
					</div>
					<div>
						<img class="i3c" src="" alt="" ></img>
					</div>
				</div>
				</div>



				


			</section>
		</body>
	</html>
	)
}