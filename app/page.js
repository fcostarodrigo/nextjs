export default function Home() {
  return (
    <main>
      <h3>Big Android</h3>
      <video controls width="250">
        <source src="/big.mp4" type="video/mp4" />
      </video>

      <h3>Small Android</h3>
      <video controls width="250">
        <source src="/small.mp4" type="video/mp4" />
      </video>

      <h3>Mac</h3>
      <video controls width="250">
        <source src="/mac.MOV" type="video/quicktime" />
      </video>
    </main>
  );
}
