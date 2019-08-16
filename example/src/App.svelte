<script>
  import Circle from './Circle.svelte';
</script>

<Circle size="80x80" bg="url(https://placekitten.com/80/80) center" />

<br />

<Circle
  size={120}
  bg="radial-gradient(circle, #051937, #004d7a, #008793, #00bf72, #a8eb12) " />

<br />

<Circle
  size={180}
  bg="linear-gradient(45deg, #EE617D 25%, #3D6F8E 25%, #3D6F8E 50%, #EE617D 50%,
  #EE617D 75%, #3D6F8E 75%, #3D6F8E 100%) center / 100px 20px" />

<br />

<Circle size="250/200" bg="url(https://placekitten.com/250/200) center" />
