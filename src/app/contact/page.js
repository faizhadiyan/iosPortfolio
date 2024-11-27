export default function Contact() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <p className="mt-2">Feel free to reach out to me via email or through the form below.</p>
      <form className="mt-4">
        <label className="block mb-2 font-medium">Your Email</label>
        <input type="email" className="border p-2 w-full rounded" placeholder="Your email address" />
        <label className="block mt-4 mb-2 font-medium">Message</label>
        <textarea className="border p-2 w-full rounded" rows="4" placeholder="Your message"></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Send</button>
      </form>
    </main>
  );
}
