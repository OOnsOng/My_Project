document.addEventListener('DOMContentLoaded', () => {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  document.body.appendChild(circle);

  let mouseX = 0,
    mouseY = 0;
  let circleX = 0,
    circleY = 0;

  const delay = 1; // 딜레이 시간을 0.01초로 설정

  function animate() {
    let distX = mouseX - circleX;
    let distY = mouseY - circleY;

    circleX += distX * delay;
    circleY += distY * delay;

    circle.style.transform = `translate3d(${circleX}px, ${circleY}px, 0)`;

    requestAnimationFrame(animate);
  }

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  animate();
});
