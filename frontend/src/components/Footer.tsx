export default function Footer() {
  return (
    <footer className="flex flex-wrap text-center justify-center bg-white/5 backdrop-blur-md shadow-md p-4 ">
       &copy; {new Date().getFullYear()} Your Name. All rights reserved.
    </footer>
  );
}
