export default function SignInButton({ className, style, children = 'Member sign in →' }) {
  return (
    <button
      type="button"
      className={className}
      style={style}
      aria-disabled="true"
      title="Member portal coming soon"
      onClick={(e) => e.preventDefault()}
    >
      {children}
    </button>
  );
}
