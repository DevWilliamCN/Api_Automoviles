const autos = [
	{
	  "id": 1,
	  "marca": "Ford",
	  "modelo": "Ranger",
	  "año": 2020,
	  "precio": 23293,
	  "rendimiento_km_l": 13.7,
	  "categoria": "Compacto",
	  "ranking": 4.3
	},
	{
	  "id": 2,
	  "marca": "Nissan",
	  "modelo": "Versa",
	  "año": 2022,
	  "precio": 17282,
	  "rendimiento_km_l": 15.7,
	  "categoria": "Sedán",
	  "ranking": 4.7
	},
	{
	  "id": 3,
	  "marca": "Mazda",
	  "modelo": "CX-5",
	  "año": 2022,
	  "precio": 25101,
	  "rendimiento_km_l": 19.0,
	  "categoria": "Pickup",
	  "ranking": 4.9
	},
	{
	  "id": 4,
	  "marca": "Suzuki",
	  "modelo": "Swift",
	  "año": 2021,
	  "precio": 24415,
	  "rendimiento_km_l": 21.8,
	  "categoria": "Sedán",
	  "ranking": 4.5
	},
	{
	  "id": 5,
	  "marca": "Kia",
	  "modelo": "Sportage",
	  "año": 2022,
	  "precio": 29578,
	  "rendimiento_km_l": 16.7,
	  "categoria": "Hatchback",
	  "ranking": 4.4
	},
	{
	  "id": 6,
	  "marca": "Nissan",
	  "modelo": "Versa",
	  "año": 2024,
	  "precio": 26068,
	  "rendimiento_km_l": 17.6,
	  "categoria": "Pickup",
	  "ranking": 4.9
	},
	{
	  "id": 7,
	  "marca": "Honda",
	  "modelo": "Civic",
	  "año": 2023,
	  "precio": 16288,
	  "rendimiento_km_l": 19.8,
	  "categoria": "Compacto",
	  "ranking": 4.2
	},
	{
	  "id": 8,
	  "marca": "Honda",
	  "modelo": "Civic",
	  "año": 2021,
	  "precio": 29805,
	  "rendimiento_km_l": 16.8,
	  "categoria": "Sedán",
	  "ranking": 4.1
	},
	{
	  "id": 9,
	  "marca": "Kia",
	  "modelo": "Sportage",
	  "año": 2022,
	  "precio": 21214,
	  "rendimiento_km_l": 17.7,
	  "categoria": "Hatchback",
	  "ranking": 4.8
	},
	{
	  "id": 10,
	  "marca": "Hyundai",
	  "modelo": "Creta",
	  "año": 2020,
	  "precio": 22725,
	  "rendimiento_km_l": 15.7,
	  "categoria": "Pickup",
	  "ranking": 4.5
	},
	{
	  "id": 11,
	  "marca": "Volkswagen",
	  "modelo": "Tiguan",
	  "año": 2020,
	  "precio": 26872,
	  "rendimiento_km_l": 21.2,
	  "categoria": "Hatchback",
	  "ranking": 4.8
	},
	{
	  "id": 12,
	  "marca": "Nissan",
	  "modelo": "Versa",
	  "año": 2021,
	  "precio": 16195,
	  "rendimiento_km_l": 16.1,
	  "categoria": "Hatchback",
	  "ranking": 4.6
	},
	{
	  "id": 13,
	  "marca": "Hyundai",
	  "modelo": "Creta",
	  "año": 2020,
	  "precio": 17522,
	  "rendimiento_km_l": 21.5,
	  "categoria": "SUV",
	  "ranking": 4.8
	},
	{
	  "id": 14,
	  "marca": "Volkswagen",
	  "modelo": "Tiguan",
	  "año": 2022,
	  "precio": 15260,
	  "rendimiento_km_l": 13.0,
	  "categoria": "Compacto",
	  "ranking": 4.7
	},
	{
	  "id": 15,
	  "marca": "Hyundai",
	  "modelo": "Creta",
	  "año": 2020,
	  "precio": 32979,
	  "rendimiento_km_l": 14.4,
	  "categoria": "Pickup",
	  "ranking": 4.4
	},
	{
	  "id": 16,
	  "marca": "Chevrolet",
	  "modelo": "Onix",
	  "año": 2021,
	  "precio": 31721,
	  "rendimiento_km_l": 20.5,
	  "categoria": "Compacto",
	  "ranking": 4.7
	},
	{
	  "id": 17,
	  "marca": "Kia",
	  "modelo": "Sportage",
	  "año": 2020,
	  "precio": 15356,
	  "rendimiento_km_l": 16.7,
	  "categoria": "Pickup",
	  "ranking": 4.1
	},
	{
	  "id": 18,
	  "marca": "Honda",
	  "modelo": "Civic",
	  "año": 2022,
	  "precio": 18188,
	  "rendimiento_km_l": 16.1,
	  "categoria": "Compacto",
	  "ranking": 4.4
	},
	{
	  "id": 19,
	  "marca": "Toyota",
	  "modelo": "Corolla",
	  "año": 2020,
	  "precio": 25183,
	  "rendimiento_km_l": 20.6,
	  "categoria": "Pickup",
	  "ranking": 4.0
	},
	{
	  "id": 20,
	  "marca": "Ford",
	  "modelo": "Ranger",
	  "año": 2024,
	  "precio": 26557,
	  "rendimiento_km_l": 12.9,
	  "categoria": "Hatchback",
	  "ranking": 4.8
	},
	{
	  "id": 21,
	  "marca": "Chevrolet",
	  "modelo": "Onix",
	  "año": 2023,
	  "precio": 23248,
	  "rendimiento_km_l": 17.5,
	  "categoria": "Pickup",
	  "ranking": 4.7
	},
	{
	  "id": 22,
	  "marca": "Nissan",
	  "modelo": "Versa",
	  "año": 2021,
	  "precio": 20127,
	  "rendimiento_km_l": 17.0,
	  "categoria": "Sedán",
	  "ranking": 4.6
	},
	{
	  "id": 23,
	  "marca": "Mazda",
	  "modelo": "CX-5",
	  "año": 2022,
	  "precio": 16195,
	  "rendimiento_km_l": 13.6,
	  "categoria": "SUV",
	  "ranking": 4.4
	},
	{
	  "id": 24,
	  "marca": "Chevrolet",
	  "modelo": "Onix",
	  "año": 2021,
	  "precio": 32563,
	  "rendimiento_km_l": 18.6,
	  "categoria": "Sedán",
	  "ranking": 4.9
	},
	{
	  "id": 25,
	  "marca": "Ford",
	  "modelo": "Ranger",
	  "año": 2021,
	  "precio": 22243,
	  "rendimiento_km_l": 20.6,
	  "categoria": "Hatchback",
	  "ranking": 5.0
	},
	{
	  "id": 26,
	  "marca": "Nissan",
	  "modelo": "Versa",
	  "año": 2023,
	  "precio": 24534,
	  "rendimiento_km_l": 19.5,
	  "categoria": "Hatchback",
	  "ranking": 4.2
	},
	{
	  "id": 27,
	  "marca": "Toyota",
	  "modelo": "Corolla",
	  "año": 2020,
	  "precio": 26512,
	  "rendimiento_km_l": 17.6,
	  "categoria": "Pickup",
	  "ranking": 4.0
	},
	{
	  "id": 28,
	  "marca": "Mazda",
	  "modelo": "CX-5",
	  "año": 2024,
	  "precio": 28740,
	  "rendimiento_km_l": 19.5,
	  "categoria": "Pickup",
	  "ranking": 4.2
	},
	{
	  "id": 29,
	  "marca": "Suzuki",
	  "modelo": "Swift",
	  "año": 2022,
	  "precio": 25575,
	  "rendimiento_km_l": 12.7,
	  "categoria": "Pickup",
	  "ranking": 4.3
	},
	{
	  "id": 30,
	  "marca": "Hyundai",
	  "modelo": "Creta",
	  "año": 2020,
	  "precio": 33955,
	  "rendimiento_km_l": 19.1,
	  "categoria": "SUV",
	  "ranking": 4.0
	},
	{
	  "id": 31,
	  "marca": "Toyota",
	  "modelo": "Corolla",
	  "año": 2023,
	  "precio": 27959,
	  "rendimiento_km_l": 16.4,
	  "categoria": "Pickup",
	  "ranking": 4.1
	},
	{
	  "id": 32,
	  "marca": "Mazda",
	  "modelo": "CX-5",
	  "año": 2021,
	  "precio": 19848,
	  "rendimiento_km_l": 14.9,
	  "categoria": "SUV",
	  "ranking": 4.4
	},
	{
	  "id": 33,
	  "marca": "Hyundai",
	  "modelo": "Creta",
	  "año": 2021,
	  "precio": 21029,
	  "rendimiento_km_l": 14.9,
	  "categoria": "Sedán",
	  "ranking": 4.0
	},
	{
	  "id": 34,
	  "marca": "Kia",
	  "modelo": "Sportage",
	  "año": 2021,
	  "precio": 29798,
	  "rendimiento_km_l": 17.7,
	  "categoria": "SUV",
	  "ranking": 4.9
	},
	{
	  "id": 35,
	  "marca": "Nissan",
	  "modelo": "Versa",
	  "año": 2024,
	  "precio": 20861,
	  "rendimiento_km_l": 19.7,
	  "categoria": "Sedán",
	  "ranking": 4.1
	},
	{
	  "id": 36,
	  "marca": "Chevrolet",
	  "modelo": "Onix",
	  "año": 2023,
	  "precio": 33667,
	  "rendimiento_km_l": 20.6,
	  "categoria": "Compacto",
	  "ranking": 4.5
	},
	{
	  "id": 37,
	  "marca": "Volkswagen",
	  "modelo": "Tiguan",
	  "año": 2021,
	  "precio": 17524,
	  "rendimiento_km_l": 22.0,
	  "categoria": "SUV",
	  "ranking": 4.1
	},
	{
	  "id": 38,
	  "marca": "Volkswagen",
	  "modelo": "Tiguan",
	  "año": 2024,
	  "precio": 28618,
	  "rendimiento_km_l": 12.6,
	  "categoria": "SUV",
	  "ranking": 4.2
	},
	{
	  "id": 39,
	  "marca": "Hyundai",
	  "modelo": "Creta",
	  "año": 2023,
	  "precio": 27742,
	  "rendimiento_km_l": 16.0,
	  "categoria": "SUV",
	  "ranking": 5.0
	},
	{
	  "id": 40,
	  "marca": "Ford",
	  "modelo": "Ranger",
	  "año": 2024,
	  "precio": 22423,
	  "rendimiento_km_l": 19.7,
	  "categoria": "Pickup",
	  "ranking": 4.4
	},
	{
	  "id": 41,
	  "marca": "Mazda",
	  "modelo": "CX-5",
	  "año": 2024,
	  "precio": 15522,
	  "rendimiento_km_l": 18.8,
	  "categoria": "Sedán",
	  "ranking": 4.3
	},
	{
	  "id": 42,
	  "marca": "Chevrolet",
	  "modelo": "Onix",
	  "año": 2024,
	  "precio": 20603,
	  "rendimiento_km_l": 16.4,
	  "categoria": "Pickup",
	  "ranking": 4.3
	},
	{
	  "id": 43,
	  "marca": "Kia",
	  "modelo": "Sportage",
	  "año": 2021,
	  "precio": 18541,
	  "rendimiento_km_l": 13.3,
	  "categoria": "Pickup",
	  "ranking": 4.4
	},
	{
	  "id": 44,
	  "marca": "Honda",
	  "modelo": "Civic",
	  "año": 2023,
	  "precio": 23387,
	  "rendimiento_km_l": 15.0,
	  "categoria": "Compacto",
	  "ranking": 4.2
	},
	{
	  "id": 45,
	  "marca": "Ford",
	  "modelo": "Ranger",
	  "año": 2022,
	  "precio": 31248,
	  "rendimiento_km_l": 12.2,
	  "categoria": "SUV",
	  "ranking": 4.8
	},
	{
	  "id": 46,
	  "marca": "Hyundai",
	  "modelo": "Creta",
	  "año": 2024,
	  "precio": 19829,
	  "rendimiento_km_l": 21.9,
	  "categoria": "Pickup",
	  "ranking": 4.6
	},
	{
	  "id": 47,
	  "marca": "Volkswagen",
	  "modelo": "Tiguan",
	  "año": 2024,
	  "precio": 18509,
	  "rendimiento_km_l": 13.8,
	  "categoria": "Pickup",
	  "ranking": 4.9
	},
	{
	  "id": 48,
	  "marca": "Mazda",
	  "modelo": "CX-5",
	  "año": 2021,
	  "precio": 30787,
	  "rendimiento_km_l": 16.1,
	  "categoria": "Compacto",
	  "ranking": 4.9
	},
	{
	  "id": 49,
	  "marca": "Volkswagen",
	  "modelo": "Tiguan",
	  "año": 2023,
	  "precio": 20807,
	  "rendimiento_km_l": 19.0,
	  "categoria": "Hatchback",
	  "ranking": 4.0
	},
	{
	  "id": 50,
	  "marca": "Suzuki",
	  "modelo": "Swift",
	  "año": 2020,
	  "precio": 30394,
	  "rendimiento_km_l": 20.0,
	  "categoria": "SUV",
	  "ranking": 4.7
	}
  ];
  
  export default {
	async fetch(request) {
	  const url = new URL(request.url);
	  const pathname = url.pathname.replace(/\/+$/, "");
  
	  // === GET /api/docs ===
	  if (pathname === "/api/docs" && request.method === "GET") {
		const doc = `

 ▶️ Documentacion de Proyecto, Desarrollador Acargo William Cubero Navarro
 
 ▶️ Red social: Solamente si necesitas explicacion del  proyecto: https://www.linkedin.com/in/william-cubero-navarro-75880727a/?originalSubdomain=cr
  
 
  API: Análisis de Automóviles en Costa Rica
  Base URL: https://api-william.datapiwilliam.workers.dev
  
  Endpoints disponibles:
  
  ▶️ GET /api/autos
  → Lista todos los autos disponibles.
  → Filtros opcionales: ?marca=Toyota&categoria=SUV
  
  ➕ POST /api/autos
  → Agrega un nuevo auto. Body JSON requerido:
  {
	"marca": "Toyota",
	"modelo": "Yaris",
	"año": 2024,
	"precio": 18000,
	"rendimiento_km_l": 18,
	"categoria": "Sedán",
	"ranking": 4.3
  }
  
  🔄 PUT /api/autos/:id
  → Reemplaza completamente el auto con ese ID.
  
  🩹 PATCH /api/autos/:id
  → Actualiza parcialmente un auto.
  
  🖑 DELETE /api/autos/:id
  → Elimina el auto con el ID indicado.
  
  📄 GET /api/docs
  → Devuelve esta documentación en formato texto.
  
  Códigos de error:
  • 404 → Ruta no encontrada
  • 400 → Faltan campos, JSON inválido o ID inexistente
  • 201 → Recurso creado correctamente
  • 204 → Eliminación exitosa
		`;
		return new Response(doc, {
		  headers: { "Content-Type": "text/plain; charset=utf-8" }
		});
	  }
  
	  // === GET /api/autos ===
	  if (pathname === "/api/autos" && request.method === "GET") {
		const marca = url.searchParams.get("marca");
		const categoria = url.searchParams.get("categoria");
  
		let resultados = autos;
  
		if (marca) {
		  resultados = resultados.filter(auto => auto.marca.toLowerCase() === marca.toLowerCase());
		}
  
		if (categoria) {
		  resultados = resultados.filter(auto => auto.categoria.toLowerCase() === categoria.toLowerCase());
		}
  
		return new Response(JSON.stringify(resultados, null, 2), {
		  headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*"
		  }
		});
	  }
  
	  // === POST /api/autos ===
	  if (pathname === "/api/autos" && request.method === "POST") {
		try {
		  const data = await request.json();
		  const campos = ["marca", "modelo", "año", "precio", "rendimiento_km_l", "categoria", "ranking"];
  
		  for (const campo of campos) {
			if (!data[campo]) {
			  return new Response(JSON.stringify({ error: `Falta el campo: ${campo}` }), {
				status: 400,
				headers: { "Content-Type": "application/json" }
			  });
			}
		  }
  
		  const nuevoAuto = {
			id: autos.reduce((max, a) => Math.max(max, a.id), 0) + 1,
			...data
		  };
  
		  autos.push(nuevoAuto);
  
		  return new Response(JSON.stringify(nuevoAuto, null, 2), {
			status: 201,
			headers: { "Content-Type": "application/json" }
		  });
		} catch {
		  return new Response(JSON.stringify({ error: "JSON inválido" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		  });
		}
	  }
  
	  // === PUT /api/autos/:id ===
	  if (pathname.startsWith("/api/autos/") && request.method === "PUT") {
		const id = parseInt(pathname.split("/").pop());
		const index = autos.findIndex(a => a.id === id);
  
		if (index === -1) {
		  return new Response(JSON.stringify({ error: "Auto no encontrado" }), { status: 404 });
		}
  
		try {
		  const data = await request.json();
		  autos[index] = { id, ...data };
  
		  return new Response(JSON.stringify(autos[index], null, 2), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		  });
		} catch {
		  return new Response(JSON.stringify({ error: "JSON inválido" }), { status: 400 });
		}
	  }
  
	  // === PATCH /api/autos/:id ===
	  if (pathname.startsWith("/api/autos/") && request.method === "PATCH") {
		const id = parseInt(pathname.split("/").pop());
		const index = autos.findIndex(a => a.id === id);
  
		if (index === -1) {
		  return new Response(JSON.stringify({ error: "Auto no encontrado" }), { status: 404 });
		}
  
		try {
		  const data = await request.json();
		  autos[index] = { ...autos[index], ...data };
  
		  return new Response(JSON.stringify(autos[index], null, 2), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		  });
		} catch {
		  return new Response(JSON.stringify({ error: "JSON inválido" }), { status: 400 });
		}
	  }
  
	  // === DELETE /api/autos/:id ===
	  if (pathname.startsWith("/api/autos/") && request.method === "DELETE") {
		const id = parseInt(pathname.split("/").pop());
		const index = autos.findIndex(a => a.id === id);
  
		if (index === -1) {
		  return new Response(JSON.stringify({ error: "Auto no encontrado" }), { status: 404 });
		}
  
		autos.splice(index, 1);
		return new Response(JSON.stringify({ mensaje: "Auto eliminado" }), {
		  status: 204,
		  headers: { "Content-Type": "application/json" }
		});
	  }
  
	  // === Fallback ===
	  return new Response(JSON.stringify({ error: "Ruta no encontrada" }), {
		status: 404,
		headers: { "Content-Type": "application/json" }
	  });
	}
  };