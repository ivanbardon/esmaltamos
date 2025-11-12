import React from 'react';

export default function Privacy() {
	return (
		<div className="container mx-auto px-4 py-12 text-foreground">
			<header className="text-center mb-10">
				<h1 className="text-3xl md:text-4xl font-bold tracking-tight">Privacidad y Cookies</h1>
				<p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
					Nos tomamos tu privacidad en serio. En esta web no utilizamos cookies de seguimiento ni
					hacemos perfiles. Puedes navegar con total tranquilidad.
				</p>
			</header>

			<section className="mx-auto max-w-3xl space-y-6 bg-card border border-border rounded-xl p-6 shadow-sm">
				<h2 className="text-xl font-semibold text-card-foreground">¿Qué cookies usamos?</h2>
				<p className="text-muted-foreground">
					Únicamente podemos utilizar cookies estrictamente necesarias para el funcionamiento básico
					del sitio (por ejemplo, recordar si has cerrado un aviso). No empleamos cookies de
					analítica, publicidad ni terceros con fines de seguimiento.
				</p>

				<h2 className="text-xl font-semibold text-card-foreground">¿Qué datos recogemos?</h2>
				<p className="text-muted-foreground">
					No recopilamos datos personales a través de cookies. Si nos contactas por los medios
					disponibles en la web, la información que nos proporciones solo se usará para atender tu
					solicitud.
				</p>

				<h2 className="text-xl font-semibold text-card-foreground">Tu control</h2>
				<p className="text-muted-foreground">
					Puedes gestionar y borrar cookies desde la configuración de tu navegador en cualquier
					momento. Dado que no usamos cookies de seguimiento, tu experiencia no debería verse
					afectada al bloquearlas.
				</p>

				<div className="pt-2 text-sm text-muted-foreground">
					Última actualización: {new Date().toLocaleDateString()}
				</div>
			</section>
		</div>
	);
}

