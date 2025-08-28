export default function Button({ children }) {
  return (
    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
      {children}
    </button>
  );
}
