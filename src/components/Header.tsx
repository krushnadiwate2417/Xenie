export default function Header() {
  return (
    <div className="header flex w-full mx-24 bg-white py-7 px-20 items-center justify-between shadow-md">
      {/* Logo */}
      <div>
        <h1 className="text-3xl font-bold">Xeine</h1>
      </div>

      {/* Navigation */}
      <div className="flex gap-7 text-xs items-center">
        <div>
          <label>Features</label>
          <select></select>
        </div>
        <div>
          <h2>Pricing</h2>
        </div>
        <div>
          <h2>Blogs</h2>
        </div>
        <div>
          <label>Resources</label>
          <select></select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-7 text-xs items-center">
        <button className="cursor-pointer">Sign in</button>
        <button className="cursor-pointer bg-[#453C89] text-white py-2.5 px-5 rounded-3xl font-inter">
          Start Free Trial
        </button>
      </div>
    </div>
  );
}
