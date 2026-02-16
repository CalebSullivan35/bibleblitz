import { useState } from "react";

export default function GsameSettingsModal() {
  const [formData, setFormData] = useState();

  return (
    <>
      <button
        className="btn"
        onClick={() =>
          (
            document.getElementById("game_settings_modal") as HTMLDialogElement
          )?.showModal()
        }
      >
        open modal
      </button>
      <dialog id="game_settings_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  );
}
