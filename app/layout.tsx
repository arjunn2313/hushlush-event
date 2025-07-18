import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/public/assets/css/vendor/aos.css"
import "/public/assets/css/vendor/bootstrap.min.css"
import "/public/assets/css/vendor/fontawesome.css"
import "/public/assets/css/vendor/magnific-popup.css"
import "/public/assets/css/vendor/mobile.css"
// import "/public/assets/css/vendor/owlcarousel.min.css"
import "/public/assets/css/vendor/sidebar.css"
import "/public/assets/css/vendor/slick-slider.css"
import "/public/assets/css/vendor/nice-select.css"
import "/public/assets/css/vendor/odometer.css"
import "/public/assets/css/main.css"

import type { Metadata } from "next"
import { Figtree, Space_Grotesk } from "next/font/google"

const figtree = Figtree({
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: "--figtree",
	display: 'swap',
})
const grotesk = Space_Grotesk({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--grotesk",
	display: 'swap',
})

export const metadata: Metadata = {
  title: "HushLush - Events & Wedding Planners",
  description: "HushLush specializes in crafting unforgettable weddings and events with elegance, creativity, and seamless execution.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		// <html lang="en">	
		// 	<body className={`${figtree.variable} ${grotesk.variable}`}>{children}</body>
		// </html>
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.png" />
				{/* You can use PNG too: <link rel="icon" type="image/png" href="/favicon.png" /> */}
			</head>
			<body className={`${figtree.variable} ${grotesk.variable}`}>
				{children}
			</body>
		</html>
	)
}
