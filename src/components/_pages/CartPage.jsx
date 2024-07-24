

export default function CartMenu({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>
      )}
      <div 
        className=
        {`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`
        }
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>
          <button 
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
          <p>Your cart is empty.</p>
        </div>
      </div>
    </>
  );
}