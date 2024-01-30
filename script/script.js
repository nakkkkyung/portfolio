let bubblez = SVG("#maskBubblez");
let numOfBubblez = 20;

let circles = [{ x: 0, y: 0, radius: 0 }];

for (let i = 0; i < numOfBubblez; i++) {
	function drawCircleWithoutOverlap() {
		let newX = gsap.utils.random(0, 100);
		let newY = gsap.utils.random(0, 100);
		let newRadius = gsap.utils.random(4, 20);
		let newCircle = { x: newX, y: newY, radius: newRadius };
		let isOverlapping = false;

		circles.forEach((circle, i) => {
			let deltaX = newCircle.x - circles[i].x;
			let deltaY = newCircle.y - circles[i].y;
			let dist = Math.hypot(deltaX, deltaY);
			let radiiiis = circles[i].radius + newCircle.radius;

			if (dist < radiiiis) {
				isOverlapping = true;
			}
		});

		if (isOverlapping) {
			drawCircleWithoutOverlap();
		} else {
			bubblez
				.circle(newCircle.radius)
				.x(newCircle.x)
				.y(newCircle.y)
				.fill("#fff")
				.opacity(newCircle.radius / 20);

			circles.push(newCircle);
		}
	}

	drawCircleWithoutOverlap();
}

gsap.registerPlugin(ScrollTrigger);

gsap.to("circle", {
	y: () => 1 - gsap.utils.random(0.1, 0.4) * ScrollTrigger.maxScroll(window),
	ease: "none",
	scrollTrigger: {
		start: 0,
		end: "max",
		invalidateOnRefresh: true,
		scrub: 2
	}
});

gsap.to("#text", {
	attr: {
		startOffset: -2500
	},
	scrollTrigger: {
		start: 0,
		end: "20%",
		scrub: 2
	}
});