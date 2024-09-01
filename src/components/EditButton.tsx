import Image from "next/image";
export function EditButton() {
  return (
    <label htmlFor="edit-button">
      <button
        className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md"
        id="edit-button"
      >
        <Image src="/edit.svg" alt="edit" width={16} height={16} />
        <span className="text-sm">Edit Profile</span>
      </button>
    </label>
  );
}
