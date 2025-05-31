export default function Button({ type = 'primary', disabled = false, children }) {
  const base = 'py-2 px-4 rounded font-semibold ';
  const styles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-300 text-black hover:bg-gray-400',
    disabled: 'bg-gray-200 text-gray-500 cursor-not-allowed'
  };

  const finalStyle = disabled ? styles.disabled : styles[type] || styles.primary;

  return (
    <button className={base + finalStyle} disabled={disabled}>
      {children}
    </button>
  );
}
