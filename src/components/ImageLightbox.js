import React from "react";
import Modal from "./Modal";

export default function ImageLightbox({ open, onClose, src, alt }) {
  return (
    <Modal open={open} onClose={onClose} title="Preview" maxWidth="max-w-5xl">
      <div className="flex items-center justify-center">
        <img
          src={src}
          alt={alt || "Preview"}
          className="h-auto w-full rounded-2xl object-contain"
          loading="lazy"
        />
      </div>
    </Modal>
  );
}
